import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
import { AccounttitreModel } from "app/models/accounttitre";
import { ActivatedRoute } from "@angular/router";
import { ObligationModel } from "app/models/obligation";

@Component({
  selector: 'app-detailcomptetitre',
  templateUrl: './detailcomptetitre.component.html',
  styleUrls: ['./detailcomptetitre.component.scss']
})
export class DetailcomptetitreComponent implements OnInit {

  detaildemande: AccounttitreModel;
  obligation: Array<ObligationModel> = [];


  constructor(
    private route: ActivatedRoute,
    private compteService: AccountService,
  ) {}
  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadCompte(param.id);
      }
    });
  }

  async loadCompte(id) {
    try {
      const result: any = await this.compteService.getDetailcompte(id);
      if (result) {
        this.detaildemande = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }


  async loadObligation() {
    try {
      const result: any = await  this.compteService.getobligation();
      if (result) {
        this.obligation = result;
        

        console.log(this.obligation)
      }
    } catch (error) {}
  }

}
