import { Component, Input, OnInit, provide } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { Person }  from '../../data/entities/person.ts';
import { PersonService } from '../../data/data';
import { TeamDetailComponent } from './team-detail.component'

import { EntityService, ModalComponent, ModalService } from '../../blocks/blocks';

@Component({
    selector: 'itrd-team',
    templateUrl: 'app/sections/team/team.component.html',
    directives: [ROUTER_DIRECTIVES, TeamDetailComponent, ModalComponent],
    providers: [ModalService],
    pipes: [TranslatePipe]
})
export class TeamComponent implements OnInit {
    title: string = 'Our Team';
    isHidden: boolean = false;
    people: Person[];
    selectedPerson: Person;
    //detailHidden: boolean = true;
    @Input() visible;

    constructor(
        private _modalService: ModalService,
        private _router: Router,
        private _personService: PersonService) { }

    getPeople() {
        this._personService.getPeople().then(people => this.people = people);
    }

    gotoDetail(selectedPerson: Person) {
        if (selectedPerson) {
            this._router.navigate(['TeamDetail', { id: selectedPerson.id }]);
        }
        //this.detailHidden = false;
        //this.visible = true;
        // let msg = 'Are you sure you want to reset the database?';
        // this._modalService.activate(msg).then(responseOK => {
        //     if (responseOK) {
        //         //this._messageService.resetDb();
        //     }
        // });
    }

    gotoTeam() {
        //scroll(0, 700);

        // var scrollStep = -window.scrollY / (1000 / 15),
        //     scrollInterval = setInterval(function() {
        //         if (window.scrollY >= 0) {
        //             window.scrollBy(0, scrollStep);
        //             console.log(scrollStep);
        //         }
        //         else clearInterval(scrollInterval);
        //     }, 15);
        //scrollTo(document.body, elmnt.offsetTop, 600);
        var duration = 600;
        var element = document.body;
        var to = 780;
        scrollTo(element, to, duration);

        function scrollTo(element, to, duration) {

            if (duration < 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 15;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 15);
            }, 15);

        }
    }

    ngOnInit() {
        this.getPeople();
    }

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