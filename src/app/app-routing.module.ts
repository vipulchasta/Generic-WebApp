import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLandingComponent } from './component/page-landing/page-landing.component'
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component'
import { PageShowHTMLComponent } from './component/page-show-html/page-show-html.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { LoginComponent } from './component/admin/login/login.component';
import { LogoutComponent } from './component/admin/logout/logout.component';
import { ManageWebsiteComponent } from './component/admin/manage-website/manage-website.component';
import { ViewLogsComponent } from './component/admin/view-logs/view-logs.component';

const routes: Routes = [
  { path: '', component: PageLandingComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/manage', component: ManageWebsiteComponent },
  { path: 'admin/logs', component: ViewLogsComponent },
  { path: ':pageId', component: PageShowHTMLComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }