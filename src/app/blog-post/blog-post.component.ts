import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog_post';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  
  blogPost: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private BlogPostService: BlogPostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBlogPost();
  }

  getBlogPost(): void {
    this.BlogPostService.getBlogPost().subscribe(p => this.blogPost = p);
    const id = +this.route.snapshot.paramMap.get('id');
    this.BlogPostService.getBlogPost(id).subscribe(post => this.blogPost = post);
  }

}
