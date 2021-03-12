import { Injectable } from '@angular/core';
import {SharedService} from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private sharedService: SharedService) {}

  public showLog() {
    console.log(this.sharedService.getSharedValue());
  }
}
