import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest, HttpEventType, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  saveUser(user: any){
    return this.http.post('http://localhost:8080/api/SaveUser/', user)
  }

  GetUser(){
    return this.http.get('http://localhost:8080/api/getUser/')
  }

  deleteUser(id: any){
    return this.http.post('http://localhost:8080/api/deleteUser/', {'id':id})
  }
}
