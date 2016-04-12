import { Person } from './entities/person';
import { PEOPLE } from '../mock-data/mock-people';
import { Injectable } from 'angular2/core';

@Injectable()
export class PersonService {
    getPeople() {
        return Promise.resolve(PEOPLE);
    }

    getPersonById(id: number) {
        return Promise.resolve(PEOPLE).then(
            people => people.filter(person => person.id === id)[0]
        );
    }
}

/**
 * Copyright 2016 Medicover Group IT R&D. All Rights Reserved.
 */