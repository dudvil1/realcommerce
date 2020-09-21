import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ImgItemService } from "../../shared/img-item.service";
import { ImdbItem } from "src/app/models/item";
import { DataFiltersService } from "../../services/data-filters.service";

@Component({
  selector: "app-item-view",
  templateUrl: "./item-view.component.html",
  styleUrls: ["./item-view.component.css"],
})
export class ItemViewComponent implements OnInit {
  public itemDetails: ImdbItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataFilter: DataFiltersService,
    private imgItem: ImgItemService = undefined
  ) {}

  ngOnInit() {
    this.imgItem.subject.subscribe((data) => {
      this.itemDetails = data;
    });
  }

  backToDefaultPage() {
    this.router.navigate([""]);
  }

  dateConverter(dateString: string) {
    return this.dataFilter.dateConverter(dateString);
  }
}
