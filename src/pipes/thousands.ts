import {PipeTransform, Pipe} from 'angular2/core';

@Pipe({name: 'thousands'})
export class Thousands implements PipeTransform {
    constructor() {
    }

    transform(text:string, args:any[]):any {
        let num:number = parseInt(text);
        let result:string;

        if (isNaN(num) || num < 1000) {
            result = text;
        }
        else {
            let exp = (Math.floor(Math.log(num) / Math.log(1000)));
            result = (num / Math.pow(1000, exp)).toFixed(1) + 'K';
        }

        return result;
    }
}
