import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {AntDesignTableComponent} from "../table/ant-design-table.component";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-ant-design-tab',
  standalone: true,
  imports: [CommonModule, NzTabsModule, AntDesignTableComponent],
  templateUrl: './ant-design-tab.component.html',
  styleUrls: ['./ant-design-tab.component.scss']
})
export class AntDesignTabComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
