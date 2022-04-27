import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  navigate( ) {
    this.router.navigate(['http://localhost:4200/productList']) ;
  }
}
