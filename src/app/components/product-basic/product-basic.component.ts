import { Component, OnInit, Output } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { DataFiltersService } from "../../services/data-filters.service";
import { ImdbItem } from "src/app/models/item";
import { TypeCount } from "src/app/models/typeCount";

@Component({
  selector: "app-product-basic",
  templateUrl: "./product-basic.component.html",
  styleUrls: ["./product-basic.component.css"],
})
export class productBasicComponent implements OnInit {
  public imdbTypesCount: TypeCount[];
  public imdbItemsArr: ImdbItem[];
  public filterArr: ImdbItem[];

  constructor(
    private api: ApiService,
    private dateFilter: DataFiltersService
  ) {}

  ngOnInit() {
    this.getImdbArr();
  }

  getImdbArr() {
    this.api.getJSON().subscribe(
      (data) => {
        this.imdbTypesCount = this.dateFilter.filterToTypes(data.results);
        this.imdbItemsArr = this.dateFilter.ascSort(data.results);
        this.filterArr = data.results;
      },
      (err) => console.log(err)
    );
  }

  onfilterArr(event: ImdbItem[]) {
    this.filterArr = event;
  }

  refresh() {
    this.getImdbArr();
  }
}
