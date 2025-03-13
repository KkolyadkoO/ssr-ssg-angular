import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .subscribe(post => {
        this.post = post;
      });
  }
}
