import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {httpManagerInterceptor} from './interceptor/http-manager.interceptor';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // TO call Http request configure interceptors
    provideHttpClient(
      withInterceptors([httpManagerInterceptor]),
      withFetch()
    ),
    // enable # routing
    {
      provide: LocationStrategy, useClass:HashLocationStrategy
    }
  ]
};
