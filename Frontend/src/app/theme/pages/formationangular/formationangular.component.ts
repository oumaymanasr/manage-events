import { Component, ViewEncapsulation, AfterViewInit, OnInit, Input } from '@angular/core';

import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormationangularService } from './formationangular.service';
import { Evenement } from './evenement';
import { tsXLXS } from 'ts-xlsx-export';
import * as XLSX from 'ts-xlsx';
import { NgbCheckBox } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-formationangular',
    templateUrl: "./formationangular.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class FormationangularComponent implements OnInit {
    formationangular = "";
    formationangular2 = "";
    public singledata;
    public data;
    public form: FormGroup;
    public nom: AbstractControl;
    public description: AbstractControl;
    public nbrparticipant: AbstractControl;
    public langitude: AbstractControl;
    public latitude: AbstractControl;
    public type: AbstractControl;


    constructor(fb: FormBuilder, private service: FormationangularService) {
        this.form = fb.group({
            'nom': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'description': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'nbrparticipant': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'langitude': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'latitude': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            'type': ['', Validators.compose([Validators.required, Validators.minLength(8)])]

        })
        this.nom = this.form.controls['nom'];
        this.description = this.form.controls['description'];
        this.nbrparticipant = this.form.controls['nbrparticipant'];
        this.langitude = this.form.controls['langitude'];
        this.latitude = this.form.controls['latitude'];
        this.type = this.form.controls['type'];

    }

    ngOnInit() {
        this.service.getUser().subscribe(data => this.data = data);
        setTimeout(() => { (console.log(this.data)) }, 5000);

    }


    onSubmit() {
        let inst = new Evenement;

        inst.nom = this.nom.value;
        inst.description = this.description.value;
        inst.nbrparticipant = this.nbrparticipant.value;
        inst.langitude = this.langitude.value;
        inst.latitude = this.latitude.value;
        inst.type = this.type.value;

        this.service.AddUser(inst).subscribe(data => window.location.reload());

    }

    onUpdate(): void {
        console.log(this.singledata)
        this.service.UpdateUser(this.singledata, this.singledata.id).subscribe(data => window.location.reload());
    }

    public active(item) {
        this.service.UpdateUser(item,item.id).subscribe(data => console.log("ee"));
    }


    // onDelete(id):void {
    //    console.log(this.singledata)
    //    this.service.DeleteUser(this.singledata,this.singledata.id).subscribe(data => window.location.reload());
    // }


    onDelete(id) {
        this.service.DeleteUser(id).subscribe(
            result => {
                window.location.reload();
            }
        );
    }


    affiche(item) {
        this.singledata = item;
        console.log(this.singledata);
    }




    exportToExcel() {
        tsXLXS().exportAsExcelFile(this.data).saveAsExcelFile("fileName");
    }

    arrayBuffer: any;
    file: File;

    incomingfile(event) {
        this.file = event.target.files[0];


    }

    importFromExcel() {
        let fileReader = new FileReader();
        console.log("avant onload");

        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;

            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var x: any
            x = XLSX.utils.sheet_to_json(worksheet, { raw: true })
            var test = new Evenement();
            for (let i = 0; i < x.length; i++) {
                test.nom = x[i].nom;
                test.description = x[i].description;
                test.nbrparticipant = x[i].nbrparticipant;
                test.langitude = x[i].langitude;
                test.latitude = x[i].latitude;
                test.type = x[i].type;
                this.service.AddUser(test).subscribe(data => window.location.reload());

            }
            console.log(x);


        };
        fileReader.readAsArrayBuffer(this.file);
    }

}
