import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationComponent } from './formation.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';
import { DataTableModule } from "angular2-datatable";
import { FilterbyemailPipe } from './filterbyemail.pipe';


const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": FormationComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(routes), DataTableModule, LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        FormationComponent,
        FilterbyemailPipe
    ]
})
export class FormationModule {



}