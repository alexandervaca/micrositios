import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
let UsuariosService = class UsuariosService {
    constructor(http) {
        //let access_token: string = 'c84bc575-d650-4b79-8cdc-35b2cc42b1d8';
        this.http = http;
        this.access_token = 'c84bc575-d650-4b79-8cdc-35b2cc42b1d8';
        /*this.urlLegajosPersona = 'http://76.252.89.113:8096/seg_rest/parametria/obtenerLegajosPersona.do?access_token=' +
        access_token + '&legajoPersona=';*/
    }
    login() {
        let httpHeaders = new HttpHeaders({
            'Authorization': 'Basic YmJ2YV9jOTIwMzU2OWU5ZjZlNzY5ZGZjOTk5Y2FkMjg5NDk4NzpmNjA3YzZmZGU4MTRjMWEyM2Y0MjQ1MTMxZWUwYzlkNQ==',
            'Content-Type': 'application/json'
        });
        let httpParams = new HttpParams()
            .set('grant_type', 'password')
            .set('username', 'german.derosa.contractor@bbva.com')
            .set('password', '1234567q');
        let options = {
            headers: httpHeaders,
            params: httpParams
        };
        this.http.post(environment.API_ENDPOINT + '/oauth/token.do', { responseType: 'json' }, options).subscribe(data => {
            console.log(data);
            return data;
        }, err => {
            console.log(err);
            return err;
        });
        return new Observable();
    }
    /**
     * Busca por numero de legajo y nombre de persona
     * @param searchText
     */
    buscarLegajosPersona(searchText) {
        return new Promise((resolve, reject) => {
            this.http.get(environment.API_ENDPOINT + '/parametria/obtenerLegajosPersona.do?access_token=' + this.access_token +
                '&legajoPersona=' + searchText, { responseType: 'json' })
                .subscribe((response) => {
                console.log(response);
                resolve(response);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }
};
UsuariosService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuariosService);
export { UsuariosService };
//# sourceMappingURL=usuario.service.js.map