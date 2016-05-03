import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { ClientDetailComponent }  from './client-detail.component';
import { Application } from '../../data/entities/application.ts';
import { ApplicationService } from '../../data/data';
import { Scroll } from '../../shared/shared';

@Component({
    selector: 'itrd-works',
    templateUrl: 'app/sections/works/works.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class WorksComponent implements OnInit {
    applications: Application[];
    title: string = 'Our Works';
    isHidden: boolean = false;

    constructor(
        private _applicationService: ApplicationService,
        private _scroll: Scroll
    ) { }

    onScroll(event) {
        if (scrollY > 1 && this.isHidden === false) {
            this.isHidden = true;
        }
        if (scrollY < 1 && this.isHidden === true) {
            this.isHidden = false;
        }
    }

    getApplications() {
        this._applicationService.getApplictions().then(applications => this.applications = applications);
    }

    gotoWorks() {
        this._scroll.toElement(740, 500);
    }

    ngOnInit() {
        this.getApplications();
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */