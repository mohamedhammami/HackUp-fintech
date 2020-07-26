import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'error.popup',
    templateUrl: './error.popup.component.html',
    styleUrls: ['./error.popup.component.scss']
})
export class PopUpComponent implements OnInit {

    message:string;

    constructor(
            @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit() {
       this.message =   this.data.dataKey; 
       console.log(this.data);
    }

}
