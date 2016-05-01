import { Injectable } from 'angular2/core';
import { Component, OnInit } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, OnActivate, ComponentInstruction } from 'angular2/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material/all';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { StartComponent }   from './start/start';
import { StoryComponent }   from './sections/story/story';
import { ClientsComponent } from './sections/clients/clients';
import { TeamComponent, TeamDetailComponent }    from './sections/team/team';
import { WorksComponent }   from './sections/works/works';
import { ContactComponent } from './sections/contact/contact';

import { CONFIG }        from './shared/shared';
import { EntityService } from './blocks/blocks';
import { ApplicationService } from './data/data';
import { ClientService } from './data/data';
import { PersonService } from './data/data';

@Component({
    selector: 'itrd-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        EntityService,
        ApplicationService,
        ClientService,
        PersonService
    ],
    pipes: [TranslatePipe]
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
export class AppComponent implements OnInit, OnActivate {
    startPage: boolean = false;
    isStart: boolean = false;
    isStory: boolean = false;
    isClients: boolean = false;
    isTeam: boolean = false;
    isWorks: boolean = false;

    top: boolean = true;
    isHidden: boolean = false;
    hideTitle: boolean = false;

    hiringButtonHidden: boolean = true;

    log: string = '';

    constructor(
        public translate: TranslateService,
        public _router: Router
    ) {
        // use navigator lang if available
        let userLang = navigator.language.split('-')[0];
        userLang = /(pl|en)/gi.test(userLang) ? userLang : 'en';

        translate.use(userLang);
    }

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        this.log = next.params['name'];

        console.log(this.log);
    }

    changeLanguage(currentLang) {
        let userLang = currentLang === 'pl' ? 'en' : 'pl';
        this.translate.use(userLang);
    }

    gotoStart() {
        this.startPage = true;
        this._clearBackgroundColors();
        this.isStart = true;
        this.hideTitle = true;
    }
    gotoStory() {
        this.startPage = false;
        this._clearBackgroundColors();
        this.isStory = true;
    }
    gotoClients() {
        this.startPage = false;
        this._clearBackgroundColors();
        this.isClients = true;
    }
    gotoTeam() {
        this.startPage = false;
        this._clearBackgroundColors();
        this.isTeam = true;
    }
    gotoWorks() {
        this.startPage = false;
        this._clearBackgroundColors();
        this.isWorks = true;
    }

    _clearBackgroundColors() {
        this.isStart = false;
        this.isStory = false;
        this.isClients = false;
        this.isTeam = false;
        this.isWorks = false;
        this.top = false;
        this.hideTitle = false;
        scroll(0, 0);
    }

    ngOnInit() {
        let currentRoute = this._router.lastNavigationAttempt;
        this.top = false;

        if (currentRoute === '') {
            this.startPage = true;
            this.hideTitle = true;
        }
        
        this.hiringButtonHidden = true;
    }
    
    showHiringButton() {
        this.hiringButtonHidden = !this.hiringButtonHidden;
    }

    onScroll(event) {
        if (this.isStart && scrollY > 20 && this.top === false) {
            this.hideTitle = false;
        }
        if (this.isStart && scrollY < 20 && this.top === false) {
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
        //console.log(scrollY);
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */