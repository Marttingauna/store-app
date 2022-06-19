import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from '../../../../config/store-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// Referencia para iniciar el widget de inicio de sesión
  oktaSignin: any;

  constructor(private oktaAuthService: OktaAuthService) { 
    // Inicializar el widget de inicio de sesión
    this.oktaSignin = new OktaSignIn({
      // Configuración del widget de inicio de sesión
      //Personalizar el logo de inicio de sesión
      logo: 'assets/images/logo.png',
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        /* Activar el código de verificación de autenticación 
        en la pantalla de inicio de sesión.
        Es un enfoque recomendado para controlar el acceso de
        la aplicacion con el servidor de autenticación.
        */
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    });

  }

  ngOnInit(): void {
     // Eliminamos cualquier elemento anterior que estuviera en el DOM
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({
      // Renderizar el elemento en el DOM
      el: '#okta-sign-in-widget'}, 
      (response) => {
        if (response.status === 'SUCCESS') {
          // Iniciar sesión con el servidor de autenticación
          this.oktaAuthService.signInWithRedirect();
        }
      },
      (error) => {
        throw error;
      }
    );
  }

}
