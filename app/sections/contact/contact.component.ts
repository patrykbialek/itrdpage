import { Component, EventEmitter, Input, OnInit, Output } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component({
    selector: 'itrd-contact',
    templateUrl: 'app/sections/contact/contact.component.html'
})
export class ContactComponent implements OnInit {

    constructor(
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
  
    }

    goBack() {
        this._router.navigate(['Start']);
    }
}