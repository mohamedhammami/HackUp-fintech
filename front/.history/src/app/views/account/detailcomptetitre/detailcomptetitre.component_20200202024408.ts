import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { AccountService } from "../../../services/account.service";
import { UserModel } from "../../../models/user.model";
import { AccounttitreModel } from "app/models/accounttitre";
@Component({
  selector: 'app-detailcomptetitre',
  templateUrl: './detailcomptetitre.component.html',
  styleUrls: ['./detailcomptetitre.component.scss']
})
export class DetailcomptetitreComponent implements OnInit {

  detaildemande: AccounttitreModel;

  constructor(
    private route: ActivatedRoute,
    private creditService: AccountService,
  ) {}
  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadElectoral(param.id);
      }
    });
  }

  async loadElectoral(id) {
    try {
      const result: any = await this.creditService.getDetailcompte(id);
      if (result) {
        this.detaildemande = result;
      }
    } catch (error) {
      console.log({ error });
    }
  }

}
