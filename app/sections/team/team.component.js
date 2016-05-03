System.register(['angular2/core', 'angular2/router', 'ng2-translate/ng2-translate', '../../data/data', './team-detail.component', '../../blocks/blocks', '../../shared/shared'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_translate_1, data_1, team_detail_component_1, blocks_1, shared_1;
    var TeamComponent;
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
            function (team_detail_component_1_1) {
                team_detail_component_1 = team_detail_component_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            TeamComponent = (function () {
                function TeamComponent(_modalService, _personService, _router, _scroll) {
                    this._modalService = _modalService;
                    this._personService = _personService;
                    this._router = _router;
                    this._scroll = _scroll;
                    this.title = 'Our Team';
                    this.isHidden = false;
                }
                TeamComponent.prototype.getPeople = function () {
                    var _this = this;
                    this._personService.getPeople().then(function (people) { return _this.people = people; });
                };
                TeamComponent.prototype.gotoDetail = function (selectedPerson) {
                    if (selectedPerson) {
                        this._router.navigate(['TeamDetail', { id: selectedPerson.id }]);
                    }
                };
                TeamComponent.prototype.gotoTeam = function () {
                    this._scroll.toElement(740, 500);
                };
                TeamComponent.prototype.ngOnInit = function () {
                    this._scroll.toElement();
                    this.getPeople();
                };
                TeamComponent.prototype.onScroll = function (event) {
                    if (scrollY > 1 && this.isHidden === false) {
                        this.isHidden = true;
                    }
                    if (scrollY < 1 && this.isHidden === true) {
                        this.isHidden = false;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TeamComponent.prototype, "visible", void 0);
                TeamComponent = __decorate([
                    core_1.Component({
                        selector: 'itrd-team',
                        templateUrl: 'app/sections/team/team.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, team_detail_component_1.TeamDetailComponent, blocks_1.ModalComponent],
                        providers: [blocks_1.ModalService],
                        pipes: [ng2_translate_1.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [blocks_1.ModalService, data_1.PersonService, router_1.Router, shared_1.Scroll])
                ], TeamComponent);
                return TeamComponent;
            }());
            exports_1("TeamComponent", TeamComponent);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=team.component.js.map