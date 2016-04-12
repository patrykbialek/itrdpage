import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { ClientDetailComponent }  from './client-detail.component';

@Component({
    selector: 'itrd-works',
    templateUrl: 'app/sections/works/works.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class WorksComponent { 
    title: string = 'Our Works';
    isHidden: boolean = false;

    onScroll(event) {
        if (scrollY > 1 && this.isHidden === false) {
            this.isHidden = true;
        }
        if (scrollY < 1 && this.isHidden === true) {
            this.isHidden = false;
        }
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */