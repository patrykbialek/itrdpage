System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Scroll;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Scroll = (function () {
                function Scroll() {
                }
                Scroll.prototype.toElement = function (position, duration) {
                    var duration = duration || 200;
                    var element = document.body;
                    var position = position || 0;
                    scrollTo(element, position, duration);
                    function scrollTo(element, position, duration) {
                        if (duration < 0)
                            return;
                        var difference = position - element.scrollTop;
                        var perTick = difference / duration * 15;
                        setTimeout(function () {
                            element.scrollTop = element.scrollTop + perTick;
                            if (element.scrollTop === position)
                                return;
                            scrollTo(element, position, duration - 15);
                        }, 15);
                    }
                };
                Scroll = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Scroll);
                return Scroll;
            }());
            exports_1("Scroll", Scroll);
        }
    }
});
/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */ 
//# sourceMappingURL=scroll.js.map