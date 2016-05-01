import {PipeTransform, Pipe} from '@angular/core';

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
            let exp:number = (Math.floor(Math.log(num) / Math.log(1000)));
            let value:number = (num / Math.pow(1000, exp));
            let decimals:number = (value % 1 != 0) ? 1 : 0;
            result = value.toFixed(decimals) + 'K';
        }

        return result;
    }
}
