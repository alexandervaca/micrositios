import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroParametriaComponent } from './micro-parametria/micro-parametria.component';
import { MicroCompraComponent } from './micro-compra/micro-compra.component';
import { MicroCompraSeparadosComponent } from './micro-compra-separados/micro-compra-separados.component';
import { UsuariosService } from './services/usuario.service';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            MicroParametriaComponent,
            MicroCompraComponent,
            MicroCompraSeparadosComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule
        ],
        providers: [UsuariosService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map