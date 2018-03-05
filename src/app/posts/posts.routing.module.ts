import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPostComponent} from './add-post/add-post.component';
import {PostsListComponent} from './posts-list/posts-list.component';

const postsRoutes: Routes = [
  {
    path: 'posts/add',
    component: AddPostComponent
  },
  {
    path: 'posts/all',
    component: PostsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
