import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiCall, Result} from "../interfaces/api-call";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Result[]>{
   return  this.http.get<ApiCall>('https://randomuser.me/api/', {params: {
       results: '500',
       inc: 'name,gender,picture,location',
       nat:'us'
     }}).pipe(map(e => e.results))
}
}
