import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Component, Input, ViewChild,} from '@angular/core';
import {MatSort, MatSortModule, Sort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogueComponent} from '../dialogue/dialogue.component';
import {DataItem} from "../../../core/interfaces/data-item";

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule],

  standalone: true,
})
export class MaterialTableComponent {
  displayedColumns: string[] = [
    'avatar',
    'title',
    'first',
    'last',
    'gender',
    'state',
    'city',
    'country',
  ];
  @Input() data: { first: string; last: string }[] = [];
  dataSource = new MatTableDataSource();

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.data = this.data;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(user: DataItem): void {
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '500px',
      data: { user: {...user},pic: user.picture },
    });
  }
}
