import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLandingComponent } from './component/page-landing/page-landing.component'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component'
import { PageShowHTMLComponent } from './component/page-show-html/page-show-html.component';

const routes: Routes = [
  { path: '', component: PageLandingComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: ':pageId', component: PageShowHTMLComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }