import { Component, OnInit, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Leave } from "../../Models/Leave";
import { LeaveService } from "../../Services/leave.service";

import { DialogService } from "ng2-bootstrap-modal";
import { DeleteLeaveComponent } from '../deleteleave/delete.leave.component';
import { LeaveFormComponent } from '../leaveform/leaveform.component';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchleaves.component.html',
    styleUrls: ['./fetchleaves.component.css']
})
export class FetchLeaveComponent implements OnInit {

    leaves: Leave[];
    errorMessage: string;
    showLeave: boolean = false;

    @ViewChild(DeleteLeaveComponent)
    protected deleteLeaveComponent: DeleteLeaveComponent;
    @ViewChild(LeaveFormComponent)
    protected leaveFormComponent: LeaveFormComponent;

    constructor(private _leaveService: LeaveService, private dialogService: DialogService) {

    }
    ngOnInit(): void {
        this.fetchLeaves();
    }

    edit(leave) {
        this.showLeave = true;
        leave.StartDate={ "day": "05", "month": "01", "year": "2017", "formatted": "05.01.2017", "momentObj": "2017-01-04T23:00:00.000Z" };

        this.leaveFormComponent.setLeave(leave);
    }

    deleteLeave(leave) {
        this.deleteLeaveComponent.showDeleteConfirmationDailog(leave);
        //this._leaveService.deleteLeave(leave.Id).then(() => { console.log("Leave Deleted") });
    }

    public onDeleteConfirm(dataItem: Leave) {
        return this._leaveService.deleteLeave(dataItem.Id)
            .then(() => {
                return this.fetchLeaves();
            })
    }

    public onDeleteCancel(): void {
    }

    public onEditSave() {
        this.showLeave = false;
    }

    public onEditCancel() {
        this.showLeave = false;
    }

    fetchLeaves() {
        this._leaveService.getLeaves()
            .subscribe(leaves => {

                for (var i = 0; i < leaves.length; i++) {
                    leaves[i].isEdit = false;
                }
                this.leaves = leaves;
            },
            error => this.errorMessage = <any>error);
    }
}
