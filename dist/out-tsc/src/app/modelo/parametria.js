import { Producto } from './producto';
export class Parametria {
    constructor(productosParam) {
        this.orden = '';
        this.descripcionProducto = '';
        this.habilitado = false;
        this.tipoCobertura = '';
        this.productos = [];
        this.pathBanner = '';
        this.url = '';
        /*this.orden = producto['orden'];
        this.productoDescripcion = producto['productoDescripcion'];
        this.agregado = producto['agregado'];
        this.productos = producto['productos'];*/
        productosParam.forEach(prod => {
            let producto = new Producto();
            producto.rama = prod['rama'];
            producto.codigoProducto = prod['codigoProducto'];
            producto.codigoProductoGaus = prod['codigoProductoGaus'];
            producto.sumaAsegurada = prod['sumaAsegurada'];
            producto.descripcion = prod['descripcion'];
            this.productos.push(producto);
        });
        //this.pathBanner = producto['pathBanner'];
    }
}
//# sourceMappingURL=parametria.js.map