import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AssuranceService } from "../../../services/assurance.service";
import { assurancImmobilierModel } from "../../../models/assuranceImmobilier.model";
import { CloseScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-assurance-show',
  templateUrl: './assurance-show.component.html',
  styleUrls: ['./assurance-show.component.scss']
})

export class AssuranceShowComponent implements OnInit {
  assuranceimm:assurancImmobilierModel
  constructor(
    private route: ActivatedRoute,
    private assuranceService: AssuranceService
  ) {}
  ngOnInit() {

    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadElectoral(param.id);
        console.log(this.loadElectoral(param.id))
      }
      
      
        
      
     
    });
  }


  async loadElectoral(id) {
    try {
      const result: any = await this.assuranceService.getAssuranceImmobilier1(id);
      if (result) {
        this.assuranceimm = result;
        
        console.log(this.assuranceimm)
      }
    } catch (error) {
      console.log({ error });
    }
  }

}
