import { Client } from './entities/client';
import { CLIENTS } from '../mock-data/mock-clients';
import { Injectable } from 'angular2/core';

@Injectable()
export class ClientService {
    getClients() {
        return Promise.resolve(CLIENTS);
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */