import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../service/shared.service';
import {LogService} from '../../../service/log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService,
              private logService: LogService) {
    this.sharedValue = sharedService.getSharedValue();
    this.logService.showLog();
  }

  ngOnInit(): void {
  }

}
