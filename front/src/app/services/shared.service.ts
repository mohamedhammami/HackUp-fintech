import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private profileSource = new BehaviorSubject('default message');

  profile = this.profileSource.asObservable();
  constructor() { }

  changeMessage(profile) {
    this.profileSource.next(profile);
  }

}