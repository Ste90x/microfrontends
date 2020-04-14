import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Product } from './models/Product/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // TODO scarluccio: Remove Mock
  product: Product = {
    id: '0',
    name: 'Pizza',
    price: '4,99',
    description: 'SUCH GOOD, MUCH WOW!',
    image: 'https://images.alphacoders.com/959/thumb-1920-959369.jpg'
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onProductAndAmountSubmitted(event: any) {}
}
