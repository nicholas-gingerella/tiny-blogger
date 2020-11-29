import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog_post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  
  blogPost: BlogPost;

  constructor(
    private BlogPostService: BlogPostService
  ) { }

  ngOnInit(): void {
    this.getBlogPost();
  }

  getBlogPost(): void {
    this.blogPostService.getBlogPost().subscribe(p => this.blogPost = p);
  }

}
