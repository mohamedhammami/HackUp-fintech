import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {
  myName = "ddd";
  constructor(private authService:AuthService) { }

  ngOnInit() {
    if(this.authService.getUser()!=null){
      this.myName = this.authService.getUser().firstname;
    }
  }

}
