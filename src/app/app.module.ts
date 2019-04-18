import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from './login/login.module';
import {AppRoutingModule} from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTreeModule } from '@angular/material';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MenuTreeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    LoginModule,

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule,

    MatTreeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
