import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Leave } from '../../Models/Leave';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    leaves: Leave[];

    constructor(http: Http) {
        http.get('http://angularrampupapi.azurewebsites.net/api/leaves').subscribe(result => {
            console.log(result);
            this.leaves = result.json() as Leave[];
        });
    }
}
