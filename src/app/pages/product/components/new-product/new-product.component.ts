import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [UploadService],
})
export class NewProductComponent implements OnInit {
  category: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  dateCreated: Date;
  lastUpdated: Date;

  files: File[] = [];

  constructor(
    private productoService: ProductService,
    private _uploadService: UploadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const producto = new Product(
      this.category,
      this.name,
      this.description,
      this.unitPrice,
      this.imageUrl,
      (this.active = true),
      this.unitsInStock
    );
    console.log(
      'Producto: ' + producto.category,
      producto.name,
      producto.description,
      producto.unitPrice,
      producto.imageUrl,
      producto.active,
      producto.unitsInStock
    );
    

    this.productoService.save(producto).subscribe(
      (data) => {
        this.router.navigate(['/product/list']);
      },
      (err) => {
        // this.router.navigate(['/']);
      }
    );
  }

  async onUpload() {
    //en caso de no recibir una imagen
    if (!this.files[0]) {
      this.imageUrl =
        'https://res.cloudinary.com/storeappcloud/image/upload/v1655994848/testing_angular_cloudinary/no_image_hwlqct.jpg';
    }

    //Cargando imagen a cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'angular_cloudinary');
    data.append('cloud_name', 'storeappcloud');
    this._uploadService.uploadImage(data).subscribe((response) => {
      if (response) {
        this.imageUrl = response.secure_url;
      }
    });
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
