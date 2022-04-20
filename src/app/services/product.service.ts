import { Injectable } from '@angular/core';
/*Para inyectar un servicio en cualquier componente, es como una clase/componente padre que lo podes llamar de cualquier lado */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}
