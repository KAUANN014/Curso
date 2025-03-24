import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],

})
export class AppMaterialModule { }
