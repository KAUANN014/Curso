import { Curso } from './../model/curso';
import { CursoService } from './../../service/curso.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  //courses: Observable<Curso[]>
 // courses: Curso[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(private CursoService: CursoService) {
    this.courses = this.CursoService.list();

    //this.CursoService.list().subscribe((courses) => (this.courses = courses));
  }

  ngOnInit(): void {}
}
