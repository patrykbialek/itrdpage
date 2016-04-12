import { Component, EventEmitter, Input, OnInit, Output } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { Person } from '../../data/entities/person.ts';
import { PersonService } from '../../data/data';

@Component({
    selector: 'itrd-team-detail',
    templateUrl: 'app/sections/team/team-detail.component.html'
})
export class TeamDetailComponent implements OnInit {
    person: Person;
    //@Input() detailHidden;
    //@Output() detailHidden = new EventEmitter<boolean>();
    visible: boolean = true;
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();

    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit(null);
        } else {
            this.close.emit(null);
        }
    }


    constructor(
        private _personService: PersonService,
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._personService.getPersonById(id)
            .then(person => this.person = person);

        //console.log('hidden', this.detailHidden);
    }

    goBack() {
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
    }
}