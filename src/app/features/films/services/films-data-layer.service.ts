import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { apis } from '../../../environments/apis';
import { FilmDto } from '../models/film-dto';

@Injectable({ providedIn: 'root' })
export class FilmsDataLayerService {
  constructor(private readonly client: HttpClient) {}

  getAllFilms(): Observable<FilmDto[]> {
    return this.client.get<FilmDto[]>(apis.films.url);
  }
}
