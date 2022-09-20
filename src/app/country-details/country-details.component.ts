import { Component, OnInit } from "@angular/core";
import { countriesService } from "../countries.service";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"],
})
export class CountryDetailsComponent implements OnInit {
  constructor(private service: countriesService) {}

  countryinfo: any = this.service.dataRow;

  ngOnInit() {
    console.log(this.service.dataRow.name);
  }
}
