import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import {PostsRoutingModule} from './posts.routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PostsRoutingModule
  ],
  declarations: [AddPostComponent]
})
export class PostsModule { }
