import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ImdbItem } from "src/app/models/item";
import { DataFiltersService } from "../../services/data-filters.service";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.css"],
})
export class ProductSearchComponent implements OnInit {
  @Input() imdbItemsArr: ImdbItem[] = [];
  @Output() filtered: EventEmitter<ImdbItem[]> = new EventEmitter<ImdbItem[]>();
  public searchForm: string;

  constructor(private dataFilter: DataFiltersService) {}

  ngOnInit() {}

  searchInput(input: string) {
    if (input) {
      const filterArr = this.imdbItemsArr.filter((x) => {
        return (
          this.dataFilter.isNameContain(x.Title, input) ||
          this.dataFilter.isYearContain(x.Year.substr(0, 4), input)
        );
      });
      this.filtered.emit(filterArr);
    } else {
      this.filtered.emit(this.imdbItemsArr);
    }
  }

  clearSearch(input: string) {
    this.searchForm = input = "";
    this.searchInput(input);
  }
  
}
