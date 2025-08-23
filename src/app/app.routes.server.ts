import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'api/**',
    renderMode: RenderMode.Client  // không SSR, client tự xử lý
  },
  {
    path: 'assets/**',
    renderMode: RenderMode.Client  // assets không cần SSR
  },
  { 
    path: 'public/**', renderMode: RenderMode.Client 
  },
  {
    path: '**',
    renderMode: RenderMode.Server  // fallback cho tất cả route khác
  }
];
