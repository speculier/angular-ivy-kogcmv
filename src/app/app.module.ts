import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PeoplesModule } from './features/peoples/peoples.module';
import { MenuComponent } from './shared/ui/components/menu/menu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, PeoplesModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, MenuComponent],
  bootstrap: [AppComponent, MenuComponent],
})
export class AppModule {}
