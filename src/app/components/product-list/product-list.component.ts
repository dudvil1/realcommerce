import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { TypeCount } from "src/app/models/typeCount";
import { ImdbItem } from "src/app/models/item";
import { DataFiltersService } from "../../services/data-filters.service";
import { ApiService } from "../../services/api.service";
import { environment } from "../../../environments/environment";
import { Router, ActivatedRoute } from "@angular/router";
import { ImgItemService } from "../../shared/img-item.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class productListComponent implements OnInit, OnChanges {
  @Input() imdbTypesCount: TypeCount[] = [];
  @Input() imdbItemsArr: ImdbItem[] = [];
  public filterArr: ImdbItem[];

  public defaultUrlImage = environment.defaultUrlImage;
  public isGrid: boolean = false;
  imdbItemType: string;
  nameCurrentlyChanging: boolean;
  public ascSort: boolean = false;

  constructor(
    private dataFilter: DataFiltersService,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private imgItem: ImgItemService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getTypeList(this.imdbItemType);
  }

  ngOnInit() {
    this.imgItem.subject.subscribe((data) => {});
  }

  allowNameChange() {
    this.nameCurrentlyChanging = true;
  }

  changeName(item: ImdbItem, title) {
    this.nameCurrentlyChanging = false;
    item.Title = title;
    this.api.updateJson(item.imdbID, title).subscribe(
      (res) => {
        /* if it was a real api so when we get response we will do => item.Title = name  */
      },
      (err) => {}
    );
  }

  getTypeList(imdbItemType: string) {
    if (imdbItemType) {
      this.imdbItemType = imdbItemType;
      this.filterArr = this.dataFilter.filterByType(
        this.imdbItemsArr,
        imdbItemType
      );
    }
  }

  dateConverter(dateString: string) {
    return this.dataFilter.dateConverter(dateString);
  }

  changeGridToList() {
    this.isGrid = false;
  }

  changeListToGrid() {
    this.isGrid = true;
  }

  onImgClicked(imdbitem: ImdbItem) {
    this.imgItem.subject.next(imdbitem);
    this.router.navigate(["itemView"]);
  }

  changeSort() {
    if (!this.ascSort) {
      this.filterArr = this.dataFilter.descSort(this.imdbItemsArr);
    } else this.filterArr = this.dataFilter.ascSort(this.imdbItemsArr);

    this.ascSort = !this.ascSort;
  }
}
