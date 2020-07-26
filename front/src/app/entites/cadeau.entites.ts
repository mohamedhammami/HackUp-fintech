import { OptionsEntites } from "./options.entites";
import { UserForm } from "./user.entites";

export class CadeauEntity {
    public id: number;
    public dateCreation: Date;
    public prix: number;
    public user: UserForm;
    public description: string;
    public nom: string;
    public image: string;
    public promotion: boolean;

}