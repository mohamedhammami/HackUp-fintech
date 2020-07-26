import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CandidateService } from "../../../services/candidates.service";
import { GenericService } from "../../../services/generic.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"]
})
export class ProductCreateComponent implements OnInit {
  generic: GenericEntityModel;
  product: GenericEntityModel = {
    name: "",
    valueList: []
  };

  score = 0;
  constructor(
    private route: ActivatedRoute,
    private genericService: GenericService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadGenericEntity(param.id);
      }
    });
  }

  async loadGenericEntity(id) {
    try {
      const result: any = await this.genericService.getGeneric(id);
      console.log({ result });
      if (result) {
        this.generic = result;
        this.generic.valueList.map(value => {
          this.product.valueList.push(value);
          this.product.name=this.generic.name;
        });
      }
    } catch (error) {
      console.log({ error });
    }
  }

  onSubmit() {
    console.log(this.product);
    const result = this.genericService.createproduit(this.product).subscribe(data=>{
      alert("Product created successfully.");
    });
  }

}

export interface GenericValueModel {
  id: 1;
  createdAt: string;
  updatedAt: string;
  value: string;
  name: string;
  type: "int" | "string";
}

export interface GenericEntityModel {
  id?: null;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  valueList: Array<GenericValueModel>;
}
