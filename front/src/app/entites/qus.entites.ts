import {OptionsEntites} from './options.entites';

export class QusEntites {
    public id: number;
    public titre_question: String;
    public options?: Array<OptionsEntites> = [];
}