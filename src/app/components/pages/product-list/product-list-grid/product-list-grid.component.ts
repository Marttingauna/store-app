import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.css']
})
export class ProductListComponent implements OnInit { 
  products!: Product[];
  iconCarrito: 'pi pi-times';
  //Inyección de dependencia de servicio en el constructor del componente
  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }
  //Se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.listProducts();
    this.primengConfig.ripple = true;
  }
  //Método para obtener todos los productos, de esta manera se usaria para el tag table normal
  listProducts(){
    //Este metodo se ejecutaran de forma asincrona, por lo que se debe esperar a que se complete el observable
    this.productService.getProductsList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  checked1: boolean = false;

  //Se crea una variable de tipo MatTableDataSource para poder usar el componente de la tabla
  // dataSource = (this.products);
  // displayedColumns: string[] = ['imageUrl','name', 'description', 'unitPrice', 'unitsInStock'];



}
