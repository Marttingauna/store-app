import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  // Obteniendo el total de la cantidad de productos y el total de la suma de los precios de los productos en el carrito de compras desde el servicio
  updateCartStatus() {
    // Actualizar el precio total del carrito de compras
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    // Actualizar la cantidad total del carrito de compras.
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

  }
}

