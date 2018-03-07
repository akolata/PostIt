import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsRoutingModule} from './posts.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddPostComponent, PostsListComponent, PostDetailComponent} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ],
  declarations: [
    AddPostComponent,
    PostsListComponent,
    PostDetailComponent
  ]
})
export class PostsModule {
}
