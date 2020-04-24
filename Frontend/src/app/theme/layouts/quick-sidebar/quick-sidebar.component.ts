import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { Helpers } from '../../../helpers';

import { QuickSidebarservice } from './chat.service';





@Component({
    selector: "app-quick-sidebar",
    templateUrl: "./quick-sidebar.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class QuickSidebarComponent implements OnInit {
    message = "";
    messages: string[] = [];
    constructor(private server: QuickSidebarservice) {

    }
    ngOnInit() {
        this.server
            .getMessage()
            .subscribe((message: string) => {
                this.messages.push(name, message);
                // this.showMessage()
            })
    }

    sendMessage() {
        this.server.sendMessage(this.message);

    }
}