import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    constructor(private sharedService: SharedService) {
    }

    @Input() task: any;

    ngOnInit(): void {
    }

    removeTask(task: any) {
        this.sharedService.removeTask(task);
    }
}
