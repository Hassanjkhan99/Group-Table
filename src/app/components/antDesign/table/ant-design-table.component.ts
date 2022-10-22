import {Component, HostListener, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzTableModule, NzTableSortFn, NzTableSortOrder} from "ng-zorro-antd/table";
import {DataItem} from "../../../core/interfaces/data-item";
import {AntModalComponent} from "../ant-modal/ant-modal.component";


interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder | null;
  sortFn?: NzTableSortFn<DataItem> | null;
  sortDirections?: NzTableSortOrder[];
}



@Component({
  selector: 'app-ant-design-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, AntModalComponent],
  templateUrl: './ant-design-table.component.html',
  styleUrls: ['./ant-design-table.component.scss']
})
export class AntDesignTableComponent implements OnInit{

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width= window.innerWidth;
    if(this.width < 640){
      this.listOfColumns = this.mobileColumns
    }else{
      this.listOfColumns= this.columns
    }
  }



  @Input() data: DataItem[] = [];

  width: number = window.innerWidth;

  columns: ColumnItem[] =  [
    {
      name: 'Avatar',
    },
    {
      name: 'Title',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.title.localeCompare(b.title),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.first.localeCompare(b.first),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Last Name',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.last.localeCompare(b.last),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Gender',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.gender.localeCompare(b.gender),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'State',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.state.localeCompare(b.state),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'City',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.city.localeCompare(b.city),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      name: 'Country',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.country.localeCompare(b.country),
      sortDirections: ['ascend', 'descend', null],
    },
  ];
  mobileColumns: ColumnItem[] = [
      {
        name: 'Title',
        sortOrder: null,
        sortFn: (a: DataItem, b: DataItem) => a.title.localeCompare(b.title),
        sortDirections: ['ascend', 'descend', null],
      },
      {
        name: 'First Name',
        sortOrder: null,
        sortFn: (a: DataItem, b: DataItem) => a.first.localeCompare(b.first),
        sortDirections: ['ascend', 'descend', null],
      },
      {
        name: 'Last Name',
        sortOrder: 'descend',
        sortFn: (a: DataItem, b: DataItem) => a.last.localeCompare(b.last),
        sortDirections: ['ascend', 'descend', null],
      },
    ];

  listOfColumns: ColumnItem[] = [];
  isModalVisible: boolean = false;
  modalData: { user:  DataItem  , pic: string }= {pic:'',user: {} as DataItem};

  ngOnInit(): void {
    if(window.innerWidth < 640){
      this.listOfColumns = this.mobileColumns
    }else{
      this.listOfColumns= this.columns
    }
  }


  openModal(user: DataItem) {
    this.modalData =  { user: user,pic: user.picture }
    this.isModalVisible = true
  }
}
