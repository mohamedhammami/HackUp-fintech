import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boligatoire',
  templateUrl: './boligatoire.component.html',
  styleUrls: ['./boligatoire.component.scss']
})
export class BoligatoireComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    alert("Votre demande à été effectuer avec succés.");

  }
}
