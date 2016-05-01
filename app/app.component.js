System.register(['angular2/core', 'angular2/router', 'angular2/http', 'ng2-translate/ng2-translate', './start/start', './sections/story/story', './sections/clients/clients', './sections/team/team', './sections/works/works', './sections/contact/contact', './blocks/blocks', './data/data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, router_1, http_1, ng2_translate_1, start_1, story_1, clients_1, team_1, works_1, contact_1, blocks_1, data_1, data_2, data_3;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (start_1_1) {
                start_1 = start_1_1;
            },
            function (story_1_1) {
                story_1 = story_1_1;
            },
            function (clients_1_1) {
                clients_1 = clients_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            },
            function (works_1_1) {
                works_1 = works_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
                data_2 = data_1_1;
                data_3 = data_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(translate, _router) {
                    this.translate = translate;
                    this._router = _router;
                    this.startPage = false;
                    this.isStart = false;
                    this.isStory = false;
                    this.isClients = false;
                    this.isTeam = false;
                    this.isWorks = false;
                    this.top = true;
                    this.isHidden = false;
                    this.hideTitle = false;
                    this.hiringButtonHidden = true;
                    this.log = '';
                    // use navigator lang if available
                    var userLang = navigator.language.split('-')[0];
                    userLang = /(pl|en)/gi.test(userLang) ? userLang : 'en';
                    translate.use(userLang);
                }
                AppComponent.prototype.routerOnActivate = function (next, prev) {
                    this.log = next.params['name'];
                    console.log(this.log);
                };
                AppComponent.prototype.changeLanguage = function (currentLang) {
                    var userLang = currentLang === 'pl' ? 'en' : 'pl';
                    this.translate.use(userLang);
                };
                AppComponent.prototype.gotoStart = function () {
                    this.startPage = true;
                    this._clearBackgroundColors();
                    this.isStart = true;
                    this.hideTitle = true;
                };
                AppComponent.prototype.gotoStory = function () {
                    this.startPage = false;
                    this._clearBackgroundColors();
                    this.isStory = true;
                };
                AppComponent.prototype.gotoClients = function () {
                    this.startPage = false;
                    this._clearBackgroundColors();
                    this.isClients = true;
                };
                AppComponent.prototype.gotoTeam = function () {
                    this.startPage = false;
                    this._clearBackgroundColors();
                    this.isTeam = true;
                };
                AppComponent.prototype.gotoWorks = function () {
                    this.startPage = false;
                    this._clearBackgroundColors();
                    this.isWorks = true;
                };
                AppComponent.prototype._clearBackgroundColors = function () {
                    this.isStart = false;
                    this.isStory = false;
                    this.isClients = false;
                    this.isTeam = false;
                    this.isWorks = false;
                    this.top = false;
                    this.hideTitle = false;
                    scroll(0, 0);
                };
                AppComponent.prototype.ngOnInit = function () {
                    var currentRoute = this._router.lastNavigationAttempt;
                    this.top = false;
                    if (currentRoute === '') {
                        this.startPage = true;
                        this.hideTitle = true;
                    }
                    this.hiringButtonHidden = true;
                };
                AppComponent.prototype.showHiringButton = function () {
                    this.hiringButtonHidden = !this.hiringButtonHidden;
                };
                AppComponent.prototype.onScroll = function (event) {
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
                };
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'itrd-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            blocks_1.EntityService,
                            data_1.ApplicationService,
                            data_2.ClientService,
                            data_3.PersonService
                        ],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_1.StartComponent, useAsDefault: true },
                        { path: 'story', name: 'Story', component: story_1.StoryComponent },
                        { path: 'clients', name: 'Clients', component: clients_1.ClientsComponent },
                        { path: 'team', name: 'Team', component: team_1.TeamComponent },
                        { path: 'works', name: 'Works', component: works_1.WorksComponent },
                        { path: 'team/:id', name: 'TeamDetail', component: team_1.TeamDetailComponent },
                        { path: 'contact', name: 'Contact', component: contact_1.ContactComponent }
                    ]),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [ng2_translate_1.TranslateService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=app.component.js.map