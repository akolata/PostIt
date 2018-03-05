import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../models/models';
import {NgForm} from '@angular/forms';
import {PostsService} from '../service/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styles: []
})
export class AddPostComponent implements OnInit {

  @ViewChild('addPostForm')
  addPostForm: NgForm;

  post: Post;

  constructor(private postsService: PostsService) {
    this.post = new Post();
  }

  ngOnInit() {
  }

  addPost(): void {
    this.postsService.addPost(this.post);
    this.post = new Post();
    this.addPostForm.resetForm(this.post);
  }

}
