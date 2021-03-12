import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../service/shared.service';
import {LogService} from '../../../service/log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService,
              private logService: LogService) {
    this.sharedValue = sharedService.getSharedValue();
    this.logService.showLog();
  }

  ngOnInit(): void {
  }

}
