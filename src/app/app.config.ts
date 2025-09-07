import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { definePreset } from '@primeuix/themes';

import { provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
import { httpCacheInterceptor } from '@core/interceptor/http-cache.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

export const appConfig: ApplicationConfig = {
  providers: [
    ConfirmationService,
    DialogService,
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '#ECEFFF',
              100: '#C5CBFF',
              200: '#9FA8FF',
              300: '#7985FF',
              400: '#5A6DFF',
              500: '#304FFE',
              600: '#3D54E6',
              700: '#2F42B3',
              800: '#223080',
              900: '#161E4D',
              950: '#0C1126',
              color: '#536DFE',
              contrastColor: '#ffffff'
            },
            surface: {
              0: '#ffffff',   // nền trắng tuyệt đối
              50: '#f8fafc',   // hơi xanh lạnh (thay vì gray vàng)
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
              950: '#020617'
            }
          }
        })
      }
    }),
    provideHttpClient(withFetch()),
    importProvidersFrom(
       TranslateModule.forRoot({
        defaultLanguage: 'en'
      }),
      ConfirmDialogModule
    ),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    }),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    provideCacheableAnimationLoader(),
    provideHttpClient(withInterceptors([httpCacheInterceptor])),
    provideAnimationsAsync('animations'),
  ]
};


