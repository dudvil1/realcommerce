import { Injectable } from "@angular/core";
import { ImdbItem } from "../models/item";

@Injectable({
  providedIn: "root",
})
export class DataFiltersService {
  constructor() {}

  filterToTypes(collection: ImdbItem[]) {
    let dict = {};
    collection.forEach((item) => {
      dict[item.Type] = dict[item.Type] || 0;
      dict[item.Type] += 1;
    });
    return Object.keys(dict).map((type) => ({
      type,
      count: dict[type],
    }));
  }

  filterByType(collection: ImdbItem[], type: string) {
    return collection.filter((item) => item.Type == type);
  }

  dateConverter(dateString: string) {
    const year = Number(dateString.substr(0, 4));
    const month = Number(dateString.substr(4, 2)) - 1;
    const day = Number(dateString.substr(6, 2));
    const date = new Date(year, month, day);
    return date;
  }

  isNameContain(name: string, strToContain: string) {
    return name.toLowerCase().includes(strToContain.toLowerCase());
  }

  isYearContain(year: string, strToContain: string) {
    const digisGroups = strToContain.match(/\d+/g);
    const yearToMatch = digisGroups ? digisGroups[0] : undefined;
    return yearToMatch ? year.includes(strToContain) : false;
  }

  ascSort(collection: ImdbItem[]) {
    return collection.sort((one, two) => (one.Title < two.Title ? -1 : 1));
  }

  descSort(collection: ImdbItem[]) {
    return collection.sort((one, two) => (one.Title > two.Title ? -1 : 1));
  }
}
