import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Leave } from '../../Models/Leave';
import { LeaveFetchService } from "../../Services/LeavesFetch.service";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent {

    @Input() leave: Leave = new Leave();

    public newLeaveForm: FormGroup;
    public submitted: boolean;

    leaves = ['Earned Leave', 'Casual Leave', 'Bereavement Leaves', 'Parental Leaves', 'Work From Home']

    hasLeaveTypeError = false;
    constructor(private _leaveService: LeaveFetchService) {

    }
    // validatePrimaryLanguage(event){
    //   if(this.model.primaryLanguage==='default')
    //   this.hasPrimaryLanguageError=true;
    //   else
    //   this.hasPrimaryLanguageError=false;
    // }

    validateLeaveType(value) {
        if (value === 'default')
            this.hasLeaveTypeError = true;
        else
            this.hasLeaveTypeError = false;
    }

    listOfLeaves = [];

    saveNewLeave(model) {
        this._leaveService.saveLeave(model)
            .then(() => {
                console.log("Leave Created")
            });
    }

    // submitForm(value){
    //   var employe = <Employee>value;
    // }
    // firstNameToUpperCase(value:string){
    //   if(value.length>0)
    //   this.model.firstName=value.charAt(0).toUpperCase() + value.slice(1);
    //   else
    //   this.model.firstName=value;
    // }
}
