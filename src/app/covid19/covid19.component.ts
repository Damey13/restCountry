import { Component, OnInit, ViewChild } from "@angular/core";
import { countriesService } from "../countries.service";
import { CountryReports } from "src/countryReports";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-covid19",
  templateUrl: "./covid19.component.html",
  styleUrls: ["./covid19.component.css"],
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA!: CountryReports[];
  displayedColumns: string[] = ["name", "capital", "population", "area"];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private service: countriesService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.covid19Reports();
    resp.subscribe((report) => {
      this.dataSource.data = report as CountryReports[];
      console.log(report);
    });
    // console.log("Hello" + this.dataSource);//
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editContact() {}
}
