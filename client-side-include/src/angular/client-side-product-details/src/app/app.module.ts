import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ProductVisualisationComponent } from "./components/product-visualisation/product-visualisation.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductVisualisationComponent,
    ProductDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
