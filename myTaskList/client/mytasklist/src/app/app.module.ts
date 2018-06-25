import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
