import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  addToCart(theCartItem: CartItem) {

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
    if (this.cartItems.length > 0) { //si el carrito tiene elementos
      // Retorna el primer elemento que cumpla la condicion, sino undefined
      existingCartItem = this.cartItems.find(indexCartItem => indexCartItem.id === theCartItem.id);

      //Si el item existe en el carrito
      alreadyExistsInCart = (existingCartItem != undefined);
    }
    if (alreadyExistsInCart) {

      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }

  decrementQuantity(item: CartItem) {
    item.quantity--;
    if (item.quantity === 0) {
      this.remove(item);
    } else {
      this.computeCartTotals();
    }
  }
    // Actualizar el precio total del carrito de compras
    computeCartTotals() {

      let totalPriceValue: number = 0;
      let totalQuantityValue: number = 0;

      //Iterar sobre todos los items del carrito
      //Calcular el total de precio y cantidad de todos los items
      for (let tempCartItem of this.cartItems) {
        totalPriceValue += tempCartItem.quantity * tempCartItem.unitPrice;
        totalQuantityValue += tempCartItem.quantity;
      }

      //Esto es para que se actualice el valor del totalPrice y totalQuantity
      this.totalPrice.next(totalPriceValue);
      this.totalQuantity.next(totalQuantityValue);

      this.logCartData(totalPriceValue, totalQuantityValue);
    }

    //Metodo temporal para loguear los datos del carrito
    logCartData(totalPriceValue: number, totalQuantityValue: number) {
      console.log(`Contenido del carrito:`);
      for (let tempCartItem of this.cartItems) {
        const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
        console.log(`Nombre: ${tempCartItem.name}, Cantidad: ${tempCartItem.quantity} Precio por unidad: ${tempCartItem.unitPrice}, Subtotal: ${subTotalPrice}`);
      }

      console.log(`Precio total: ${totalPriceValue.toFixed(2)}, Cantidad total: ${totalQuantityValue}`);
    }

    remove(item: CartItem) {
      // Busca por el id en los items del carrito y lo elimina
      const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);

      if (index > -1) {
        // Elimina el item del arrau de cartItems en base a la posicion del index anteriormente encontrado
        this.cartItems.splice(index, 1);
        this.computeCartTotals();
      }
    }
  }

