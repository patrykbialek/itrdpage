import { Component, EventEmitter, Input, OnInit, Output } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

import { Scroll } from '../../shared/shared';  

@Component({
    selector: 'itrd-start',
    templateUrl: 'app/sections/start/start.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class StartComponent implements OnInit {
    startPage: boolean = false;
    title: string = 'Medicover Group IT Research & Development'
    isHidden: boolean = false; 
    
    constructor(private _router: Router, private _scroll: Scroll) {
    }
    
    ngOnInit() {
        this.startPage = true;
        this._scroll.toElement();
    }

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