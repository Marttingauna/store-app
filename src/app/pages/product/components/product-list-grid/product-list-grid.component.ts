import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list-grid.component.css'],
})
export class ProductListComponent implements OnInit {
  iconCarrito: 'pi pi-times';

  products!: Product[];
  currentCategoryID: number;
  searchMode: boolean;

  //Inyección de dependencia de servicio en el constructor del componente
  //Inyección de dependencia de la ruta activa, es util para obtener el id de la categoria
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  //Se ejecuta al iniciar el componente
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.listProducts();
    });
  }
  
  //Método para obtener todos los productos, de esta manera se usaria para el tag table normal
  listProducts() {
    /** Si el parametro searchMode es verdadero, se ejecuta el metodo handleSearchProducts(BUSQUEDA POR PALABRA CLAVE)
     * si es falso, se ejecuta el metodo handleListProducts(LISTADO DE TODOS LOS PRODUCTOS)
    */    
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
    
  }
  // Método para buscar productos
  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    /**
     *Servicio para buscar productos por keyword.
     *Llamada al servicio para buscar productos por keyword y la 
     *respuesta se almacena en la variable products
     */
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  checked1: boolean = false;

  //Se crea una variable de tipo MatTableDataSource para poder usar el componente de la tabla
  // dataSource = (this.products);
  // displayedColumns: string[] = ['imageUrl','name', 'description', 'unitPrice', 'unitsInStock'];

  handleListProducts() {
    //Compruebo si existe un id de categoria en la ruta activa
    /* Se obtiene de la ruta activa, el estado de la ruta actual, paramMap 
    es un map de los parametro de la ruta actual y se lee el id de la categoria */
    // Si esta disponible retorna verdadero, si no retorna falso.
    const hasCategoryID: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryID) {
      this.currentCategoryID = +this.route.snapshot.paramMap.get('id')!;
    } else {
      this.currentCategoryID = 1;
    }

    //Obtenemos los productos de la categoria actual

    //Este metodo se ejecutaran de forma asincrona, por lo que se debe esperar a que se complete el observable
    this.productService.getProductsList(this.currentCategoryID).subscribe((data) => {
      this.products = data;
    });
  }
}
