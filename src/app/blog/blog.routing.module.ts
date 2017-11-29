import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from './pages'
import { BlogComponent } from './blog.component'

const blogRoutes: Routes = [
  { path: '', component: BlogComponent, children: [
    { path: '', component: Pages.PostsPageComponent },
    { path: 'about', component: Pages.AboutPageComponent },
    { path: 'contact', component: Pages.ContactPageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(blogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
