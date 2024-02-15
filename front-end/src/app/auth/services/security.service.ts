import { Injectable } from '@angular/core';
import { responseAuth } from '../interfaces/responseAuth';
import { userCredentials } from '../interfaces/userCredentials';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly keyToken = "token";
  private readonly keyExpiration = "token-expiration";
  isUserAuthenticated: boolean = false;

  constructor() { }

  isAuthenticated(): boolean{
    return this.isUserAuthenticated;
  }

  login(credentials: userCredentials): responseAuth | boolean{
    if(credentials.email === "admin@admin.com" && credentials.AuthPassInit === "admin"){
      this.isUserAuthenticated = true;
      return true;
    }
    let date = new Date();
    let response: responseAuth = {
      token: "admin",
      expiration: date
    }
    return false;
    //return response;
  }

  saveTokenUser(responseAuth: responseAuth){
    localStorage.setItem(this.keyToken, responseAuth.token);
    localStorage.setItem(this.keyExpiration, responseAuth.expiration.toString());
  }

}
