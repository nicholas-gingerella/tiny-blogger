import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BlogPost } from './blog_post';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = [
      {
        id: 11,
        title: 'In the Beginning, there was a Segmentation Fault',
        description: 'Programming is great, but it has it\'s downsides...',
        content: 'Behold, the shortest post ever! We\'ll talk about segfaults',
        tags: ['c++', 'error handling', 'tdd', 'ci/cd'],
        date_created: '11-25-20',
        date_modified: '',
        published: true
      },
      {
        id: 12,
        title: 'Angular or React? Yet another decision for web developers',
        description: 'Frameworks come and go. Is Angular dead and React the new king?',
        content: 'Web development is hard. Half the trouble is just choosing what framework to start with!',
        tags: ['javascript', 'angular', 'react', 'web frameworks'],
        date_created: '11-27-20',
        date_modified: '',
        published: true
      },
      {
        id: 13,
        title: 'Keeping up with modern C++ (What even is a Variant?)',
        description: 'It\'s easy to fall behind in software. Modern C++ is just another example',
        content: 'Behold, the shortest post ever! We\'ll talk about modern C++',
        tags: ['c++', 'clang', 'c++20'],
        date_created: '11-30-20',
        date_modified: '',
        published: true
      },
      {
        id: 14,
        title: 'Insert witty title here, preferably with AI',
        description: 'Is AI just another buzzword?',
        content: 'Content not complete yet',
        tags: ['ai', 'ml', 'tensorflow' ],
        date_created: '',
        date_modified: '',
        published: false
      },
    ];
    return {articles};
  }

  // Overrides the genId method to ensure that a post always has an id.
  // If the post array is empty, the method below returns the initial number (11).
  // if the post array is not empty, the method below returns the highest
  // post id + 1.
  genId(blogPosts: BlogPost[]): number {
    return blogPosts.length > 0 ? Math.max(...blogPosts.map(p => p.id)) + 1 : 11;
  }
}