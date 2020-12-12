import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../blog_post';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.scss']
})
export class ModifyPostComponent implements OnInit {

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
    const id = +this.route.snapshot.paramMap.get('id');
    this.BlogPostService.getBlogPost(id).subscribe(post => this.blogPost = post);
  }

  goBack(): void {
    this.location.back();
  }

  savePost(): void {
    this.BlogPostService.updateBlogPost(this.blogPost).subscribe(() => this.goBack());
  }


}
