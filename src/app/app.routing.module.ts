import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from './home/home.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';

@NgModule({
  imports: [
    HomeModule, // must be on top
    PageNotFoundModule, // must be just over forRoot method call !
    RouterModule.forRoot(<Routes>[])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
