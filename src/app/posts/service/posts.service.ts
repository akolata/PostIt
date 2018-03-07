import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Post} from '../../models/models';
import {AuthService} from '../../authorization';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  readonly apiUrl: string = environment.mLab.URL;
  readonly params: HttpParams = new HttpParams().set('apiKey', environment.mLab.APIKey);

  private posts$ = new BehaviorSubject<Array<Post>>([]);

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getPosts();
  }

  getPosts(postTitle: string = '') {
    const titleRegexQuery = `
      {
        "title": {
          "$regex": ".*${postTitle}.*",
          "$options": "i"
        }
      }
    `;

    this.http.get<Array<Post>>(this.apiUrl, {params: this.params.set('q', titleRegexQuery)})
      .subscribe(postsFromDb => {
        this.posts$.next(postsFromDb);
      });
  }

  getPostsObs(): Observable<Array<Post>> {
    return this.posts$.asObservable();
  }

  addPost(post: Post) {
    post.created = new Date();
    post.authorEmail = this.authService.user.email;
    post.comments = [];

    this.http.post(this.apiUrl, post, {params: this.params}).subscribe(data => {
      this.getPosts();
    });

  }

  addCommentToPost(post: Post) {
    const commentsJson = JSON.stringify(post.comments);
    const updateJSON = `
    {
      "$set": {
        "comments":  ${commentsJson}
      }
    }
    `;
    const postUrl = this.apiUrl + `/${post._id.$oid}`;

    this.http.put<Post>(postUrl, updateJSON, {
      params: this.params,
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

}
