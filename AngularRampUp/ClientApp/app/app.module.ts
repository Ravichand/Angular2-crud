import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
//installed packages
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchLeaveComponent } from './components/fetchleaves/fetchleaves.component';
import { CounterComponent } from './components/counter/counter.component';
import { LeaveFetchService } from './Services/LeavesFetch.service';
import { Employee } from './Models/employee.model';
import { OnlyNumber } from './directives/onlynumber.directive';
import { ConfirmComponent } from './components/modal/confirm.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchLeaveComponent },
    { path: '**', redirectTo: 'home' }
]


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchLeaveComponent,
        ConfirmComponent,
        HomeComponent,
        OnlyNumber
    ],
    entryComponents: [
        ConfirmComponent
    ],
    providers: [LeaveFetchService],
    imports: [
        CommonModule,
        BrowserModule,
        BootstrapModalModule,
        DatePickerModule,
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot(routes)
    ]
})
export class AppModule {
    
}
