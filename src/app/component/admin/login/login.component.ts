import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/service/user-authentication/user-authentication.service';
import { DataRetrievalService } from 'src/app/service/data-retrieval/data-retrieval.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  inputUserPassword : string = "";
  error : string = "";

  constructor(private dataRetrievalService: DataRetrievalService, private spinner: NgxSpinnerService, private titleService: Title, private router : Router, private userAuthenticationService: UserAuthenticationService) {
    titleService.setTitle("Login || Admin Dashboard");

    if(userAuthenticationService.isUserLoggedIn() == true) {
      this.router.navigate(['/admin']);
      return;
    }

  }

  ngOnInit() {
  }

  userLogin() {
    this.spinner.show();

    this.dataRetrievalService.getAdminData(this.inputUserPassword).subscribe((data)=>{

      /* Condition to verify that the data received is not valid (Due to token invalid) */
      if(data == null || data["data"] == null) {
        /* Token is not valid */
        this.spinner.hide();
        return;
      }

      this.userAuthenticationService.makeUserLoggedIn(this.inputUserPassword);
      this.spinner.hide();
      this.router.navigate(['/admin']);

    },(error) =>{
      this.error = error;
      console.log(error);
    });

  }

}
