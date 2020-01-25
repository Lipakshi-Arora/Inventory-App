import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  total:number;
  getBill(amt1,amt2)
  {
    this.total=amt1+amt2;
    return this.total;
  }

  constructor() { }
}
