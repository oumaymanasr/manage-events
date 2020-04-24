
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layout.module';
import { DefaultComponent } from '../default/default.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationangularComponent } from '../formationangular/formationangular.component';
import { DataTableModule } from 'angular2-datatable';
import { FormationangularPipe } from './formationangular.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formationangular2Pipe } from './formationangular2.pipe';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': FormationangularComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, DataTableModule, ReactiveFormsModule, FormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        FormationangularComponent,
        FormationangularPipe,
        Formationangular2Pipe
    ]
})
export class FormationangularModule {



}


