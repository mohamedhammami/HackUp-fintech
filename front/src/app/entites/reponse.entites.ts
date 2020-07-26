import { OptionsEntites } from "./options.entites";
import { UserForm } from "./user.entites";

export class ReponseEntity {
    public id: number;
    public dateCreation: Date;
    public option: OptionsEntites
    public user: UserForm
}