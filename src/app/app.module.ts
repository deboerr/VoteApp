import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';
import { RolesComponent } from './roles/roles.component';
import {RoleService } from './roles/role.service';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],  
  providers: [
    UserService,
    RoleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
