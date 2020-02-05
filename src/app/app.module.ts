import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from "ngx-spinner";
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PageLandingComponent } from './component/page-landing/page-landing.component';
import { PageShowHTMLComponent } from './component/page-show-html/page-show-html.component';

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';

import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { TeamComponent } from './component/team/team.component';
import { ServicesComponent } from './component/services/services.component';
import { ClientsComponent } from './component/clients/clients.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { FAQComponent } from './component/faq/faq.component';
import { CallToActionComponent } from './component/call-to-action/call-to-action.component';
import { FeaturesComponent } from './component/features/features.component';
import { ClientsSectionComponent } from './component/clients-section/clients-section.component';

import { WebsiteModule } from './module/website/website.module';

import { DataRetrievalService } from './service/data-retrieval/data-retrieval.service';
import { CounterComponent } from './component/counter/counter.component';
import { WhyUsComponent } from './component/why-us/why-us.component';
import { LoginComponent } from './component/admin/login/login.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { BlogPostComponent } from './component/blog-post/blog-post.component';
import { LogoutComponent } from './component/admin/logout/logout.component';
import { ManageWebsiteComponent } from './component/admin/manage-website/manage-website.component';
import { ViewLogsComponent } from './component/admin/view-logs/view-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageLandingComponent,
    PageShowHTMLComponent,
    PortfolioComponent,
    TeamComponent,
    NavBarComponent,
    FooterComponent,
    ServicesComponent,
    ClientsComponent,
    PricingComponent,
    FAQComponent,
    CallToActionComponent,
    FeaturesComponent,
    ClientsSectionComponent,
    CounterComponent,
    WhyUsComponent,
    LoginComponent,
    DashboardComponent,
    BlogPostComponent,
    LogoutComponent,
    ManageWebsiteComponent,
    ViewLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset // <-- tell LazyLoadImage that you want to use IntersectionObserver
    }),
    WebsiteModule
  ],
  providers: [
    DataRetrievalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
