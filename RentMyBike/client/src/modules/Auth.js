class Auth {
    // https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
    static authenticateToken(token) {
      sessionStorage.setItem('token', token);
    }
  
    static isUserAuthenticated() {
      return sessionStorage.getItem('token') !== null;
    }
  
    static deauthenticateToken() {
      sessionStorage.removeItem('token');
    }
  
    static getToken() {
      return sessionStorage.getItem('token');
    }
  
  }
  
  export default Auth;