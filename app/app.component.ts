import { Component, Injectable, Input, OnInit } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material/all';
import { HTTP_PROVIDERS } from 'angular2/http';

import { FooterComponent, HeaderNavComponent } from './layout/layout';
import { ClientsComponent, ContactComponent, StartComponent, StoryComponent,
    TeamComponent, TeamDetailComponent, WorksComponent } from './sections/sections';

import { CONFIG, Scroll } from './shared/shared';
import { EntityService } from './blocks/blocks';
import { ApplicationService, ClientService, PersonService } from './data/data';

@Component({
    selector: 'itrd-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, FooterComponent, HeaderNavComponent],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        ApplicationService,
        ClientService,
        EntityService,
        PersonService,
        Scroll
    ]
})

@RouteConfig([
    { path: '/', name: 'Start', component: StartComponent, useAsDefault: true },

    { path: 'story', name: 'Story', component: StoryComponent },
    { path: 'clients', name: 'Clients', component: ClientsComponent },
    { path: 'team', name: 'Team', component: TeamComponent },
    { path: 'works', name: 'Works', component: WorksComponent },
    { path: 'team/:id', name: 'TeamDetail', component: TeamDetailComponent },

    { path: 'contact', name: 'Contact', component: ContactComponent }
])

@Injectable()
export class AppComponent implements OnInit {
    startPage: boolean = false;
    top: boolean = true;
    isHidden: boolean = false;
    hideTitle: boolean = false;

    log: string = '';
    constructor(
        public _router: Router
    ) {
    }

    ngOnInit() {

    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */