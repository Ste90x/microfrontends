import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { EmptyRouteComponent } from "./empty-route/empty-route.component";

import { ProductVisualisationComponent } from "./components/product-visualisation/product-visualisation.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ProductVisualisationComponent,
    ProductDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
