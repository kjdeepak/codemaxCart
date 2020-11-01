import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Product } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // tslint:disable-next-line: variable-name
  private readonly _cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  readonly cart$ = this._cart.asObservable();

  get cart(): Product[] {
    return this._cart.getValue();
  }
  set cart(val: Product[]) {
    this._cart.next(val);
  }

  addItemToCart(item: Product): void {
    this.cart = [
      ...this.cart,
      {...item}
    ];
  }

  removeItemFromCart(id: number): void{
    this.cart = this.cart.filter(item => item.id !== id);
  }

  clearCart(): void {
      this.cart = [];
  }

  checkItemExistInCart(id: number): boolean{
    const product = this.cart.filter(item => item.id === id);
    if (product.length){
      return true;
    }
    return false;

  }


}
