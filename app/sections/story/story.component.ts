import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { ClientDetailComponent }  from './client-detail.component';
import { CONFIG }                       from '../../shared/shared';

let TOP = CONFIG.top;

@Component({
    selector: 'itrd-story',
    templateUrl: 'app/sections/story/story.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class StoryComponent {
    title: string = 'Our Story';
    isHidden: boolean = false;

    onScroll(event) {
        if (scrollY > 1 && this.isHidden === false) {
            this.isHidden = true;
        }
        if (scrollY < 1 && this.isHidden === true) {
            this.isHidden = false;
        }
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */