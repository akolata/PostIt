import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthGuardService, AuthService} from './authorization';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {PostsService} from './posts';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
