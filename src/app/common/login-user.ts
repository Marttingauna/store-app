export class LoginUser {
    
    nombreUsuario: string ;
    
    password: string ;

    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
