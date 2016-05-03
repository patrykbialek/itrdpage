System.register(['angular2/core', 'angular2/router', 'angular2/http', './layout/layout', './sections/sections', './shared/shared', './blocks/blocks', './data/data'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, layout_1, sections_1, shared_1, blocks_1, data_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (sections_1_1) {
                sections_1 = sections_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    this.startPage = false;
                    this.top = true;
                    this.isHidden = false;
                    this.hideTitle = false;
                    this.log = '';
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'itrd-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, layout_1.FooterComponent, layout_1.HeaderNavComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS,
                            data_1.ApplicationService,
                            data_1.ClientService,
                            blocks_1.EntityService,
                            data_1.PersonService,
                            shared_1.Scroll
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: sections_1.StartComponent, useAsDefault: true },
                        { path: 'story', name: 'Story', component: sections_1.StoryComponent },
                        { path: 'clients', name: 'Clients', component: sections_1.ClientsComponent },
                        { path: 'team', name: 'Team', component: sections_1.TeamComponent },
                        { path: 'works', name: 'Works', component: sections_1.WorksComponent },
                        { path: 'team/:id', name: 'TeamDetail', component: sections_1.TeamDetailComponent },
                        { path: 'contact', name: 'Contact', component: sections_1.ContactComponent }
                    ]),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
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