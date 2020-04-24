import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterbyemail'
})
export class FilterbyemailPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        value = value.filter(row => row.email.indexOf(args) > -1);
        return value;
    }

}
