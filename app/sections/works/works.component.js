System.register(['angular2/core', 'angular2/router', 'ng2-translate/ng2-translate', '../../data/data'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_translate_1, data_1;
    var WorksComponent;
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
            }],
        execute: function() {
            WorksComponent = (function () {
                function WorksComponent(_applicationService) {
                    this._applicationService = _applicationService;
                    this.title = 'Our Works';
                    this.isHidden = false;
                }
                WorksComponent.prototype.onScroll = function (event) {
                    if (scrollY > 1 && this.isHidden === false) {
                        this.isHidden = true;
                    }
                    if (scrollY < 1 && this.isHidden === true) {
                        this.isHidden = false;
                    }
                };
                WorksComponent.prototype.getApplications = function () {
                    var _this = this;
                    this._applicationService.getApplictions().then(function (applications) { return _this.applications = applications; });
                };
                WorksComponent.prototype.gotoWorks = function () {
                    var duration = 600;
                    var element = document.body;
                    var to = 780;
                    scrollTo(element, to, duration);
                    function scrollTo(element, to, duration) {
                        if (duration < 0)
                            return;
                        var difference = to - element.scrollTop;
                        var perTick = difference / duration * 15;
                        setTimeout(function () {
                            element.scrollTop = element.scrollTop + perTick;
                            if (element.scrollTop === to)
                                return;
                            scrollTo(element, to, duration - 15);
                        }, 15);
                    }
                };
                WorksComponent.prototype.ngOnInit = function () {
                    this.getApplications();
                };
                WorksComponent = __decorate([
                    core_1.Component({
                        selector: 'itrd-works',
                        templateUrl: 'app/sections/works/works.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [data_1.ApplicationService])
                ], WorksComponent);
                return WorksComponent;
            }());
            exports_1("WorksComponent", WorksComponent);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=works.component.js.map