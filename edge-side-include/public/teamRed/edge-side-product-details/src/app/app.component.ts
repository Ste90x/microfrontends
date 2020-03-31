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
  product: Product;
  appsHookId = "#apps-hook";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (window.document.querySelector(this.appsHookId) !== null) {
      window.document
        .querySelector(this.appsHookId)
        .addEventListener("selectedProductId", (event: any) => {
          this.http
            .get("http://localhost:5000/products/" + event.detail)
            .subscribe((response: Product) => {
              // console.log(response);
              if (response !== null) {
                this.product = response;
              }
            });
        });
    }
  }

  onProductAndAmountSubmitted(event: any) {
    const selectedAmountOfProduct = new CustomEvent("selectedAmountOfProduct", {
      detail: event
    });
    if (window.document.querySelector(this.appsHookId) !== null) {
      window.document
        .querySelector(this.appsHookId)
        .dispatchEvent(selectedAmountOfProduct);
    } else {
      console.log(`No element with an id of ${this.appsHookId} found`);
    }
  }
}
