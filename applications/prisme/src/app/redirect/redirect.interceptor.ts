import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		if (req.url.startsWith('/api')) {
			const clonedHeaders = req.headers;
			clonedHeaders.set('Access-Control-Allow-Origin', '*');
			clonedHeaders.set('Authorization', `Lucca application=${environment.apiKey}`);
			const clonedRequest = req.clone({
				url: `https://${environment.apiUrl}${req.url}`,
				headers: clonedHeaders,
			});
			return next.handle(clonedRequest);
		} else {
			return next.handle(req);
		}
	}
}
