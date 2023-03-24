import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FiltersComponent } from './core/filters/filters.component';
import { JobListComponent } from './core/job-list/job-list.component';
import { HistoryComponent } from './core/history/history.component';
import { EventsComponent } from './core/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent,
    JobListComponent,
    HistoryComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
