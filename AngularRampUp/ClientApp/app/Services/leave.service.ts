import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Leave } from '../Models/Leave';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class LeaveService {

    //    leaves: Leave[];
    constructor(private http: Http) { }

    //private leavesUrl = 'http://angularrampupapi.azurewebsites.net/api/leaves';
    private leavesUrl = 'http://localhost:21076/api/leaves';


    getLeaves(): Observable<Leave[]> {
        return this.http.get(this.leavesUrl)

            .map((response: Response) => <Leave[]>response.json())

            .catch(this.handleErrorPromise);
    }
    saveLeave(leave: any) {

        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        let obj: Leave = leave;
        obj.StartDate = leave.StartDate.formatted;
        obj.EndDate = leave.EndDate.formatted;
        let body = JSON.stringify(obj);
        return this.http.post(this.leavesUrl, body, options)
            .toPromise()
            .then(res => {
                //this.toasterService.success('Leave Saved', 'Leave Saved Successfully', true, 1000);
                res.json()
            })
            .catch(this.handleErrorPromise);
    }

    deleteLeave(id: number) {
        return this.http.delete(this.leavesUrl + '/' + id)
            .toPromise()
            .then(res => {
                //this.toasterService.success('Leave Deleted', 'Leave Deleted Successfully', true, 1000);
            }).catch(this.handleErrorPromise);
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
            //this.toasterService.error('Fialed to save leave', error.message, true, 2000);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}