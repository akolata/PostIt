import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPostComponent} from './add-post/add-post.component';

const postsRoutes: Routes = [
  {
    path: 'posts/add',
    component: AddPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
