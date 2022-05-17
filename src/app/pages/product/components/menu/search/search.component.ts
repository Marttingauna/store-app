import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
        search: new FormControl('' ),
    });

  }
  searchProduct( search: String ) {
    console.log(this.myForm.value);
  }
}
