import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {AntDesignTableComponent} from "../table/ant-design-table.component";
import {Tabsets} from "../../../core/interfaces/tabsets";

@Component({
  selector: 'app-ant-design-tab',
  standalone: true,
  imports: [CommonModule, NzTabsModule, AntDesignTableComponent],
  templateUrl: './ant-design-tab.component.html',
  styleUrls: ['./ant-design-tab.component.scss']
})
export class AntDesignTabComponent implements OnInit {

  @Input() tabSets: Tabsets;

  constructor() {
  }

  ngOnInit(): void {
  }

}
