import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location } from 'angular2/router';

@Component({
    selector: 'itrd-footer',
    templateUrl: 'app/layout/footer.component.html',
    directives: [ROUTER_DIRECTIVES],
})
export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}