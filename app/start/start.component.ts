import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

//import { START_PAGE } from '../app/app.component'

@Component({
    selector: 'itrd-start',
    templateUrl: 'app/start/start.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class StartComponent implements OnInit {
    startPage: boolean = false;
    title: string = 'Medicover Group IT Research & Development'
    isHidden: boolean = false;
    
    ngOnInit() {
        this.startPage = true;
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