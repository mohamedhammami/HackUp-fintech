import { UserModel } from "./user.model";
export interface DemandeCredit {
     id: number;
     montant: string;
     raison: string;
     user: UserModel;
     typeCredit: string;
     etat:string;
}
