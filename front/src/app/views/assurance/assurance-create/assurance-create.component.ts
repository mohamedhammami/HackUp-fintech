import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { AssuranceService } from "../../../services/assurance.service";

import { assurancImmobilierModel } from "../../../models/assuranceImmobilier.model";
@Component({
  selector: 'app-assurance-create',
  templateUrl: './assurance-create.component.html',
  styleUrls: ['./assurance-create.component.scss']
})
export class AssuranceCreateComponent implements OnInit {
  Assuranceimmo: assurancImmobilierModel={
    idassurance:null,
    housevalue: "",
    adress: "" ,
    prime: null,
    label: null,
    dtype:"",

  };
  constructor(
    private authService: AuthService,
    private AssuranceServ: AssuranceService,
  ) {}

  ngOnInit() {

 
  }
  onSubmit() {
    console.log(this.Assuranceimmo);
    const result = this.AssuranceServ.createAssuranceImmobilier(this.Assuranceimmo).subscribe(data=>{
      alert("Demande Assurance Immobilier créer.");
    });

}
}
