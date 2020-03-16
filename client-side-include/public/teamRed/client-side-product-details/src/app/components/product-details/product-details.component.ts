import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Product } from "src/app/models/Product/product.model";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {
  @Input() product: Product;
}
