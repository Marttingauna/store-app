import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../common/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product = new Product();
  isArcade: String;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Me suscribo a los parametros de la ruta
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  handleProductDetails() {
    //Obtenermos el 'id' del parametro de la ruta, convertimos de string a number con '+'.
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;

    //Llamamos al servicio para obtener el producto
    this.productService.getProduct(theProductId).subscribe((data) => {
      this.product = data;
      console.log('this.product', this.product)
    });
  }

}
