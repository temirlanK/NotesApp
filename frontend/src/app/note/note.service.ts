import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Note } from './note';

@Injectable()
export class NoteService{
  headers: Headers;
  options: RequestOptions;

  private notesUrl = 'http://localhost:3000/notes';

  constructor(private http: Http){
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  getNotes(): Observable<Note[]>{ return this.http.get(this.notesUrl).map((response: Response) => <Note []>response.json())
  }

  getNote(id: number){
    return this.http.get(this.notesUrl + "/" + id + '.json');
  }

  createNote(note: Note): Observable<Note>{
    
    return this.http.post(
      this.notesUrl, JSON.stringify(note), this.options
    ).map((res: Response) => res.json());
  }

  deleteNote(id: number):   Observable<Note>{
    const url = `${this.notesUrl}/${id}`;
    return this.http.delete(url, this.options).map(this.extractData).catch(this.handleError);
  }

  updateNote(note: Note): Observable<Note>{
    const url = `${this.notesUrl}/${note.id}`;
    return this.http.put(url, JSON.stringify(note), this.options).map((res: Response) => res.json()).catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    return body || {}; 
  }

  private handleError(error:any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}