import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formationangular2'
})
export class Formationangular2Pipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (args != undefined && args != "" && args != null)
            value = value.filter(row => row.nbrparticipant > 1);
        return value
    }

}
