import { CartService } from './../../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from '../../../../common/cart-item';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.css'],
})
export class ProductListComponent implements OnInit {
  iconCarrito: 'pi pi-times';

  productos: Product[] = [];
  roles: string[];
  isAdmin = false;
  
  searchMode: boolean = false;

  

  //Inyección de dependencia de servicio en el constructor del componente
  //Inyección de dependencia de la ruta activa, es util para obtener el id de la categoria
  constructor(
    private productoService: ProductService,
    private tokenService: TokenService,
    private cartService: CartService,
  ) {}
  //Se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  

  // -------------------------------------------------- //
  
  addToCart(theProduct: Product) {
    const theCartItem = new CartItem(theProduct)
    //Llamando al servicio para agregar un producto al carrito 
    this.cartService.addToCart(theCartItem);
  }
}
