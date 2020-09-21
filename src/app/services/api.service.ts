import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ImdbResponse } from "../models/imdbResponse";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  jsonUrl = environment.jsonUrl;

  getJSON(): Observable<ImdbResponse> {
    return this.http.get<ImdbResponse>(this.jsonUrl);
  }

  updateJson(itemId: string, title: string): Observable<any> {
    return this.http.patch(this.jsonUrl, this.generateObj(itemId, title));
  }

  private generateObj(itemId: string, title: string) {
    let params;
    return (params = {
      itemId: itemId,
      title: title,
    });
  }
}
