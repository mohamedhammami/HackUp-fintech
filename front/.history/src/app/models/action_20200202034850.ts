import { AccounttitreModel } from "./accounttitre";

export interface ActionModel {
    id: number;
    prixachat: number;
    quantite: number;
    societeemetrice: string;
    dateAchat: string;
    comptetitre: AccounttitreModel;
   }
