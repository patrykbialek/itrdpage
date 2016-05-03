import { Injectable } from 'angular2/core';

@Injectable()
export class Scroll {
    toElement(position?: number, duration?: number) {
        var duration = duration || 200;
        var element = document.body;
        var position = position || 0;
        
        scrollTo(element, position, duration);

        function scrollTo(element, position, duration) {
            if (duration < 0) return;
            var difference = position - element.scrollTop;
            var perTick = difference / duration * 15;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === position) return;
                scrollTo(element, position, duration - 15);
            }, 15);
        }
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */