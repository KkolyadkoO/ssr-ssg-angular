import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/core';

const POST_KEY = makeStateKey<any>('post');

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private transferState: TransferState
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      this.post = this.transferState.get(POST_KEY, null) || this.route.snapshot.data['post'];
    });
  }
}
