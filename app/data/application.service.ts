import { Application } from './entities/application';
import { APPLICATIONS } from '../mock-data/mock-applications';
import { Injectable } from 'angular2/core';

@Injectable()
export class ApplicationService {
    getApplictions() {
        return Promise.resolve(APPLICATIONS);
    }

    // getPersonById(id: number) {
    //     return Promise.resolve(APPOINTMENTS).then(
    //         people => people.filter(person => person.id === id)[0]
    //     );
    // }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */