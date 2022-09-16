import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FilmDto } from '../models/film-dto';
import { FilmsDataLayerService } from '../services/films-data-layer.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  titre: string = 'Mes films S W';
  films: FilmDto[] = [
    /*{ titre: 'New Hope', annee: 1234 }*/
  ];
  filmsObs$!: Observable<FilmDto[]>;
  private subscription = new Subscription();

  constructor(private readonly dataLayer: FilmsDataLayerService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.filmsObs$ = this.dataLayer.getAllFilms();

    const callback = (films: FilmDto[]) => (this.films = films);
    const sub = this.filmsObs$.subscribe(callback);
    this.subscription.add(sub);
  }

  get hasFilms(): boolean {
    return this.films.length > 0;
  }

  clickTpAdd(): void {
    this.films.push({ annee: 1234, titre: 'TEST' });
  }

  clickTpRemove(f: FilmDto): void {
    console.log(f.titre);
  }
}
