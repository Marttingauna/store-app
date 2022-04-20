import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
/*Para inyectar un servicio en cualquier componente, es como una clase/componente padre que lo podes llamar de cualquier lado */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*URL base de servicio a llamar - Direccion de API REST*/
  private baseUrl = 'http://localhost:8080/api/products';

  /* Angular tiene un marco de inyección de dependencia, HttpClient es el inyectable */
  constructor(private httpClient: HttpClient) { }

  // Método para obtener todos los productos
  getProductsList(): Observable<Product[]> {
    // Se retorna un observable de productos (Product[]) que se obtiene de la API REST
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)// Mapeo de la respuesta de la API REST
    )
  }
}
//Interface para obtener la respuesta del servicio en formato JSON y convertirlo a Product[]
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
