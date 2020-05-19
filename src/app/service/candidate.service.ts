import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
  private baseUrl = "https://hr-module-service.herokuapp.com/api";

  constructor(private http: HttpClient) {}

  get(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/candidate/${id}`);
  }

  create(vacancy: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/candidate`, vacancy);
  }

  update(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/candidate/${id}`, value);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/candidate/${id}`, {
      responseType: "text",
    });
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/candidates`);
  }
}
