import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeoplesModule } from './features/peoples/peoples.module';
import { ListPeoplesComponent } from './features/peoples/list-peoples/list-peoples.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PeoplesModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ListPeoplesComponent],
  bootstrap: [AppComponent, PeoplesModule],
})
export class AppModule {}
