import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {newTask} from "../../types/interfaces";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'add-button',
    templateUrl: './add-button.component.html',
    styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
    task: newTask = {};
    range = new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
    });

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
    }

    addNewTask() {
        this.sharedService.addNewTask(this.task)
        this.task = {};
    }
}
