import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoginServiceService} from '../login-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService:LoginServiceService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq= req;
        let token = this.loginService.getToken()
        console.log("INTERCEPTOR ",token);
        if(token!=null){
            newReq=newReq.clone({setHeaders:{Authorization:`Bearer +${token}`}});
        }
        return next.handle(newReq)
    }
    // intercept(req: HttpRequest<any>, next: HttpHandler) {
    //     return this.loginService.getToken().pipe(
    //         switchMap(token => {
    //             const headers = req.headers.set('Authorization', `Bearer ${token}`);
    //             const authReq = req.clone({ headers });
    
    //             return next.handle(authReq);
    //         })
    //     );
    // }
}