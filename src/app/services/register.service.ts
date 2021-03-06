import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://flask-backend-server.herokuapp.com/api/';

  registerUser(userObj) {
    return this.http.post(this.baseURL+'register', userObj);
  }

  // loginUser(userObj) {
  //   return this.http.post(this.baseURL+'login', userObj);
  // }

  logout() {
    console.log('clicked');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('current_user');
    
  }
  
}
