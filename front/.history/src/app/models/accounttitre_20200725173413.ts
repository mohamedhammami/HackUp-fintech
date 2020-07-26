import { UserModel } from "./user.model";

export interface AccounttitreModel {
  rib: number;
  montant: number;
  ferme: boolean;
  user1: UserModel;
  dateouverture: string;
}
