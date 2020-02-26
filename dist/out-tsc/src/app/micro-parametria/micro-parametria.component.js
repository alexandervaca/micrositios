import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TipoProductoEnum } from '../modelo/tipoProductoEnum';
import { parametriaMOCKS } from '../modelo/mocksParametria';
let MicroParametriaComponent = class MicroParametriaComponent {
    constructor(usuarioService, productoService, parametriaService) {
        this.usuarioService = usuarioService;
        this.productoService = productoService;
        this.parametriaService = parametriaService;
        this.legajosPersona = [];
        this.orden = [1, 2, 3, 4, 5];
        this.productosNotebook = [];
        this.productosCelular = [];
        this.productosPortatil = [];
        // Se usa para mostrar los productos en el modal
        this.productosModal = [];
        // Guarda los productos seleccionados con cada checkbox
        this.productosModalParaAgregar = [[]];
    }
    ngOnInit() {
        this.limpiarModal();
        this.legajoSelected = '';
        // Se debe inicializar con una parametria vacia
        this.parametriaLegajo = parametriaMOCKS.get('parametriaVacia');
        this.login();
        this.productoService.buscarProducto(TipoProductoEnum.NOTEBOOK).then((data) => {
            this.productosNotebook = data['tiposProducto'];
        });
        this.productoService.buscarProducto(TipoProductoEnum.CELULAR).then((data) => {
            this.productosCelular = data['tiposProducto'];
        });
        this.productoService.buscarProducto(TipoProductoEnum.TECNO_PORTATIL).then((data) => {
            this.productosPortatil = data['tiposProducto'];
        });
    }
    login() {
        this.usuarioService.login().subscribe(data => {
            console.log(data);
            let tokenLogin = data.json();
            console.log(tokenLogin);
        }, err => {
            console.log('error');
        });
    }
    /**
    * Muestra el resultado de la busqueda
    * @function buscarLegajosPersona
    * @param {any} event
    * @return {void}
    */
    buscarLegajosPersona(event) {
        if (event.target.value.length >= 4) {
            this.searching = true;
            this.searchText = event.target.value;
            this.usuarioService.buscarLegajosPersona(this.searchText.toLocaleUpperCase()).then((respuesta) => {
                if (respuesta.estado['codigo'] == 0) {
                    this.legajosPersona = respuesta.legajosPersona;
                }
                else {
                    console.log('error al recuperar el resultado');
                    this.legajosPersona = [];
                }
            });
        }
        else {
            this.searching = false;
        }
    }
    selectLegajo(event) {
        this.legajoSelected = event.target.value;
        if (this.legajoSelected) {
            this.parametriaLegajo = parametriaMOCKS.get('72428');
        }
        else {
            this.limpiarModal();
            this.parametriaLegajo = parametriaMOCKS.get('parametriaVacia');
        }
    }
    buscarProducto(tipoProducto) {
        this.productoService.buscarProducto(tipoProducto);
    }
    visualizarParametria(id) {
        this.previsualizarParametria = true;
    }
    cerrarPrevisualizacionParametria() {
        this.previsualizarParametria = false;
    }
    visualizarProducto(id, parametria) {
        this.previsualizarProducto = true;
        this.parametriaPreVisualizada = parametria;
    }
    cerrarPrevisualizacionProducto() {
        this.previsualizarProducto = false;
        this.parametriaPreVisualizada = null;
    }
    mostrarProducto(tipoProducto) {
        this.limpiarModal();
        //, orden: string, agregar: boolean, banner: string
        switch (tipoProducto) {
            case "NBK":
                this.productosModal = this.productosNotebook;
                break;
            case "POR":
                this.productosModal = this.productosCelular;
                break;
            case "TEC":
                this.productosModal = this.productosPortatil;
                break;
            case "HOG":
                this.productosModal = [];
                break;
            case "BIC":
                this.productosModal = [];
                break;
            default:
                this.productosModal = [];
        }
    }
    seleccionarProducto(productoSeleccinado) {
        // Si tiene menos de 3 elementos se agrega
        /*------------if ('NBK' === productoSeleccinado['codigoProducto']) {
          if (this.productosModalParaAgregar['NBK'].length == 3) {
            this.mensajeError = "Solo se pueden seleccionar tres productos.";
          } else {
            this.mensajeError = "";
            this.productosModalParaAgregar['NBK'].push(productoSeleccinado);
          }
        }------------*/
        /*if ('POR' === productoSeleccinado['codigoProducto']) {
          this.productosModalParaAgregar['POR'].push(productoSeleccinado);
        }
    
        if ('TEC' === productoSeleccinado['codigoProducto']) {
          this.productosModalParaAgregar['TEC'].push(productoSeleccinado);
        }*/
        /*if (Array.isArray(this.productosModalParaAgregar) && this.productosModalParaAgregar.length < 3) {
          this.productosModalParaAgregar.push(productoSeleccinado);
          this.mensajeError = "";
        } else {
          if (this.productosModalParaAgregar.length == 3) {
            this.mensajeError = "";
          } else {
            this.mensajeError = "Solo se pueden seleccionar tres productos.";
          }
        }*/
        //console.log(this.productosModalParaAgregar.length);
    }
    agregarProductosSeleccionados() {
        //console.log(this.productosModalParaAgregar);
        this.mensajeError = "";
        console.log('agregarProductosSeleccionados');
        /*------------if (Array.isArray(this.productosModalParaAgregar)) {
          //console.log(this.productosModalParaAgregar['NBK']);
          if (this.productosModalParaAgregar['NBK'].length <= 3) {
            // Agregar al modelo los productos seleccionados
            //this.mensajeError = "";
            
            let parametria : Parametria = new Parametria(this.productosModalParaAgregar['NBK']);
            this.parametriaLegajo.parametrias.push(parametria);
            console.log(this.parametriaLegajo.parametrias[0]['productos'][0]['descripcion']);
            // Se debe actualizar la tabla con los datos del modal
    
            
            console.log(this.parametriaLegajo.parametrias);
          } else {
            this.mensajeError = "Solo se pueden agregar tres productos.";
          }
        }------------*/
    }
    guardar() {
        parametriaMOCKS.set('72428', this.parametriaLegajo);
        this.parametriaService.guardar(this.parametriaLegajo);
    }
    limpiarModal() {
        this.mensajeError = '';
        this.previsualizarProducto = false;
        this.productosModalParaAgregar['NBK'] = [];
        this.productosModalParaAgregar['CEL'] = [];
        this.productosModalParaAgregar['TEC'] = [];
    }
};
MicroParametriaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-micro-parametria',
        templateUrl: './micro-parametria.component.html',
        styleUrls: ['./micro-parametria.component.css']
    })
], MicroParametriaComponent);
export { MicroParametriaComponent };
//# sourceMappingURL=micro-parametria.component.js.map