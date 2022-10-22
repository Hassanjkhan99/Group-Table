import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-bootstap-tab',
  templateUrl: './bootstap-tab.component.html',
  styleUrls: ['./bootstap-tab.component.scss']
})
export class BootstapTabComponent implements OnInit {

  active = 1;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
