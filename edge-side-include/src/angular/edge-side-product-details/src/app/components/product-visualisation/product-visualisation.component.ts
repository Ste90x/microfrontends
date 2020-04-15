import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Product } from "src/app/models/Product/product.model";

@Component({
  selector: "app-product-visualisation",
  templateUrl: "./product-visualisation.component.html",
  styleUrls: ["./product-visualisation.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ProductVisualisationComponent {
  @Input() product: Product;
}
