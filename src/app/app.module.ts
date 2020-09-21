import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { productBasicComponent } from './components/product-basic/product-basic.component'
import { productListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemViewComponent } from './components/item-view/item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    productBasicComponent,
    productListComponent,
    ProductSearchComponent,
    ItemViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
