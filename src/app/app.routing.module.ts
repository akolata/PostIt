import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from './home/home.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {AuthorizationModule} from './authorization/authorization.module';
import {PostsModule} from './posts/posts.module';

@NgModule({
  imports: [
    HomeModule, // must be on top
    AuthorizationModule,
    PostsModule,
    PageNotFoundModule, // must be just over forRoot method call !
    RouterModule.forRoot(<Routes>[])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
