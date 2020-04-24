import { Pipe, PipeTransform } from '@angular/core';
import { Row } from 'primeng/primeng';

@Pipe({
    name: 'formationangular'
})
export class FormationangularPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (args != undefined && args != "" && args != null)
            value = value.filter(row => row.nom > 1);
        return value
    }

}
