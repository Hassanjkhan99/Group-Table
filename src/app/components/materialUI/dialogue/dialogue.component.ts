import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: { DataItem }, pic: string },
  ) {}

  ngOnInit(): void {
  }

}
