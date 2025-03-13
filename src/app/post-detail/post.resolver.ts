import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/core';

const POST_KEY = makeStateKey<any>('post');

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<any> {
  constructor(private http: HttpClient, private transferState: TransferState) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const postId = route.paramMap.get('id');
    this.transferState.remove(POST_KEY);
    const post = await this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`).toPromise();
    this.transferState.set(POST_KEY, post);
    return post;
  }
}
