import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
/*Para inyectar un servicio en cualquier componente, es como una clase/componente padre que lo podes llamar de cualquier lado */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  /*URL base de servicio a llamar - Direccion de API REST*/
  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

  /* Angular tiene un marco de inyección de dependencia, HttpClient es el inyectable */
  constructor(private httpClient: HttpClient) { }

  // Método para obtener todos los productos
  getProductsList(categoryID: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryID}`;

    // Se retorna un observable de productos (Product[]) que se obtiene de la API REST
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)// Mapeo de la respuesta de la API REST
    );
  }

  getProductCategories():Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductsCategories>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)// Mapeo de la respuesta de la API REST
    );
  }

}
//Interface para obtener la respuesta del servicio en formato JSON y convertirlo a Product[]
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

interface GetResponseProductsCategories {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
