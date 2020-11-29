import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog_post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor(
    private blogPostService: BlogPostService
  ) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogPostService.getBlogPosts().subscribe(p => this.blogPosts = p);
  }

}
