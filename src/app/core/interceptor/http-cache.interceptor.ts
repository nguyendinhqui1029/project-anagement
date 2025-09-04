import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CacheServiceService } from '@core/services/cache-service.service';
import { of, tap } from 'rxjs';

export const httpCacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheServiceService);
    if (req.method !== 'GET') {
      return next(req);
    }

    const cachedResponse = cacheService.get(req.urlWithParams);
    if (cachedResponse) {
      return of(new HttpResponse({ status: 200, body: cachedResponse }));
    }

    return next(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cacheService.set(req.urlWithParams, event.body);
        }
      })
    );
};
