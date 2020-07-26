import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Observable} from 'rxjs';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
