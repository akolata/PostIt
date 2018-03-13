import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile.routing.module';
import {ProfileBaseComponent, ProfilePageComponent, UserPostsService} from './index';
import {PostsModule} from '../posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PostsModule

  ],
  declarations: [ProfilePageComponent, ProfileBaseComponent],
  providers: [
    UserPostsService
  ]
})
export class ProfileModule {
}
