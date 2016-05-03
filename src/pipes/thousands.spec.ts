import {it, describe, expect, beforeEach} from '@angular/core/testing';
import {Thousands} from "./thousands";

describe('Thousands pipe tests', () => {
    let pipe:Thousands;

    beforeEach(() => {
        pipe = new Thousands();
    });

    it('Should transform 300 to 300', () => {
        var result = pipe.transform('300', null);

        expect(result).toEqual('300');
    });
});
