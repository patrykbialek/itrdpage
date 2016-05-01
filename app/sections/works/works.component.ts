import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { ClientDetailComponent }  from './client-detail.component';
import { Application } from '../../data/entities/application.ts';
import { ApplicationService } from '../../data/data';

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
        private _applicationService: ApplicationService
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
        var duration = 600;
        var element = document.body;
        var to = 780;
        scrollTo(element, to, duration);

        function scrollTo(element, to, duration) {

            if (duration < 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 15;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 15);
            }, 15);

        }
    }

    ngOnInit() {
        this.getApplications();
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */