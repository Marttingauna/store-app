import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories: ProductCategory[];
  /* Inyectando servicio de producto */
  constructor(private productService: ProductService) { }

  ngOnInit() {
    /* Metodo que llamara a nuestro servicio */
    this.listProductCategories();
  }
  listProductCategories() {
    /* Invocamos al servicio */
    this.productService.getProductCategories().subscribe( 
      data => {
      this.productCategories = data;
      }
    );
  }

}
