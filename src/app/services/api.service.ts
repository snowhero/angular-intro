import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Using api's now no longer mocks
import { Observable } from 'rxjs'; // Used for subscribe to slow down angular to wait for request

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://www.amiiboapi.com/api';;

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {    // May get linter error if so use bad practice to coverup this error
    return this.http.get(`${this.apiUrl}${url}`);
  }

  post(url: string, data: object): Observable<any> {
    return this.http.post(`${this.apiUrl}${url}`, data);
  }
}
