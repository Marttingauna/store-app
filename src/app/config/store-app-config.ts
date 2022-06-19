export default {
    oidc: {
        clientId: '0oa5fr8rxiRZaqtvu5d7', // ID de la aplicación
        issuer: 'https://dev-09760926.okta.com/oauth2/default', // URL del servidor de autenticación
        redirectUri: 'https;//localhost:4200/login/callback', // URL de redirección cuando se inicia la sesión
        scopes: ['openid', 'email', 'profile'],
    }
}
