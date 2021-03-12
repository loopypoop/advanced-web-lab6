import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../service/shared.service';
import {LogService} from '../../../service/log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService,
              private logService: LogService) {
    this.sharedValue = sharedService.getSharedValue();
    this.logService.showLog();
  }

  ngOnInit(): void {
  }

}
