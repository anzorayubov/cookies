import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaredService {

  constructor() { }

  public sub = new Subject()

  trigger(message: string) {
    this.sub.next(message)
  }

}
