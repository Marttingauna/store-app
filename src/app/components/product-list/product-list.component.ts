import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { 
  products!: Product[];
  //Inyección de dependencia de servicio en el constructor del componente
  constructor(private productService: ProductService) { }
  //Se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.listProducts();
  }
  //Método para obtener todos los productos, se invoca una vez que se 'suscribe' al observable.
  listProducts(){
    //Este metodo se ejecutaran de forma asincrona, por lo que se debe esperar a que se complete el observable
    this.productService.getProductsList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
}
