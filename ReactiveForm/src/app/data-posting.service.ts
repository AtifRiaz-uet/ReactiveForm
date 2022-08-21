import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from './Model/Student';


@Injectable({
  providedIn: 'root'
})
export class DataPostingService {

  private _url:string = "http://localhost/StudentAPI/api/Values"

  constructor(private http:HttpClient) { }

  // postEmployeDetail(ID:number): Observable<Student>{
  //   let _empurl = `http://localhost/AngApi/api/Values/${ID}`;
  //   // return this.http.post<Student>(_empurl)
  // }
}
