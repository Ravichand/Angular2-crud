import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    date: DateModel;
    options: DatePickerOptions;
    
    constructor() {
        this.options = new DatePickerOptions();
        
    }
}