import { UserModel } from "./user.model";

export interface AccountModel {
  Rib: number;
  montant: number;
  ferme: boolean;
  Client: UserModel;}
