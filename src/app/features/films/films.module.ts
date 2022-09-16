import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmsComponent } from './list-films/list-films.component';
import { FilmsDataLayerService } from './services/films-data-layer.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ListFilmsComponent],
  exports: [ListFilmsComponent],
  providers: [
    /*FilmsDataLayerService */
  ],
})
export class FilmsModule {}
