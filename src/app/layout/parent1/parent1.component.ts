import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../service/shared.service';
import {LogService} from '../../service/log.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  sharedValue;

  constructor(private sharedService: SharedService,
              private logService: LogService) {
    this.sharedValue = sharedService.getSharedValue();
    this.logService.showLog();
  }

  ngOnInit(): void {
  }

}
