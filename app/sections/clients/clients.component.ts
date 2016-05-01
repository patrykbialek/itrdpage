import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

//import { ClientDetailComponent }  from './client-detail.component';
import { Client } from '../../data/entities/client.ts';
import { ClientService } from '../../data/data';

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
        private _clientService: ClientService
    ) { }

    onScroll(event) {
        if (scrollY > 1 && this.isHidden === false) {
            this.isHidden = true;
        }
        if (scrollY < 1 && this.isHidden === true) {
            this.isHidden = false;
        }
    }

    getClients() {
        this._clientService.getClients().then(clients => this.clients = clients);
    }
    
    gotoClients() {
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
        this.getClients();
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */