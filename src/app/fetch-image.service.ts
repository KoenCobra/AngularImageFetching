import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

interface unsplashResponse {
  urls: {
    small: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchImageService {

  constructor(private http: HttpClient) {
  }

  fetchImage() {
    return this.http
      .get<unsplashResponse>('https://api.unsplash.com/photos/random',
        {
          headers: {
            Authorization : 'Client-ID v2l5Pp9cEsBpasIrper2_AN3G2ye9JvR0LtXy7QBTV4'
          }
        })
      .pipe(map((response: unsplashResponse) => response.urls.small))
  }
}
