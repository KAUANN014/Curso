import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    SharedModule

  ]
})
export class CoursesModule { }
