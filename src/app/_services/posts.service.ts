import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {
    constructor(private http: HttpClient) { }

    create(text: string, user: string) {
        return this.http.post<any>('/api/create', { username: text, password: user })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //  localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    like(username: string) {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
    }
}