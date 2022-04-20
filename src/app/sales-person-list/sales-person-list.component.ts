import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})

export class SalesPersonListComponent implements OnInit {
  SalesPersonList: SalesPerson[] = [
    new SalesPerson('Melvin G', 'Brown', 'MelvinBrown@gmail.com', 10000),
    new SalesPerson('Thomas ', 'Hall', 'ThomasHall@gmail.com', 200000),
  
    new SalesPerson('Dulce ', 'Clopton', 'DulceClopton@gmail.com', 300000),
    new SalesPerson('James ', 'Vannatta', 'JamesVannatta@gmail.com', 400000),
    
  ];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'salesVolume','metCuota'];
  dataSource = new MatTableDataSource<SalesPerson>(this.SalesPersonList);

  constructor() { }

  ngOnInit(): void {
  }

}
