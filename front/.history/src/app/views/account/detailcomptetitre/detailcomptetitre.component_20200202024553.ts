import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
import { AccounttitreModel } from "app/models/accounttitre";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detailcomptetitre',
  templateUrl: './detailcomptetitre.component.html',
  styleUrls: ['./detailcomptetitre.component.scss']
})
export class DetailcomptetitreComponent implements OnInit {

  detaildemande: AccounttitreModel;

  constructor(
    private route: ActivatedRoute,
    private compteService: AccountService,
  ) {}
  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.rib) {
        this.loadCompte(param.rib);
      }
    });
  }

  async loadCompte(rib) {
    try {
      const result: any = await this.compteService.getDetailcompte(rib);
      if (result) {
        this.detaildemande = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }

}
