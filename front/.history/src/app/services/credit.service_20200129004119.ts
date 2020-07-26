import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CandidateModel, ElectoralModal } from "../models/candidate.model";
import { DemandeCredit } from "../models/demandecredit.model";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor() { }
}
