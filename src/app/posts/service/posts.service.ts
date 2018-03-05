import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  getPosts() {
    this.http.get<Array<Post>>(this.apiUrl, {params: this.params})
      .subscribe(postsFromDb => {
        this.posts$.next(postsFromDb);
      });
  }

  getPostsObs(): Observable<Array<Post>> {
    return this.posts$.asObservable();
  }

  addPost(post: Post) {
    post.created = new Date();
    post.userId = this.authService.user.uid;
    this.http.post(this.apiUrl, post, {params: this.params}).subscribe(data => {
      this.getPosts();
    });

  }

}
