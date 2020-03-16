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
    let eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    eventer(
      messageEvent,
      e => {
        console.log(e.data);
        this.http
          .get("http://localhost:5000/products/" + e.data)
          .subscribe((response: Product) => {
            console.log(response);
            if (response !== null) this.product = response;
          });
      },
      false
    );
  }
}
