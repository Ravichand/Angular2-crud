import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Leave } from "../../Models/Leave";

@Component({
    selector: 'delete-leave',
    templateUrl: './delete.leave.html'
})
export class DeleteLeaveComponent {
    public openDeleteConfirmationDialog: boolean = false;
    dataItem: Leave;
    
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();
    public onConfirm(): boolean {
        this.delete.emit(this.dataItem);
        this.openDeleteConfirmationDialog = false;
        return false;
    }

    public onCancel(): boolean {
        this.openDeleteConfirmationDialog = false;
        this.cancel.emit(undefined);
        return false;
    }

    public showDeleteConfirmationDailog(dataItem: Leave): void {
        this.dataItem = dataItem;
        this.openDeleteConfirmationDialog = true;
    }

    public hideDeleteConfirmationDailog(): void {
        this.openDeleteConfirmationDialog = false;
    }
}