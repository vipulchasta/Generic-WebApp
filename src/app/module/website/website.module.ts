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
  title : string;
  htmlPages : Map<string,WebsitePage>;
  navbar : NavBar;
  footer : Footer;

  constructor() {
    this.title = "WebApp";
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
  title : string;
  description : string;
  newsletterDescription : string;
  newsletterREST : string = null;
  sendMessageDescription : string;
  sendMessageREST : string = null;
  copyrightDisclaimer : string;
  creditsDisclaimer : string;

  contact : WebsiteContact;
  socialLinks : SocialLinks;
  navigationLinks : Array<object>;

  constructor() {
    this.title = "BullTronics";
    this.description = "Generic WebApp By Vipul Chasta";
    this.newsletterDescription = "Subscribe to our newsletter for getting our latest updates.";
	  this.sendMessageDescription = "Have any queries..? leave us a message we will get back to you soon.";
    this.contact = new WebsiteContact();
    this.socialLinks = new SocialLinks();
    this.navigationLinks = [];
    this.copyrightDisclaimer = "&copy; Copyright <strong>BullTronics</strong>. All Rights Reserved";
    this.creditsDisclaimer = "Template Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>";
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