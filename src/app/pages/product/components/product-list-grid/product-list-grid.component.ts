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

  products: Product[] = [];
  currentCategoryID: number = 1;
  previousCategoryID: number = 1;
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string;

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

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    /**
     *Servicio para buscar productos por keyword.
     *Llamada al servicio para buscar productos por keyword y la
     *respuesta se almacena en la variable products
     */
    this.productService
      .searchProductsPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        theKeyword
      )
      .subscribe(this.processResult());
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
    //Si el id de la categoria es diferente al id de la categoria anterior, el numero de pagina se pone en 1
    if (this.previousCategoryID != this.currentCategoryID) {
      this.thePageNumber = 1;
    }

    this.previousCategoryID = this.currentCategoryID;
    console.log(
      `currentCategoryID=${this.currentCategoryID}, thePageNumber=${this.thePageNumber}`
    );

    //Obtenemos los productos de la categoria actual
    //Este metodo se ejecutaran de forma asincrona, por lo que se debe esperar a que se complete el observable
    this.productService
      .getProductsListPaginate(
        this.thePageNumber - 1, // El -1 es porque el numero de pagina empieza en 0 y el numero de pagina de la api empieza en 1
        this.thePageSize, // El tamaño de la pagina
        this.currentCategoryID
      )
      .subscribe(this.processResult());
  }
  //Método para procesar los resultados de la petición
  processResult() {
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }
}
