import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Product } from "./models/Product/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  product: Product;

  ngOnInit() {
    this.product = {
      id: "0",
      name: "Pizza",
      price: "4,99",
      description: "SUCH GOOD, MUCH WOW!",
      image: "https://images.alphacoders.com/959/thumb-1920-959369.jpg"
    };
  }
}
