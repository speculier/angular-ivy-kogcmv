import { Component, OnInit } from '@angular/core';
import { PeopleDto } from '../models/peoples-dto';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  people !: PeopleDto;

  constructor() { }

  ngOnInit() {
  }

}