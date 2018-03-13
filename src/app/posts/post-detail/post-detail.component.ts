import {Component, Input, OnInit} from '@angular/core';
import {Post, PostComment} from '../../models/models';
import {AuthService} from '../../authorization';
import {PostsService} from '../service/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input()
  postDetails: Post;

  commentsSectionVisible = false;
  addCommentInputVisible = false;

  constructor(private authService: AuthService, private postService: PostsService) {
  }

  ngOnInit() {
    this.authService.test();
  }

  toggleComments(): void {
    this.commentsSectionVisible = !this.commentsSectionVisible;
  }

  toggleAddComment(): void {
    this.addCommentInputVisible = !this.addCommentInputVisible;
  }

  addComment(input: HTMLInputElement): void {
    if (input.value.trim().replace(/\\s+/, '') === '') return;

    let comment = new PostComment(this.authService.user.email, input.value);
    this.postDetails.comments.push(comment);
    this.postService.addCommentToPost(this.postDetails);
    input.value = '';
    this.commentsSectionVisible = true;
  }

}
