import {Component, OnInit} from '@angular/core';
import {PostsService} from '../service/posts.service';
import {Post} from '../../models/models';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Array<Post>;
  searchForm: FormGroup;

  constructor(private postsService: PostsService) {
    this.searchForm = new FormGroup({
      name: new FormControl(null)
    });
  }

  ngOnInit() {

    this.postsService.getPostsObs().subscribe(postsFromDb => {
      this.posts = postsFromDb;
    });

    this.searchForm.get('name').valueChanges
      .subscribe(value => {
        //TODO filter value
        this.postsService.getPosts();
      });
  }

  search() {
    this.postsService.getPosts();
  }
}
