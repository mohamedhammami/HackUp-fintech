import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'app/services/account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private router: Router, private comptebancaireService: AccountService) { this.contactForm = this.createFormGroup();
  }
  ngOnInit() {
  }

}
