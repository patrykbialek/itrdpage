import { Component, Injectable, Input, OnInit, OnChanges } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, Location } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'itrd-header-nav',
    templateUrl: 'app/layout/header-nav.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class HeaderNavComponent implements OnInit {
    hideTitle: boolean = false;
    hidet: boolean = false;
    isHidden: boolean = false;
    isStart: boolean = true;
    startPage: boolean = false;
    top: boolean = true;

    constructor(
        public translate: TranslateService,
        public _router: Router,
        private _location: Location
    ) {
        // use navigator lang if available
        // let userLang = navigator.language.split('-')[0];
        // userLang = /(pl|en)/gi.test(userLang) ? userLang : 'en';

        // translate.use(userLang);
    }

    getCurrentRoute(path) {
        let isCurrent = this._router.isRouteActive(this._router.generate([path]));
        this.checkStartRoute();
        return isCurrent;
    }

    changeLanguage(currentLang) {
        let userLang = currentLang === 'pl' ? 'en' : 'pl';
        this.translate.use(userLang);
    }

    ngOnInit() {
        this.top = false;
        this.checkStartRoute();
    }

    onScroll(event) {
        if (this.isStart && scrollY > 20 && this.top === false && this.startPage === true) {
            this.hideTitle = false;
        }
        if (this.isStart && scrollY < 20 && this.top === false && this.startPage === true) {
            this.hideTitle = true;
        }
        if (scrollY >= 205 && this.top === false) {
            this.top = true;
        }
        if (scrollY <= 205 && this.top === true) {
            this.top = false;
        }

        if (scrollY > 1 && this.isHidden === false) {
            this.isHidden = true;
        }
        if (scrollY < 1 && this.isHidden === true) {
            this.isHidden = false;
        }
        //console.log(this.hideTitle);
    }

    checkStartRoute() {
        var startRoute = this._location.path() === '';
        this.startPage = startRoute;
        if (scrollY <= 1) {
            this.hideTitle = startRoute;
        }
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */