import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../../services/token.service';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  
  isLogged= false;
  constructor(private tokenService: TokenService, private route: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged= false;
    }
  }
  onLogout(){
    this.tokenService.logout();
    this.route.navigate(['/login']);
    window.location.reload();
  }

}
