import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './shared/ui/components/menu/menu.component';
import { FilmsModule } from './features/films/films.module';

@NgModule({
  imports: [BrowserModule, FormsModule, FilmsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent, MenuComponent],
})
export class AppModule {}
