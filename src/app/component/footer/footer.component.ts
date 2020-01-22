import { Component, OnInit } from '@angular/core';
import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';
import { SocialLinks, Footer, WebsiteContact } from 'src/app/module/website/website.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  socialLinks : SocialLinks = new SocialLinks();
  footer : Footer = new Footer();
  websiteContact : WebsiteContact = new WebsiteContact();
  error = "";

  userMessage : Message = new Message();
  userEmail : string = "";

  constructor(private dataRetrivalService : DataRetrievalService) { }

  ngOnInit() {
    this.dataRetrivalService.getFooterData().subscribe((data)=>{
      this.footer = data;
      this.socialLinks = this.footer.socialLinks;
      this.websiteContact = this.footer.contact;
    },(error) =>{
      this.error = error;
      console.log(error);
    });
  }

  subscribeNewsletter() {
    function validateEmail(email:string) : boolean {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if( validateEmail(this.userEmail) ) {
      console.log("Newsletter Subscribed.");
      console.log(this.userEmail);
      alert("Newsletter Subscribed.");
    } else {
      console.log("Invalid Message ");
    }
  }

  submitMessage() {
    if( this.userMessage.isValid() ) {
      console.log("Submit Message: ");
      console.log(this.userMessage);
      alert("Message Submitted.");
    } else {
      console.log("Invalid Message ");
    }
  }
}


class Message {
  name : string = "";
  emailId : string = "";
  subject : string = "";
  content : string = "";

  constructor() {
  }

  isValid() : boolean {
    function validateEmail(email:string) : boolean {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    if(this.name.length < 4 || this.subject.length < 4 || !validateEmail(this.emailId) || this.content.length < 50) {
      return false;
    }

    return true;
  }
}