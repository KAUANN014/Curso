import { catchError, Observable, of } from 'rxjs';
import { Curso } from '../model/curso';
import { CursoService } from './../../service/curso.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  courses$: Observable<Curso[]>;

  displayedColumns: string[] = ['name', 'category'];

  constructor(private cursoService: CursoService, public dialog: MatDialog) {

    this.courses$ = this.cursoService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}
}

