import {Component, Input, OnInit} from '@angular/core';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {BootstrapTableComponent} from "../bootstap-table/bootstrap-table.component";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {Tabsets} from "../../../core/interfaces/tabsets";

@Component({
  selector: 'app-bootstrap-tab',
  templateUrl: './bootstrap-tab.component.html',
  styleUrls: ['./bootstrap-tab.component.scss'],
  imports: [
    NgbNavModule,
    BootstrapTableComponent,
    NgForOf,
    KeyValuePipe
  ],
  standalone: true
})
export class BootstrapTabComponent implements OnInit {

  active = 1;
  @Input() tabSets: Tabsets;

  constructor() {
  }

  ngOnInit(): void {
  }

}
