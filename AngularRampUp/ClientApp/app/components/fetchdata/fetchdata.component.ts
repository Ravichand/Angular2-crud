import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ILeave } from "../../Models/Leave";
import { LeaveFetchService } from "../../Services/LeavesFetch.service";

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent implements OnInit {

    leaves: ILeave[];
    errorMessage: string;

    constructor(private _leaveService: LeaveFetchService) {
    
    }
    ngOnInit(): void {
        this._leaveService.getLeaves()
        .subscribe(leaves => this.leaves = leaves,
        error => this.errorMessage = <any>error);
    }
}
