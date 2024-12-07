import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    router= inject(Router);
    userService= inject(UserService);
    canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
        if (!this.userService.isLogin()) {
            this.router.navigate(['/']); // go to login if not authenticated
            return false;
        }
        return true;
    }
}