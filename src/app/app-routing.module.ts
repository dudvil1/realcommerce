import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { productBasicComponent } from './components/product-basic/product-basic.component'
import { ItemViewComponent } from './components/item-view/item-view.component'

const routes: Routes = [
  { path: "", component: productBasicComponent },
  { path: "itemView", component: ItemViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
