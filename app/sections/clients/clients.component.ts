import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { ClientDetailComponent }  from './client-detail.component';
import { Client } from '../../data/entities/client.ts';
import { ClientService } from '../../data/data';
import { Scroll } from '../../shared/shared';

@Component({
    selector: 'itrd-clients',
    templateUrl: 'app/sections/clients/clients.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    title: string = 'Our Clients';
    isHidden: boolean = false;

    constructor(
        private _clientService: ClientService,
        private _scroll: Scroll
    ) { }

    getClients() {
        this._clientService.getClients().then(clients => this.clients = clients);
    }

    gotoClients() {
        this._scroll.toElement(740, 500);
    }

    ngOnInit() {
        this._scroll.toElement();
        this.getClients();
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