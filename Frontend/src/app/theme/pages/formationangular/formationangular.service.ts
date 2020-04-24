import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
//import {observable} from 'rxjs/observable/from';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';



@Injectable()
export class FormationangularService {


    // private API_URL: string = "http://192.168.1.15:8000/";
    private API_URL: string = "http://localhost/formationangular/formationangular/web/app_dev.php/";

    constructor(private http: Http) { }

    public getUser() {

        return this.http.get(this.API_URL + "api/evenements?access_token=" + JSON.parse(localStorage.getItem('currentUser'))).map(res => res.json())
    }

    public AddUser(tag) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        let body = this.serializeObj(tag);

        return this.http.post(this.API_URL + "api/evenements?access_token=" + JSON.parse(localStorage.getItem('currentUser')), body, options).map((res: Response) => res.json());
    }

    public DeleteUser(id: any) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Delete, headers: headers });
        return this.http.delete(this.API_URL + "api/evenements" + id + "?access_token=" + JSON.parse(localStorage.getItem('currentUser')), options).map((res: Response) => res.json());
    }


    public UpdateUser(tag:any, id:any) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Put, headers: headers });
        let body = this.serializeObj(tag);
        console.log(body)
        return this.http.put(this.API_URL + 'api/evenements' + id + '?access_token=' + JSON.parse(localStorage.getItem('currentUser')), body, options).map((res: Response) => res.json());
    }



    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }






}
