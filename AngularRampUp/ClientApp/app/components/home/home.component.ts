import { Component } from '@angular/core';
import { Employee } from '../../Models/employee.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    leaves = ['Earned Leave', 'Casual Leave', 'Bereavement Leaves', 'Parental Leaves', 'Work From Home']
    model = new Employee('', '', 'default', '', '','');

    hasLeaveTypeError = false;

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
