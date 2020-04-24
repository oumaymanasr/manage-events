import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable()
export class QuickSidebarservice {
  //  private url = 'http://192.168.1.15:3000';

    private socket;

    constructor() {

     //   this.socket = io(this.url);
    }
    public sendMessage(message) {
        this.socket.emit('new-message', (message));
    }


    public getMessage = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (message) => {
                observer.next(message);
            });
        });

    }
}







@Injectable()
export class ChatService {

    constructor() { }

}
