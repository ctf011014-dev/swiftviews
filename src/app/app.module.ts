import { ContentDetailComponent } from './home/content/content-detail/content-detail.component';
import { ContentComponent } from './home/content/content.component';
import { SearchComponent } from './home/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderInfoComponent } from './home/header-info/header-info.component';
import { MenuComponent } from './home/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderInfoComponent,
    SearchComponent,
    ContentComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
