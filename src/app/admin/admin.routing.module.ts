import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionGuard, IPermissionGuardModel } from 'angular2-permission';

import * as Pages from './pages'
import { AdminComponent } from './admin.component'

const adminRoutes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'auth', component: Pages.AuthPageComponent,
      canActivate: [PermissionGuard], data: {
      Permission: {
        Except: ['admin', 'member', 'superadmin'],
        RedirectTo: '/admin/dashboard'
      } as IPermissionGuardModel
    }},
    { path: 'dashboard', component: Pages.DashboardPageComponent, children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full'},
      { path: 'posts', component: Pages.PostsPageComponent },
      { path: 'users', component: Pages.UsersPageComponent },
      { path: 'profile', component: Pages.ProfilePageComponent },

    ], canActivate: [PermissionGuard], data: {
      Permission: {
        Only: ['admin', 'member', 'superadmin'],
        RedirectTo: '/admin/auth'
      } as IPermissionGuardModel
    }},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
