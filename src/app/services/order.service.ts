import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { app_config } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = app_config.api_url + '/order';
  constructor(private http: HttpClient, private router: Router) {}

  addOrder(data) {
    return this.http.post(this.url + '/add', data);
  }

  getAll() {
    return this.http.get(this.url + '/getall');
  }

  getbyid(id) {
    return this.http.get(this.url + '/getbyid/' + id);
  }

  getUserOrders(id) {
    return this.http.get(this.url + '/getbyuser/' + id);
  }
}
