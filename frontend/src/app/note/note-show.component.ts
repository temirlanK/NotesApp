import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'note-show',
  templateUrl: 'note-show.component.html',
  styleUrls: ['note.component.css']
})

export class NoteShowComponent implements OnInit {
  id: number;
  routeId: any;
  errorMessage: any;
  returnUrl: string,
  editBtnClicked: boolean = false;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ){}

  @Input() note: Note;

  ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/notes';
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
    let postRequest = this.route.params.flatMap((params: Params) => this.noteService.getNote(+params['id']));
    postRequest.subscribe(response => this.note = response.json());

  }

  update(note: Note){
    this.editBtnClicked = true;
    this.noteService.updateNote(note).subscribe( data => { return true }, error => {
      console.log('Error editing Note');
      return Observable.throw(error);
    })
  }

  delete(note: Note){
    this.noteService.deleteNote(this.note.id).subscribe(data => { this.router.navigate([this.returnUrl]); },
      error => this.errorMessage = error);
  }

  onUpdateClicked(){
    this.router.navigate([this.returnUrl]);
    this.editBtnClicked = false;
    //window.location.reload();
  }
}