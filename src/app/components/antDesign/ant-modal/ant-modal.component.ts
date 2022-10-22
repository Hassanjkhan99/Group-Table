import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzListModule} from "ng-zorro-antd/list";

@Component({
  selector: 'app-ant-modal',
  standalone: true,
  imports: [CommonModule, NzModalModule, NzListModule],
  templateUrl: './ant-modal.component.html',
  styleUrls: ['./ant-modal.component.scss']
})
export class AntModalComponent implements OnInit {
  @Input() isVisible: boolean = true;
  @Input() user:  {};
  @Input() pic: string;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>()

  data = []

  constructor() { }

  ngOnInit(): void {
  this.data = Object.keys(this.user)
  }

  modalClose() {
    this.modalClosed.emit(true)
  }
}
