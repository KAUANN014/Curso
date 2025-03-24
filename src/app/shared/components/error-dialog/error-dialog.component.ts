import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  standalone: false,
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss',
})
export class ErrorDialogComponent implements OnInit {
  data: string = '';

  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
  }

  ngOnInit(): void {
    
  }
}
