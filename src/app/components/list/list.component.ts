import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {newTask} from "../../types/interfaces";
import {debounce} from "../../services/helper";
import {setToSessionStorage} from "../../services/helper";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {
    tasks: newTask[] = [];
    selectedDay: string = '';

    constructor(private sharedService: SharedService) {
    }

    @Input() currentDay: any;
    @ViewChild("day",) day: any;
    @Output() selectedD = new EventEmitter<string>();


    ngAfterViewInit() {
        this.getTargetPosition();
        window.addEventListener('scroll', debounce(() => this.getTargetPosition(), 400))
    }

    ngOnInit(): void {
        this.sharedService.sub.subscribe((days: any) => {
            this.tasks = days;
        })
    }

    getTargetPosition() {
        const day = {
            targetCardName: this.day.nativeElement.querySelector('p').innerHTML,
            targetCardPosition: this.day.nativeElement.getBoundingClientRect().y
        }
        if (day.targetCardPosition > 60 && day.targetCardPosition < 350) {
            this.selectedDay = day.targetCardName;
            this.selectedD.emit(day.targetCardName)
            this.day.nativeElement.scrollIntoView({behavior: 'smooth'});
            setToSessionStorage(day.targetCardName);
        }
    }

    ngOnDestroy() {
        this.sharedService.sub.unsubscribe();
    }
}
