import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  generateUniqueId() {
    const fullUuid = uuidv4();
    return fullUuid.split('-').shift();
  }
}
