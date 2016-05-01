System.register(['../mock-data/mock-applications', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_applications_1, core_1;
    var ApplicationService;
    return {
        setters:[
            function (mock_applications_1_1) {
                mock_applications_1 = mock_applications_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ApplicationService = (function () {
                function ApplicationService() {
                }
                ApplicationService.prototype.getApplictions = function () {
                    return Promise.resolve(mock_applications_1.APPLICATIONS);
                };
                ApplicationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ApplicationService);
                return ApplicationService;
            }());
            exports_1("ApplicationService", ApplicationService);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=application.service.js.map