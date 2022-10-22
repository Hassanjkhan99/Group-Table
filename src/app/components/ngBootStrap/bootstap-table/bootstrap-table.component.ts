import {
  Component,
  HostListener,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChildren
} from '@angular/core';
import {compare, NgbdSortableHeader, SortColumn, SortDirection} from "./sortDirective";
import {DataItem} from "../../../core/interfaces/data-item";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}


@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent implements OnChanges{
   currentItem: {};
   currentPic: string
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width= window.innerWidth;
  }

  @Input() data: DataItem[] = [];

   width: number = window.innerWidth;
   breakpoint = 640
  dataSource: DataItem[] = [];
  paginatorItems: number[] = []

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  pageSize: number = 10;
  page: number = 0;
constructor(private modalService: NgbModal) {
}
  ngOnInit(): void {
    // this.width= window.innerWidth;
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '' || column === "location") {
      this.dataSource = this.data.slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize);
    } else {
      this.dataSource = [...this.data].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      }).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.data.slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)
    this.paginatorItems =  Array(5).fill(this.dataSource.length, NaN, NaN)
  }

  pageChange(page) {
    this.page = page
    this.dataSource = this.data.slice((page-1)*this.pageSize,(page-1)*this.pageSize+this.pageSize)
  }


  openModal(content: TemplateRef<any>, item: DataItem) {
  this.currentItem = item;
  this.currentPic = item.picture
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',centered: true })
  }
}

