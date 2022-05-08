import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {newTask} from "../types/interfaces";
import {initialWeek} from "./helper";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    tasks: newTask[] = [];
    days = initialWeek

    constructor() {
    }

    public sub = new BehaviorSubject(this.days);

    addNewTask(newTask: newTask) {
        // @ts-ignore
        let T
        if (newTask.status !== 'remove') {
            T = {
                title: newTask.title,
                date: new Date(),
                id: Date.now(),
                day: sessionStorage.getItem('selectedDay'),
            }

            this.days.forEach(day => {
                if (day.name === sessionStorage.getItem('selectedDay')) {
                    // @ts-ignore
                    day.tasks.push(T)
                }
            })
        }
        this.sub.next(this.days)
    }

    removeTask(t: any) {
        this.days.forEach((day: any, index) => {
            if (day.name === t.day) {
                // @ts-ignore
                day.tasks.forEach((task: any, inx) => {
                    if (task.id === t.id) {
                        day.tasks.splice(inx, 1);
                    }
                })
            }
        })
        this.sub.next(this.days)
    }
}
