import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {ListComponent} from './components/list/list.component';
import {TaskComponent} from './components/task/task.component';
import {AddButtonComponent} from './components/add-button/add-button.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ToolbalComponent} from './components/toolbal/toolbal.component';
import {MatIconModule} from "@angular/material/icon";
import {CalendarComponent} from './components/calendar/calendar.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        TaskComponent,
        AddButtonComponent,
        ToolbalComponent,
        CalendarComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [MatDatepickerModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
