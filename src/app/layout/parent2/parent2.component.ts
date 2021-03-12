import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {LogService} from '../../service/log.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService,
              private logService: LogService) {
    this.sharedValue = sharedService.getSharedValue();
    this.logService.showLog();
  }

  ngOnInit(): void {
  }

}
