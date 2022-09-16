import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { ListPeoplesComponent } from './list-peoples/list-peoples.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ListPeoplesComponent, EditPeopleComponent],
  exports: [ListPeoplesComponent],
})
export class PeoplesModule {}
