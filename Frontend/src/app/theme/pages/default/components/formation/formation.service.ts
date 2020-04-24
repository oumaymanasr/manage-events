import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
@Injectable()
export class FormationService {
    private API_URL: string = "http://51.77.194.241:81/";

    constructor(private http: Http) { }
    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    addUser(tag) {

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });

        let body = this.serializeObj(tag);

        console.log(body)

        return this.http.post(this.API_URL + 'api/user/' + '?access_token=NTY3NWQ1MGRlM2QxNTI0N2JmZjYyYmQ5YzE2YTFkODEzZDFjNzI3YjNlYjNjMGI0ZDE3YTY3NjZiYmEwODJkMw'
            , body
            , options)
            .map((res: Response) => res.json());
    }
    getUser() {
        return this.http.get(this.API_URL + 'api/user?access_token=NTY3NWQ1MGRlM2QxNTI0N2JmZjYyYmQ5YzE2YTFkODEzZDFjNzI3YjNlYjNjMGI0ZDE3YTY3NjZiYmEwODJkMw')
            .map(res => res.json());
    }

}
