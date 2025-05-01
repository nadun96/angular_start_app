import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import {TokenManagerService} from '../services/token-manager.service';


export const authGuard: CanActivateFn = (route, state) => {
  const tokenManagerService = inject(TokenManagerService)
  const router = inject(Router);
  if (tokenManagerService.exists('access_token')){
    return true;
  }else{
    router.navigateByUrl('/login').then(r => {});
    alert('You are not authorized to access this page without a token');
    return false;
  }
};
