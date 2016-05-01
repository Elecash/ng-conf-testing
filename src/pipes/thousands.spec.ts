import {it, describe, expect, beforeEach} from '@angular/testing';
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

    it('Should transform 1300 to 1.3K', () => {
        var result = pipe.transform('1300', null);

        expect(result).toEqual('1.3K');
    });

    it('Should transform 13000 to 13K', () => {
        var result = pipe.transform('13000', null);

        expect(result).toEqual('13K');
    });

    it('Should transform 13500 to 13.5K', () => {
        var result = pipe.transform('13500', null);

        expect(result).toEqual('13.5K');
    });

    it('Should transform 13599 to 13.6K', () => {
        var result = pipe.transform('13599', null);

        expect(result).toEqual('13.6K');
    });
});
