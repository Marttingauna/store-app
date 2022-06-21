import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isLogged = false;
  nombreUsuario= ''
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if( this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else{
      this.isLogged = false;
      this.nombreUsuario= '';
    }
  }

}
