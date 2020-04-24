import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';

@Component({
    selector: 'app-test',
    templateUrl: "./test.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements OnInit {
    data;
    constructor() { }

    ngOnInit() {
        this.data = [{ 'id': '1', 'nom': 'formation angular' },
        { 'id': '2', 'nom': 'formation php' }]

    }

}
