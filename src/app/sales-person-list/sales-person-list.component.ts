import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  SalesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'Doe', 'johndoe@gmail.com', 100000),
    new SalesPerson('Jane', 'Doe', 'jenedoe@gmail.com', 200000),

    new SalesPerson('David', 'Smith', 'davidsmith@gmail.com', 300000),
    new SalesPerson('Mary', 'Smith', 'marysmith@gmail.com', 400000),
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
