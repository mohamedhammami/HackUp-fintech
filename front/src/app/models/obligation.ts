import { AccounttitreModel } from "./accounttitre";

export interface ObligationModel {
 id: number;
 prixachat: number;
 coupon: number;
 societeemetrice: string;
 dateDebut: string;
 dateFin: string;
 comptetitre:AccounttitreModel
}
