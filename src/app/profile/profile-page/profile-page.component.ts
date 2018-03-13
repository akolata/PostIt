import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Post} from '../../models/models';
import {UserPostsService} from '../service/user-posts.service';
import {AuthService} from '../../authorization';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  email: string;
  posts: Post[];

  constructor(private route: ActivatedRoute, private service: UserPostsService, private authService: AuthService) {
    this.route.paramMap.subscribe((params: Params) => {
      this.email = params.get('email');

      if (!this.email) {
        this.email = this.authService.user.email;
      }
    });

  }

  ngOnInit() {
    this.service.getPostsObs().subscribe((posts: Post[]) => {
      this.posts = posts;
    });

    this.findPostsByEmail('', this.email);
  }

  findPostsByEmail(title: string, email: string): void {
    this.service.getPostsByUser(title, email);
  }

}
