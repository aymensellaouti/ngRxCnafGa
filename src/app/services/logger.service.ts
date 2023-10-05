import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logger(something: any) {
    console.log('From Logger Service :');
    console.log(something);
  }
}
