import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ImdbItem } from '../models/item';

@Injectable({
  providedIn: "root",
})
export class ImgItemService {
  subject = new BehaviorSubject<ImdbItem>(undefined);
}
