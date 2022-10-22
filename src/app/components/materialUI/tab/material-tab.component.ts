import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MaterialTableComponent} from "../table/material-table.component";
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-material-tab',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatTableModule, MaterialTableComponent],
  templateUrl: './material-tab.component.html',
  styleUrls: ['./material-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialTabComponent implements OnInit {


  constructor(public dataService: DataService) { }

  ngOnInit(): void {

  }


}

