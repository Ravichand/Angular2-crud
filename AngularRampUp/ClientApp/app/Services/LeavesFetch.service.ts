import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ILeave } from '../Models/Leave';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Injectable()
export class LeaveFetchService {
    
//    leaves: Leave[];
    constructor (private http: Http) {}

    private leavesUrl = 'http://angularrampupapi.azurewebsites.net/api/leaves';

    getLeaves(): Observable<ILeave[]> {
        return this.http.get(this.leavesUrl)

            .map((response: Response) => <ILeave[]>response.json())

            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}