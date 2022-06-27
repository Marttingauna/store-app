import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../common/new-user';
import { Observable } from 'rxjs';
import { LoginUser } from '../common/login-user';
import { JwtDTO } from '../common/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  constructor(private httpClient: HttpClient ) { }

  public newUser( nuevoUsuario: NewUser ):Observable<any> {
    return this.httpClient.post(this.authURL + 'new', nuevoUsuario);
  }

  public loginUser( loginUsuario: LoginUser ):Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
