import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'admin-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  adminDetails = {adminName:'', adminPassword:''};

  constructor(private http:HttpClient) { }

  updateAdminPassword() {
    // alert(this.adminDetails.adminName+' *-* '+this.adminDetails.adminPassword);

    const headers = new HttpHeaders().set('Authorization', 'mu-auth-token').set('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/updateAdminPwd', JSON.stringify(this.adminDetails), {headers:headers})
      .subscribe(data => {
        alert(data.msg);
      },
      err => {
        console.log("Error occured");
      });
  }
  ngOnInit() {
  }

}
