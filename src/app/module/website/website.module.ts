import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class WebsiteModule {
}

export class WebSiteData {
  htmlPages : Map<string,WebsitePage>;
  navbar : NavBar;
  footer : Footer;

  constructor() {
    this.htmlPages = new Map<string,WebsitePage>();
    this.navbar = new NavBar();
    this.footer = new Footer();
  }
}

export class WebsitePageMetaTags {
  description : string;
  robots : string;
  keywords : Array<string>;
}

export class WebsitePageSegment {
  component : string;
  data : any;
}

export class WebsitePage {
  title : string;
  meta : WebsitePageMetaTags;
  lastUpdateTime : string;
  body : Array<WebsitePageSegment>;
}

export class NavBar {
  navigationLinks : Array<object>;
  socialLinks : SocialLinks;

  constructor() {
    this.navigationLinks = null;
    this.socialLinks = new SocialLinks();
  }
}

export class Footer {
  contact : WebsiteContact;
  socialLinks : SocialLinks;
  navigationLinks : Array<object>;

  constructor() {
    this.contact = new WebsiteContact();
    this.socialLinks = new SocialLinks();
    this.navigationLinks = [];
  }
}

export class SocialLinks {
  facebook : string;
  linkedin : string;
  twitter : string;
  instagram : string;
  github : string;
  hackerrank : string;
  whatsapp : string;

  constructor() {
    this.facebook = null;
    this.linkedin = null;
    this.twitter = null;
    this.instagram = null;
    this.github = null;
    this.hackerrank = null;
    this.whatsapp = null;
  }
}

export class Address {
  line1 : string;
  line2 : string;
  pincode : number;
  country : string;

  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.pincode = null;
    this.country = "";
  }
}

export class WebsiteContact {

  address : Address;
  contactNo1 : string;
  contactNo2 : string;
  email : string;

  constructor() {
    this.address = null;
    this.contactNo1 = "";
    this.contactNo2 = "";
    this.email = "";
  }
}