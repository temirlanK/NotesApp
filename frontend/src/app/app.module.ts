import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note/note-list.component';
import { NoteShowComponent } from './note/note-show.component';
import { NoteService } from './note/note.service';
import { HomepageComponent } from './homepage/homepage.component';

import { NoteNewComponent } from './note/note-new.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteShowComponent,
    NoteNewComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
