import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {

   // private API_URL: string = "http://192.168.1.15:8000/oauth/v2/token";

    private API_URL: string = "http://localhost/formationangular/formationangular/web/app_dev.php/oauth/v2/token";


    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        console.log(username, password);
        const data = {
            username: username, password: password,
            grant_type: "password",
            client_id: "1_20q9q7flkresokwg0ksc80wogksgsoskgw8sgw40co8s0g4cg8",
            client_secret: "1u3r7wp7rj8ggkkog0gwsoccokcwgk08ko0wkocwwk84cogskg",
            redirect_uri: '/'
        };
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        let body = this.serializeObj(data);

        return this.http.post(this.API_URL, body, options).map((res: Response) => res.json());

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


    serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }



}

