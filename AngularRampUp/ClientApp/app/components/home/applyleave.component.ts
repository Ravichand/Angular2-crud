import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Leave } from '../../Models/Leave';
import { LeaveService } from "../../Services/leave.service";


@Component({
    selector: 'home',
    templateUrl: './applyleave.component.html',
})
export class ApplyLeaveComponent {
    //@Input() leave: Leave = new Leave();

    //public newLeaveForm: FormGroup;
    //public submitted: boolean;

    //leaves = ['Earned Leave', 'Casual Leave', 'Bereavement Leaves', 'Parental Leaves', 'Work From Home']

    //hasLeaveTypeError = false;
    //constructor(private _leaveService: LeaveService) {

    //}

    //validateLeaveType(value) {
    //    if (value === 'default')
    //        this.hasLeaveTypeError = true;
    //    else
    //        this.hasLeaveTypeError = false;
    //}

    //listOfLeaves = [];

    //saveNewLeave(model) {
    //    this._leaveService.saveLeave(model)
    //        .then(() => {
    //            console.log("Leave Created")
    //        });
    //}
}
