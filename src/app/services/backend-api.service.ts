import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendApiService {

  public BASE_API: any = "https://reqres.in/";

  constructor(
    public http: HttpClient,
  ) { }



  get(url: string): Observable<any> {
    return this.http.get<any>(this.BASE_API + url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  post(data: any, url: string): Observable<any> {
    return this.http.post<any>(this.BASE_API + url, data,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      });
  }

  put(data: any, url: string): Observable<any> {
    return this.http.put<any>(this.BASE_API + url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  delete(url: string): Observable<any> {
    return this.http.delete<any>(this.BASE_API + url, { headers: new HttpHeaders({ 'Content-Type': 'application/json', }) });
  }


}
