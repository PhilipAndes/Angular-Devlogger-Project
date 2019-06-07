import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('12/27/2018 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/28/2018 9:33:15')},
      {id: '3', text: 'Added logs Component', date: new Date('12/29/2018 12:00:08')},
    ]
   }

   getLogs() {
     return this.logs;
   }
}
