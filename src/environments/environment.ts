export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080', //Spring Boot API


  //Keycloak configuration
  keycloak: {
    keycloakUrl: 'http://localhost:8085/auth',
    realm: 'kc',
    clientId: 'kc-frontend',
    redirectUri: 'http://localhost:4200'
  }

};

