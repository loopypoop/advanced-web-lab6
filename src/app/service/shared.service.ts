import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedValue: string;

  constructor() {
    this.sharedValue = '------------------------------This is the shared value------------------------------';
  }

  public getSharedValue() {
    return this.sharedValue;
  }
}
