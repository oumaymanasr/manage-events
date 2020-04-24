import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormationService } from './formation.service'
import { User } from './user'
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { isEmbeddedView } from '@angular/core/src/view/util';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
//import {RatingModule} from "ngx-rating";

@Component({
    selector: 'app-formation',
    templateUrl: "./formation.component.html",
    encapsulation: ViewEncapsulation.None,
    styles: []
})
export class FormationComponent implements OnInit {
    public form: FormGroup;
    public submitted: boolean;
    public first_name: AbstractControl;
    public last_name: AbstractControl;
    public phone: AbstractControl;
    public username: AbstractControl;
    public email: AbstractControl;
    public password: AbstractControl;
    public plainpassword: AbstractControl;
    public roles: AbstractControl;
    etat = "";
    filterroles = ""
    singledata; // pour un objet
    rowsOnPage = 25; // taille data table
    filterbyemail = "";
    public data;
    public exercice;
    constructor(fb: FormBuilder, private formationservice: FormationService) {
        this.form = fb.group({
            'first_name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'last_name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'phone': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'email': ['', Validators.compose([Validators.required, Validators.email])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'plainpassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'roles': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        });
        this.roles = this.form.controls['roles'];
        this.first_name = this.form.controls['first_name'];
        this.last_name = this.form.controls['last_name'];
        this.phone = this.form.controls['phone'];
        this.username = this.form.controls['username'];
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        this.plainpassword = this.form.controls['plainpassword'];
    }

    ngOnInit() {
        this.formationservice.getUser().subscribe(data => this.data = data);
        setTimeout(() => {
            console.log(this.data)
        }, 2000);
    }
    public onSubmit(values: Object): void {
        let user = new User();
        user.email = this.email.value
        user.first_name = this.first_name.value
        user.last_name = this.last_name.value
        user.password = this.password.value
        user.phone = this.phone.value
        user.plainpassword = this.plainpassword.value
        user.username = this.username.value
        user.roles = this.roles.value;
        this.formationservice.addUser(user).subscribe(data => window.location.reload());
    }

}
