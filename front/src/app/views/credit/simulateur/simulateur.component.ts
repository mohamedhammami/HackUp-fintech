import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss']
})
export class SimulateurComponent implements OnInit {

  constructor(private router: Router) { this.contactForm = this.createFormGroup(); }
  get montant() {
    return this.contactForm.get('montant');
}
get duree() {
  return this.contactForm.get('duree');
}
  contactForm: FormGroup;
  createFormGroup() {
    return new FormGroup({
      montant: new FormControl('', Validators.required),
      duree: new FormControl('', [Validators.required])
    });
  }
  mensualite(montant: number , duree: number) {
    return ((montant * 1.209) / duree).toFixed(2);

  }


  ngOnInit() {
  }}
