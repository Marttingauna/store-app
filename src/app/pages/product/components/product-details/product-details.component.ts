import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../common/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  isArcade: String;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Me suscribo a los parametros de la ruta
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  handleProductDetails() {
    //Obtenermos el 'id' del parametro de la ruta, convertimos de string a number con '+'.
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    //Llamamos al servicio para obtener el producto
    this.productService.detail(theProductId).subscribe((data) => {
      this.product = data;
      console.log('this.product', this.product)
    });
  }

  addToCart() {
    console.log(`Agregando al carrito de compras:  ${this.product.name}, ${this.product.unitPrice}`);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}
