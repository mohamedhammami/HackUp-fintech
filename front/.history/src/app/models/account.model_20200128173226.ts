import { UserModel } from "./user.model";

export interface AccountModel {
  rib: number;
  montant: number;
  ferme: boolean;
  typeCompte: string;
  user: UserModel;
  dateouverture: string;
}
