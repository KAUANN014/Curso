import { Injectable } from '@angular/core';
import { Curso } from '../courses/model/curso';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private readonly API = '../assets/cursos.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Curso[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
