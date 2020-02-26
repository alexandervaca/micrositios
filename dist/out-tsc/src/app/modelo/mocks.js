import { ParametriaLegajo } from './parametriaLegajo';
import { Parametria } from './parametria';
import { Producto } from './producto';
let mocksParametria = new Map();
let paramLegajo1 = new ParametriaLegajo();
let paramLegajo2 = new ParametriaLegajo();
let paramLegajo3 = new ParametriaLegajo();
buildParametriaLegajo1(paramLegajo1);
buildParametriaLegajo2(paramLegajo2);
buildParametriaLegajo3(paramLegajo3);
mocksParametria.set('72428', paramLegajo1);
mocksParametria.set('', paramLegajo2);
mocksParametria.set('', paramLegajo3);
function buildParametriaLegajo1(paramLegajo1) {
    paramLegajo1.numeroLegajo = '72428';
    paramLegajo1.logoBBVA = true;
    paramLegajo1.pathLogo = '';
    paramLegajo1.alianza = true;
    paramLegajo1.pathAlianza = '';
    paramLegajo1.juntos = true;
    paramLegajo1.pathJuntos = '';
    let productosParam;
    let prod1 = new Producto();
    prod1.rama = '7';
    prod1.codigoProducto = 'NBK';
    prod1.codigoProductoGaus = '44';
    prod1.sumaAsegurada = '550000';
    prod1.descripcionProducto = 'NOTEBOOK 5500';
    let param1 = new Parametria(productosParam);
    param1.orden = '1';
    param1.productoDescripcion = 'Notebook';
    param1.agregado = true;
    param1.pathBanner = '';
    paramLegajo1.parametrias.push(param1);
}
function buildParametriaLegajo2(paramLegajo) {
    paramLegajo.numeroLegajo = '72428';
    paramLegajo.logoBBVA = true;
    paramLegajo.pathLogo = '';
    paramLegajo.alianza = true;
    paramLegajo.pathAlianza = '';
    paramLegajo.juntos = true;
    paramLegajo.pathJuntos = '';
    let productosParam;
    productosParam['rama'] = '7';
    productosParam['codigoProducto'] = 'POR';
    productosParam['codigoProductoGaus'] = '150';
    productosParam['sumaAsegurada'] = '400000';
    productosParam['descripcionProducto'] = 'SEGURO DE CELULARES';
    let param1 = new Parametria(productosParam);
    param1.orden = '1';
    param1.productoDescripcion = 'Celular';
    param1.agregado = true;
    param1.pathBanner = '';
    paramLegajo1.parametrias.push(param1);
}
function buildParametriaLegajo3(paramLegajo) {
    paramLegajo.numeroLegajo = '72428';
    paramLegajo.logoBBVA = true;
    paramLegajo.pathLogo = '';
    paramLegajo.alianza = true;
    paramLegajo.pathAlianza = '';
    paramLegajo.juntos = true;
    paramLegajo.pathJuntos = '';
    let productosParam;
    productosParam['rama'] = '7';
    productosParam['codigoProducto'] = 'TEC';
    productosParam['codigoProductoGaus'] = '160';
    productosParam['sumaAsegurada'] = '360000';
    productosParam['descripcionProducto'] = 'TECNOLOGIA PORTATIL 3000';
    let param1 = new Parametria(productosParam);
    param1.orden = '1';
    param1.productoDescripcion = 'Tecnologia Portatil';
    param1.agregado = true;
    param1.pathBanner = '';
    paramLegajo1.parametrias.push(param1);
}
//# sourceMappingURL=mocks.js.map