import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
//import { error } from 'protractor';
let ParametriaService = class ParametriaService {
    constructor(http) {
        this.http = http;
        this.access_token = 'c84bc575-d650-4b79-8cdc-35b2cc42b1d8';
    }
    guardar(parametria) {
        let body = {
            numeroLegajo: parametria.numeroLegajo,
            logoBBVA: parametria.logoBBVA,
            pathLogo: parametria.pathLogo,
            alianza: parametria.alianza,
            pathAlianza: parametria.pathAlianza,
            juntos: parametria.juntos,
            pathJuntos: parametria.pathJuntos,
            parametrias: parametria.parametrias,
        };
        return new Promise((resolve, reject) => {
            this.http.post(environment.API_ENDPOINT + '/parametria/guardarParametria.do?access_token=', body)
                .subscribe((response) => {
                console.log(response);
                resolve(response);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    getParametriaPorLegajo(legajo) {
        return new Promise((resolve, reject) => {
            this.http.get(environment.API_ENDPOINT + '/parametria/obtenerParametria.do?access_token=' + this.access_token +
                '&legajo=' + legajo, { responseType: 'json' })
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
ParametriaService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ParametriaService);
export { ParametriaService };
//# sourceMappingURL=parametria.service.js.map