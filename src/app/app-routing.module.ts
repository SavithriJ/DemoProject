import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MenuTreeComponent} from './menu-tree/menu-tree.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sideNav', component: SideNavComponent },
  { path: 'tree', component: MenuTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
