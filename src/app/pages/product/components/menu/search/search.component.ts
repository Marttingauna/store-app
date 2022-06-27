import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  myForm!: FormGroup;
  color: string = 'warn';
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      search: new FormControl(''),
    });
  }
  searchProduct(search: String) {
    this.router.navigateByUrl(`search/${search}`);
  }
}
