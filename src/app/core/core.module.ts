import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home/home.component';
import { FiltersComponent } from './filters/filters.component';
import { JobListComponent } from './job-list/job-list.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
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
    FiltersComponent,
    JobListComponent,
    HistoryComponent,
    EventsComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }