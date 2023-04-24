import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchImageService {

  constructor(private http: HttpClient) { }

  fetchImage(){
    return this.http.get('');
  }

}
