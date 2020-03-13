import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "client-side-product-details";
  test = "NOTHING";

  domains = ["http://localhost:5000", "http://localhost:3000"];

  key = "selectedProductID";

  onClick() {
    this.test = localStorage.getItem(this.key);
    //TODO scarluccio: read cross domain local storage
    console.log(this.test);
  }
}
