import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = "http://api-vanhack-event-sp.azurewebsites.net/api/v1";

  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRGVjaW8gQ2FzYWdyYW5kZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImRlY2lvLmNyZkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiNDIwIiwibmJmIjoxNTIxNDA1NzA5LCJleHAiOjE1MjM4MjQ5MDksImlzcyI6InZhbmhhY2stc2FvcGF1bG8tZmFpci1hcGkiLCJhdWQiOiJ2YW5oYWNrLXNhb3BhdWxvLWZhaXItYXBpIn0.9kc9tJoGZMsm0kbTIZBv51d2gmxc06-_U6wti8Uk6ts";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getCustomer() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Customer').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProducts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Product').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCousine() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Cousine').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getStores() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Store').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getStoreProducts(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Store/'+id+'/products').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }






}
