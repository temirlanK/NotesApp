import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'note-new',
  templateUrl: 'note-new.component.html',
  styleUrls: ['note.component.css']
})

export class NoteNewComponent{
  note = new Note;
  submitted: boolean = false;

  constructor(private noteService: NoteService){}

  createNote(note: Note){
    this.submitted = true;
    this.noteService.createNote(note)
      .subscribe(
      data => { return true }, error => {
        console.log("Error creating note");
        return Observable.throw(error);
      });

  }
}