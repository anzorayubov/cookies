import { Component, OnInit } from '@angular/core';
import {SaredService} from "../../services/sared.service";

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  taskText = '';

  constructor(private sharedService: SaredService) {
  }

  ngOnInit(): void {
  }

  addNewTask() {
    this.sharedService.trigger(this.taskText)
    this.taskText = '';
  }
}
