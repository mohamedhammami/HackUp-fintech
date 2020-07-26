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
  get montant() {
    return this.contactForm.get('montant');
}
get RIB1() {
  return this.contactForm.get('RIB1');
}
get RIB2() {
  return this.contactForm.get('RIB2');

}
  contactForm: FormGroup;
  createFormGroup() {
    return new FormGroup({
      montant: new FormControl('', Validators.required),
      RIB1: new FormControl('', Validators.required),
      RIB2: new FormControl('', [Validators.required])
    });
  }
  verser(RIB: number, montant: number) {
    this.comptebancaireService.verser(RIB, montant).subscribe(data => { console.log('account updated successfully.'); });
  }
  retirer(RIB: number, montant: number) {
    this.comptebancaireService.retirer(RIB, montant).subscribe(data => { console.log('account updated successfully.'); });
  }
  transferer(RIB1: number, RIB2: number, montant: number) {
    this.comptebancaireService.transferer(RIB1, RIB2, montant).subscribe(data => alert("Product created successfully.");
  });
  }
  getaccount(RIB: number) {
    this.comptebancaireService.getaccount(RIB).subscribe(data => { console.log('account read successfully.'); });
  }


  ngOnInit() {
  }}
