import { Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostResolver} from './post-detail/post.resolver';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent, resolve: { post: PostResolver } },
  { path: '**', redirectTo: '' }
];
