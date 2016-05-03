import { Component, Input, OnInit, provide } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { Person }  from '../../data/entities/person.ts';
import { PersonService } from '../../data/data';
import { TeamDetailComponent } from './team-detail.component'

import { EntityService, ModalComponent, ModalService } from '../../blocks/blocks';
import { Scroll } from '../../shared/shared';

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
        private _personService: PersonService,
        private _router: Router,
        private _scroll: Scroll
    ) { }

    getPeople() {
        this._personService.getPeople().then(people => this.people = people);
    }

    gotoDetail(selectedPerson: Person) {
        if (selectedPerson) {
            this._router.navigate(['TeamDetail', { id: selectedPerson.id }]);
        }
    }

    gotoTeam() {
        this._scroll.toElement(740, 500);
    }

    ngOnInit() {
        this._scroll.toElement();
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