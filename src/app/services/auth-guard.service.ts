import { Injectable } from '@angular/core';
import {Route,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate  } from "@angular/router";
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate(nex:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
   console.log(nex);
if (this.auth.isAuthenticated()) {

  console.log('paso el guard');
  return true;
} else {
  console.log('Bloqueado por el guard');

  return false;
}
    
  }

  constructor(private auth:AuthService) { }


}
