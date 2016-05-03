System.register(['angular2/core', 'angular2/router', 'ng2-translate/ng2-translate', '../../data/data', '../../shared/shared'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_translate_1, data_1, shared_1;
    var ClientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            ClientsComponent = (function () {
                function ClientsComponent(_clientService, _scroll) {
                    this._clientService = _clientService;
                    this._scroll = _scroll;
                    this.title = 'Our Clients';
                    this.isHidden = false;
                }
                ClientsComponent.prototype.onScroll = function (event) {
                    if (scrollY > 1 && this.isHidden === false) {
                        this.isHidden = true;
                    }
                    if (scrollY < 1 && this.isHidden === true) {
                        this.isHidden = false;
                    }
                };
                ClientsComponent.prototype.getClients = function () {
                    var _this = this;
                    this._clientService.getClients().then(function (clients) { return _this.clients = clients; });
                };
                ClientsComponent.prototype.gotoClients = function () {
                    this._scroll.toElement(740, 500);
                };
                ClientsComponent.prototype.ngOnInit = function () {
                    this._scroll.toElement();
                    this.getClients();
                };
                ClientsComponent = __decorate([
                    core_1.Component({
                        selector: 'itrd-clients',
                        templateUrl: 'app/sections/clients/clients.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [data_1.ClientService, shared_1.Scroll])
                ], ClientsComponent);
                return ClientsComponent;
            }());
            exports_1("ClientsComponent", ClientsComponent);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=clients.component.js.map