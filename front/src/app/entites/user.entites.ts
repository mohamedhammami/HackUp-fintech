import { ReponseEntity } from "./reponse.entites";

export class UserForm {
    id: number;
    nom: string;
    prenom: string;
    cin: string;
    email: string;
    tel: number;
    birth_date: Date;
    //imageuser:  any;
    gender: string;
    password: string;
    reponse: Array<ReponseEntity>=[];
    les_snd_jawibt_alihom?: Array<any> = [];

    constructor() {
    }

    public static isNull(user: UserForm): boolean {

        return user.nom === null &&
            user.id === null &&
            user.prenom === null &&
            user.cin === null &&
            user.email === null &&
            user.tel === null &&
            user.birth_date === null &&
            user.gender === null &&
            user.birth_date === null &&
            user.password === null;
    }
}