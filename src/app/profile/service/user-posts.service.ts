import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from '../../models/models';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserPostsService {

  readonly apiUrl: string = environment.mLab.URL;
  readonly params: HttpParams = new HttpParams().set('apiKey', environment.mLab.APIKey);

  private posts$ = new BehaviorSubject<Array<Post>>([]);

  constructor(private http: HttpClient) {
  }

  getPostsByUser(postTitle: string, email: string) {
    const matchTitleForUserQuery = `
      {
        "title": {
          "$regex": ".*${postTitle}.*",
          "$options": "i"
        }, 
        "authorEmail" : "${email}"
      }
    `;

    this.http.get<Array<Post>>(this.apiUrl, {params: this.params.set('q', matchTitleForUserQuery)})
      .subscribe(postsFromDb => {
        this.posts$.next(postsFromDb);
      });
  }

  getPostsObs(): Observable<Array<Post>> {
    return this.posts$.asObservable();
  }

}
