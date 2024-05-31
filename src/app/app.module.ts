import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from "@angular/common";

import { AppComponent } from './app.component';
import { TimelineItemComponent } from "./components/timeline-item/timeline-item.component";

@NgModule({
  declarations: [
    AppComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
