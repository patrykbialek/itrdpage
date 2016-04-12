System.register(['angular2/core', 'angular2/router', '../../data/data'], function(exports_1, context_1) {
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
    var core_1, router_1, data_1;
    var TeamDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            TeamDetailComponent = (function () {
                function TeamDetailComponent(_personService, _router, _routeParams) {
                    this._personService = _personService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    //@Input() detailHidden;
                    //@Output() detailHidden = new EventEmitter<boolean>();
                    this.visible = true;
                    this.open = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                }
                TeamDetailComponent.prototype.toggle = function () {
                    this.visible = !this.visible;
                    if (this.visible) {
                        this.open.emit(null);
                    }
                    else {
                        this.close.emit(null);
                    }
                };
                TeamDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._personService.getPersonById(id)
                        .then(function (person) { return _this.person = person; });
                    //console.log('hidden', this.detailHidden);
                };
                TeamDetailComponent.prototype.goBack = function () {
                    // this.detailHidden = true;
                    // console.log('hidden', this.detailHidden);
                    // this.visible = false;
                    // if (this.visible) {
                    //     this.open.emit(null);
                    // } else {
                    //     this.close.emit(null);
                    // }
                    // console.log('close', this.close);
                    // console.log('open', this.open);
                    //window.history.back();
                    this._router.navigate(['Team']);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TeamDetailComponent.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TeamDetailComponent.prototype, "close", void 0);
                TeamDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'itrd-team-detail',
                        templateUrl: 'app/sections/team/team-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [data_1.PersonService, router_1.Router, router_1.RouteParams])
                ], TeamDetailComponent);
                return TeamDetailComponent;
            }());
            exports_1("TeamDetailComponent", TeamDetailComponent);
        }
    }
});
//# sourceMappingURL=team-detail.component.js.map