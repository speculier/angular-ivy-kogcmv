import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PeopleDto } from '../models/peoples-dto';

@Injectable({ providedIn: 'root' })
export class PeoplesDataLayerService {
  constructor() {}

  getAllPeoples(): Observable<PeopleDto[]> {
    return of([
      { firstname: 'Tom', lastname: 'HANKS' },
      { firstname: 'Tim', lastname: 'ROBBINS' },
    ]);
  }
}
