import { Injectable } from '@angular/core';

import { AmiiboInterface } from '../interfaces/amiibo-interface';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private api: ApiService) { }  // Http request subscribe on the service

  getAmiibos() {
    return this.api.get('/amiibo');
  } // res -> results

  getAmiibo(id: string) {
    return this.api.get(`/amiibo/?tail=${id}`)
  }

  getFilteredAmiibos(category: string, value: string) {
    return this.api.get(`/amiibo/?${category}=${value}`);
  }

}
