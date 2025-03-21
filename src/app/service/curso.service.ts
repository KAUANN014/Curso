import { Injectable } from '@angular/core';
import { Curso } from '../courses/model/curso';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private readonly API = '/src/app/assets/cursos.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Curso>(this.API).pipe(
      tap(courses => console.log(courses))
    );


  }
}
