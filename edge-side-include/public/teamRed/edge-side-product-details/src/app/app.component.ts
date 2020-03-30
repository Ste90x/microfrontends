import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Product } from "./models/Product/product.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  domObject: any;
  product: Product;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    window.document
      .querySelector(".apps-hook")
      .addEventListener("selectedProductId", (event: any) => {
        this.http
          .get(
            "http://localhost:5000/products/" + event.explicitOriginalTarget.id
          )
          .subscribe((response: Product) => {
            // console.log(response);
            if (response !== null) {
              this.product = response;
            }
          });
      });
  }
}
