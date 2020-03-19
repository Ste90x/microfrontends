import { Component, ViewEncapsulation, OnInit } from "@angular/core";
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent =
      eventMethod === "attachEvent" ? "onmessage" : "message";

    eventer(
      messageEvent,
      e => {
        // console.log(e.data);
        this.http
          .get("http://localhost:5000/products/" + e.data.value)
          .subscribe((response: Product) => {
            // console.log(response);
            if (response !== null) {
              this.product = response;
            }
          });
      },
      false
    );
  }

  onProductAndAmountSubmitted(event) {
    // console.log(event);
    window.parent.postMessage(
      { selectedAmountOfProduct: event.amount },
      "http://localhost:5000"
    );
  }
}
