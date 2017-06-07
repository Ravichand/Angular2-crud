import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Leave } from '../Models/Leave';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Injectable()
export class LeaveFetchService {
    
//    leaves: Leave[];
    constructor (private http: Http) {}

    private leavesUrl = 'http://angularrampupapi.azurewebsites.net/api/leaves';


    getLeaves(): Observable<Leave[]> {
        return this.http.get(this.leavesUrl)

            .map((response: Response) => <Leave[]>response.json())

            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    saveLeave(leave: Leave) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.leavesUrl, leave, options)
            .toPromise()
            .then(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}