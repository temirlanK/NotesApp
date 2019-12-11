import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  constructor(private noteService: NoteService,
  private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getNotes());
  }

  getNotes(){
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

  goToShow(note: Note): void{
    let noteLink = ['/notes', note.id];
    this.router.navigate(noteLink);
  }

}
