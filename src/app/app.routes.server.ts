import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: '', // This renders the "/" route on the client (SSG)
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'post-list', // This page requires user-specific data, so we use SSR
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'post/:id', // Детали поста (SSR)
    renderMode: RenderMode.Server,
  },
  {
    path: '**', // All other routes will be rendered on the server (SSR)
    renderMode: RenderMode.Server,
  },
];
