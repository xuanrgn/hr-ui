import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InterviewService {
  private baseUrl = "https://hr-module-service.herokuapp.com/api";

  constructor(private http: HttpClient) {}

  get(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/interview/${id}`);
  }

  create(vacancy: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/interview`, vacancy);
  }

  update(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/interview/${id}`, value);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/interview/${id}`, {
      responseType: "text",
    });
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/interviews`);
  }
}
