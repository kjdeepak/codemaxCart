import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/entities';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit(): void {
    this.http.get<Product[]>('assets/data.json').subscribe(data => {
      this.products = data;
    });
  }

  checkItemExistInCart(productId: number): boolean{
    return this.cartService.checkItemExistInCart(productId);
  }

  onClickAddToCart(product: Product): void{
    this.cartService.addItemToCart(product);
  }

  onClickRemoveItemFromCart(productId: number): void{
    this.cartService.removeItemFromCart(productId);
  }

}
