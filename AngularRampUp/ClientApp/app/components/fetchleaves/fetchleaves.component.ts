import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Http } from '@angular/http';
import { ILeave } from "../../Models/Leave";
import { LeaveFetchService } from "../../Services/LeavesFetch.service";

import { ConfirmComponent } from '../modal/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchleaves.component.html'
})
export class FetchLeaveComponent implements OnInit {

    leaves: ILeave[];
    errorMessage: string;


    constructor(private _leaveService: LeaveFetchService, private dialogService: DialogService) {

    }
    ngOnInit(): void {
        this._leaveService.getLeaves()
            .subscribe(leaves => {

                for (var i = 0; i < leaves.length; i++) {
                    leaves[i].isEdit = false;
                }
                this.leaves = leaves;
            },
            error => this.errorMessage = <any>error);
    }
    //submitted = false;
    
    showConfirm() {
        let disposable = this.dialogService.addDialog(ConfirmComponent, {
            title: 'Confirm title',
            message: 'Confirm message'
        })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    alert('accepted');
                }
                else {
                    alert('declined');
                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(() => {
            disposable.unsubscribe();
        }, 10000);
    }
    

    editFields(leave: ILeave): void {
        
        leave.isEdit = true;
    }

    saveField(leave: ILeave): void {
        leave.isEdit = false;

        //api call to save data
    }

    cancelField(leave): void {
        leave.isEdit = !leave.isEdit;
        
    }

    
    
}
