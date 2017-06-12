import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Leave } from '../../Models/Leave';
import { LeaveService } from "../../Services/leave.service";
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'leave-form',
    templateUrl: './leaveform.component.html',
    styleUrls: ['./leaveform.component.css']
})
export class LeaveFormComponent {

    constructor(private _leaveService: LeaveService, private router: Router) {

    }
    @Input() leave: Leave = new Leave();
    @Input() showLeave: boolean = false;
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();
    public newLeaveForm: FormGroup;
    public submitted: boolean;
    error: any = { isError: false, errorMessage: '' };

    leaves = ['Earned Leave', 'Casual Leave', 'Bereavement Leaves', 'Parental Leaves', 'Work From Home']

    hasLeaveTypeError = false;
    
    public setLeave(model: Leave) {
        this.leave = model;
        this.leave.StartDate = moment(model.StartDate).toDate();    
        this.leave.EndDate = moment(model.EndDate).toDate();    
    }
    validateLeaveType(value) {
        if (value === 'default')
            this.hasLeaveTypeError = true;
        else
            this.hasLeaveTypeError = false;
    }

    listOfLeaves = [];

    saveNewLeave(model) {
        let StartDate = model.StartDate.formatted;
      //  alert(model.StartDate);
        let EndDate = model.EndDate.formatted;
        let formatedSD = new Date(StartDate);
        let today = new Date();
        if ((StartDate < EndDate)) {
            this.error = {
                isError: true, errorMessage: `End Date can't be before start date`
            };

        }
        if ((formatedSD < today)) {
            this.error = {
                isError: true, errorMessage: 'select start date from today'
            }
        }
        else {
            this.error = {
                isError: false
            };

            console.log("Leave Created");
            this._leaveService.saveLeave(model)
                .then(() => {
                    this.save.emit(this.leave);
                    this.router.navigateByUrl('/fetch-data');
                   //Route to leaves
                });
        }
    }

    clearSearch()
    {
        this.cancel.emit(undefined);
    }
}
