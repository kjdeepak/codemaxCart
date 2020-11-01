import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartServiceSubscription: Subscription;
  totalCartPrice: number;
  totalCartItems: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartServiceSubscription = this.cartService.cart$.subscribe(cartItems => {
      this.totalCartPrice = cartItems.reduce((accumulator, currentValue) => {
        return accumulator + +currentValue.price;
      }, 0);

      this.totalCartItems = cartItems.length;
    });
  }

  ngOnDestroy(): void {
    this.cartServiceSubscription.unsubscribe();
  }

}
