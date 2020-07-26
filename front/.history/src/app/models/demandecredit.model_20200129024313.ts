import { UserModel } from "./user.model";
export interface DemandeCredit {
     Id: number;
     montant: string;
     raison: string;
     user: UserModel;
     typeCredit: string;
}
