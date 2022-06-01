import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
/*Para inyectar un servicio en cualquier componente, es como una clase/componente padre que lo podes llamar de cualquier lado */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /*URL base de servicio a llamar - Direccion de API REST*/
  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

  /* Angular tiene un marco de inyección de dependencia, HttpClient es el inyectable */
  constructor(private httpClient: HttpClient) {}

  /**--------------------------------MÉTODOS------------------------------------------ */

  // Método para obtener todos los productos
  getProductsListPaginate(
    thePage: number,
    thePageSize: number,
    categoryID: number
  ): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryID}
    &page=${thePage}&size=${thePageSize}`;
    // Se retorna un observable de productos (Product[]) que se obtiene de la API REST
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductsList(categoryID: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryID}`;
    // Se retorna un observable de productos (Product[]) que se obtiene de la API REST
    return this.getProducts(searchUrl);
  }

  // Metodo para buscar un producto por su nombre
  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    // Se retorna un observable de productos (Product[]) que se obtiene de la API REST
    return this.getProducts(searchUrl);
  }

  // Metodo para obtener un producto por su categoria
  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponseProductsCategories>(this.categoryUrl)
      .pipe(
        map((response) => response._embedded.productCategory) // Mapeo de la respuesta de la API REST
      );
  }

  // Metodo para obtener un producto por su id
  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    // Se retorna un observable de un producto (Product) que se obtiene de la API REST
    return this.httpClient.get<Product>(productUrl);
  }

  // Metodo refactorizado para obtener los productos(Utilizado para metodo de busca y listado)
  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
}

//Interface para obtener la respuesta del servicio en formato JSON y convertirlo a Product[]
// Agregando soporte para paginacion de productos
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
interface GetResponseProductsCategories {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
