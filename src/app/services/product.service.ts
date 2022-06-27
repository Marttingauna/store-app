import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
/*Para inyectar un servicio en cualquier componente, es como una clase/componente padre que lo podes llamar de cualquier lado */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /*URL base de servicio a llamar - Direccion de API REST*/
  productoURL = 'http://localhost:8080/producto/';

  /* Angular tiene un marco de inyección de dependencia, HttpClient es el inyectable */
  constructor(private httpClient: HttpClient) {}

  /**--------------------------------MÉTODOS------------------------------------------ */
  
  public lista(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productoURL + 'lista');
  }

  public detail(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productoURL + `detailname/${nombre}`);
  }

  public save(producto: Product): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public update(id: number, producto: Product): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
}