import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy {

    currentDay: any;
    days: any;

    constructor(private sharedService: SharedService) {}

    ngOnInit() {
        this.sharedService.sub.subscribe((days: any) => {
            this.days = days;
        })
    }

    ngOnDestroy() {
        this.sharedService.sub.unsubscribe();
    }
}
