let cm = null; 

//Sirve para llamar otro contenido
async function cargarModuloSucursales()
{
    //ajax: Asynchronous Java script And Xml
    let respuesta= await fetch('sucursales/sucursales.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido; 
    
    
    import('./sucursales.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}


async function cargarModuloProducto()
{
    //AJAX: Asynchronous Java script And Xml
    let respuesta1 = await fetch('producto/productos.html');
    let contenido1 = await respuesta1.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido1;
    
    //DESPUES DE CARGAR EL CONTENIDO HTML, CARGAMOS EL MODULO JS DE PRODUCTOS
    import('./producto.js')
            .then(obj => {
                cm = obj;
                cm.inicializar();
            });
}