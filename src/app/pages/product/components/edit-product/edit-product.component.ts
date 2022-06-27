import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  producto: Product = null;

  constructor(
    private productoService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productoService.detail(theProductId).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const theProductId: number = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productoService.update(theProductId, this.producto).subscribe(
      data => {
        
        this.router.navigate(['/product/list']);
      },
      err => {
        
        // this.router.navigate(['/']);
      }
    );
  }


}
