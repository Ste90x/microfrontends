import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { Product } from "src/app/models/Product/product.model";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {
  @Input() product: Product;
  @Output() amountSubmitted = new EventEmitter<{
    product: Product;
    amount: number;
  }>();

  defaultAmount = "1";

  @ViewChild("amountForm", { static: false }) amountForm: NgForm;

  onSubmitAmount() {
    this.amountSubmitted.emit({
      product: this.product,
      amount: this.amountForm.value.prodAmount
    });
  }
}
