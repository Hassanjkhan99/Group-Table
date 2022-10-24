import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MaterialTableComponent} from "../table/material-table.component";
import {Tabsets} from "../../../core/interfaces/tabsets";

@Component({
  selector: 'app-material-tab',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule, MaterialTableComponent],
  templateUrl: './material-tab.component.html',
  styleUrls: ['./material-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialTabComponent implements OnInit {

  @Input() tabSets: Tabsets;

  constructor() {
  }

  ngOnInit(): void {

  }


}

