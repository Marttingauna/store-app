import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
        search: new FormControl('' ),
    });

  }
  searchProduct( search: String ) {
    console.log(search);
    this.router.navigateByUrl(`/search/${search}`);
  }
}
