import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BlogPost } from './blog_post';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private blogPostsUrl = 'api/posts';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogPostsUrl).pipe(
      catchError(this.handleError<BlogPost[]>('getBlogPosts', []))
    );
  }

  getBlogPost(id: number): Observable<BlogPost> {
    const url = `${this.blogPostsUrl}/${id}`;
    return this.http.get<BlogPost>(url);
    // return this.http.get<BlogPost>(this.blogPostUrl).pipe(
    //   catchError(this.handleError<BlogPost>('getBlogPost',{}))
    // )
  }

  updateBlogPost(post: BlogPost): Observable<any> {
    const url = `${this.blogPostsUrl}/${post.id}`
    return this.http.put(url, post, this.httpOptions)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
