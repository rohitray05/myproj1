import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class segmentService {

private url_string="/assets/text.txt";
constructor( private http: HttpClient) {  }

  public getDocumet(){
   return this.http.get(this.url_string,{responseType: 'text'})
   ;
  }
}