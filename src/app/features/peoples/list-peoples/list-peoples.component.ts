import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PeopleDto } from '../models/peoples-dto';
import { PeoplesDataLayerService } from '../services/peoples-data-layer.service';

@Component({
  selector: 'app-list-peoples',
  templateUrl: './list-peoples.component.html',
  styleUrls: ['./list-peoples.component.css'],
})
export class ListPeoplesComponent implements OnInit, OnDestroy {
  peoples: PeopleDto[] = [
    /*  { firstname: 'Tom', lastname: 'HANKS' },
    { firstname: 'Tim', lastname: 'ROBBINS' },*/
  ];
  peoplesObs$!: Observable<PeopleDto[]>;
  private subscription = new Subscription();

  constructor(private readonly dataLayer: PeoplesDataLayerService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.peoplesObs$ = this.dataLayer.getAllPeoples();

    const callback = (peoples: PeopleDto[]) => (this.peoples = peoples);
    const sub = this.peoplesObs$.subscribe(callback);
    this.subscription.add(sub);
  }

  clickPeopleAdd(): void {
    this.peoples.push({ firstname: 'Tom', lastname: 'HANKS' });
  }
}
