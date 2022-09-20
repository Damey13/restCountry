import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class countriesService {
  constructor(private http: HttpClient) {}

  public covid19Reports() {
    console.log(this.http.get("https://restcountries.com/v2/all"));
    return this.http.get("https://restcountries.com/v2/all");
  }
  dataRow: any;
}
