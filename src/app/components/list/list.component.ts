import {Component, OnInit} from '@angular/core';
import {SaredService} from "../../services/sared.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    tasks: any;

    constructor(private sharedServise: SaredService ) {

    }

    ngOnInit(): void {
        this.tasks = [];
        this.sharedServise.sub.subscribe(data => {
             this.tasks.push(data);
             console.log(this.tasks)
        })
    }

}
