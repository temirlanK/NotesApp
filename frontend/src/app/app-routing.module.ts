import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteListComponent } from './note/note-list.component';


import { NoteShowComponent } from './note/note-show.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NoteNewComponent } from './note/note-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'notes', component: NoteListComponent },
  { path: 'note/new', component: NoteNewComponent},
  { path: 'notes/:id', component: NoteShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
