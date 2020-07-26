import {UserForm} from './user.entites';
import {QusEntites} from './qus.entites';

export class SndEntites {

    public titre: string;
    public descriptions: string;
    public dateCreation: Date;
    public photosnd: string;
    public id: number;
    public accepted: Boolean;
    public owner: UserForm;
    public questions?: Array<QusEntites> = [];
    public users_jawbou_3aliya: any;
    public categorie: any;


}