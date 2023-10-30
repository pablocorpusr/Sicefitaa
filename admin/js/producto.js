let productos = [
    {
        "idProducto": 1,
        "nombre": "Donepecilo",
        "nombreGenerico": "Donepecilo",
        "formaFarmaceutica": "Tableta",
        "unidadMedida": "Tableta",
        "presentacion": "Envase con 14 abletas",
        "principalIndicacion": "Enfermedad de Alzheimer",
        "contraindicacion": "Hipersensibilidad al fármaco o a los derivados de piperidina",
        "concentracion": "10 mg",
        "unidadesEnvase": 14,
        "precioCompra": 466.6,
        "precioVenta": 547,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 2,
        "nombre": "Etambutol",
        "nombreGenerico": "Etambutol",
        "formaFarmaceutica": "Tableta",
        "unidadMedida": "Tableta",
        "presentacion": "Envase con 50 tabletas",
        "principalIndicacion": "Tuberculosis",
        "contraindicacion": "Hipersensibilidad al fármaco, neuritis óptica y en menores de 12 años",
        "concentracion": "400 mg",
        "unidadesEnvase": 50,
        "precioCompra": 65.71,
        "precioVenta": 210,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 3,
        "nombre": "Efavirenz",
        "nombreGenerico": "Efavirenz",
        "formaFarmaceutica": "comprimido recubierto",
        "unidadMedida": "Comprimido",
        "presentacion": "Envase con 30 comprimidos recubiertos",
        "principalIndicacion": "Infección por Virus de Inmunodeficiencia Humana (VIH), en combinación con otros antirretrovirales",
        "contraindicacion": "Hipersensibilidad al fármaco",
        "concentracion": "600 mg",
        "unidadesEnvase": 30,
        "precioCompra": 134.19,
        "precioVenta": 254,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 4,
        "nombre": "Ciprofibratol",
        "nombreGenerico": "Ciprofibrato",
        "formaFarmaceutica": "cápsula o tableta",
        "unidadMedida": "Cápsula",
        "presentacion": "Envase con 30 cápsulas o tabletas",
        "principalIndicacion": "Hiperlipidemias tipo IIb y IV",
        "contraindicacion": "Hipersensibilidad al fármaco. Insuficiencia hepática o renal. Embarazo y lactancia",
        "concentracion": "100 mg",
        "unidadesEnvase": 30,
        "precioCompra": 551.32,
        "precioVenta": 665,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 5,
        "nombre": "Lidocaína",
        "nombreGenerico": "Lidocaína",
        "formaFarmaceutica": "gel",
        "unidadMedida": "Mililitro",
        "presentacion": "Envase con 20 ml",
        "principalIndicacion": "Anestesia local",
        "contraindicacion": "Hipersensibilidad conocida a anestésicos locales de tipo amida o a los otros componentes de la fórmula",
        "concentracion": "20 mg / ml",
        "unidadesEnvase": 20,
        "precioCompra": 28.86,
        "precioVenta": 306,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 6,
        "nombre": "Ambroxol",
        "nombreGenerico": "Ambroxol",
        "formaFarmaceutica": "solución",
        "unidadMedida": "Mililitro",
        "presentacion": "Envase con 120 ml y dosificador",
        "principalIndicacion": "Bronquitis",
        "contraindicacion": "Hipersensibilidad al fármaco",
        "concentracion": "300 mg/100 ml",
        "unidadesEnvase": 120,
        "precioCompra": 215.79,
        "precioVenta": 277,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 7,
        "nombre": "Metronidazol",
        "nombreGenerico": "Metronidazol",
        "formaFarmaceutica": "óvulo o tableta vaginal",
        "unidadMedida": "Óvulo",
        "presentacion": "Envase con 10 óvulos o tabletas",
        "principalIndicacion": "Tricomoniasis vaginal",
        "contraindicacion": "Hipersensibilidad al fármaco",
        "concentracion": "500 mg",
        "unidadesEnvase": 10,
        "precioCompra": 616.72,
        "precioVenta": 973,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 8,
        "nombre": "Nitrofural",
        "nombreGenerico": "Nitrofural",
        "formaFarmaceutica": "Tableta",
        "unidadMedida": "Óvulo",
        "presentacion": "Envase con 6 óvulos",
        "principalIndicacion": "Vaginitis bacteriana",
        "contraindicacion": "Hipersensibilidad al fármaco",
        "concentracion": "6 mg",
        "unidadesEnvase": 6,
        "precioCompra": 117.98,
        "precioVenta": 213,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 9,
        "nombre": "Ibuprofeno",
        "nombreGenerico": "Ibuprofeno",
        "formaFarmaceutica": "cápsula",
        "unidadMedida": "Miligramo",
        "presentacion": "Envase con 30 cápsulas",
        "principalIndicacion": "Dolor de leve a moderado",
        "contraindicacion": "NINGUNA",
        "concentracion": "400 mg",
        "unidadesEnvase": 30,
        "precioCompra": 29.3,
        "precioVenta": 537,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    },
    {
        "idProducto": 10,
        "nombre": "Montelukast",
        "nombreGenerico": "Montelukast sódico",
        "formaFarmaceutica": "comprimido recubierto",
        "unidadMedida": "Comprimido",
        "presentacion": "Envase con 30 comprimidos",
        "principalIndicacion": "Asma bronquial",
        "contraindicacion": "Hipersensibilidad al fármaco. No es de primera elección en el ataque agudo de asma, No se recomienda en menores de 6 años, ni durante la lactancia",
        "concentracion": "10 mg",
        "unidadesEnvase": 12,
        "precioCompra": 250.52,
        "precioVenta": 570,
        "foto": "",
        "rutaFoto": "",
        "codigoBarras": "",
        "estatus": 1
    }
];

//Esta funcion nos va a servir para inicializar el modulo
//de productos
export function inicializar()
{
    setDetalleProductoVisible(false);
    fillTableProducto();
}

export function saveProd()
{
    //Declaremos un objeto donde guardaremos los datos del producto:
    let prod = null;
    let posicion = -1; //Para saber si un producto ya existe o no.
    let idProd = 0;
    
    //Revisamos si hay un ID de producto:
    if (document.getElementById("txtIdProducto").value.trim().length > 0)
    {
        idProd = parseInt(document.getElementById("txtIdProducto").value.trim());
        posicion = buscarPosicionProductoPorId(idProd);
        
        //Si posicion es mayor o igual a 0, si encontramos un producto:_
        if (posicion >= 0)
            prod = productos[posicion];
        else
        {
            //Si no hay un producto con el ID descrito,
            //creamos una nueva instancia del objeto:
            prod = new Object();
            prod.idProducto = idProd;
            
            //Insertamos el objeto prod dentro del arreglo productos:
            productos.push(prod);
        }

        //Continuamos llenando datos del objeto
        //
        //Datos de los productos:
        //prod.productos.foto = document.getElementById("").value;
        //prod.idProducto = document.getElementById("txtIdProducto").value;
        prod.nombre = document.getElementById("txtNombreProd").value;
        prod.nombreGenerico = document.getElementById("txtNomGen").value;
        prod.formaFarmaceutica = document.getElementById("txtFormFarm").value;
        prod.unidadMedida = document.getElementById("txtUniMed").value;
        prod.presentacion = document.getElementById("txtPresentacion").value;
        prod.principalIndicacion = document.getElementById("txtIndiPrin").value;
        prod.contraindicacion = document.getElementById("txtContraIndi").value;
        prod.concentracion = document.getElementById("txtConcentracion").value;
        prod.unidadesEnvase = document.getElementById("txtUniEnvase").value;
        prod.precioVenta = document.getElementById("txtPrecioUnitario").value;
        prod.estatus = document.getElementById("cmbEstatus").value;
        prod.codigoBarras = document.getElementById("txtCodBarras").value;

        //Refrescamos la tabla del catalogo
        fillTableProducto();

        Swal.fire('Movimiento Realizado', 'Datos del producto Actualizados correctamente.', 'success');
        }
    else
    {
        Swal.fire('Verificaci&oacute;n de datos requerida.',
                  'Debe agregar un ID al producto (Valor n&uacute;merico).',
                  'warning');
    }
}

export function deleteProducto()
{
    let posicion = -1;
    let idProd = 0;
    
    //Revisamos si hay un ID de producto:
    if (document.getElementById("txtIdProducto").value.trim().length > 0)
    {
        //Recuperamos el ID del producto que deseamos eliminar:
        idProd = parseInt(document.getElementById("txtIdProducto").value.trim());
        
        //Buscamos la posicion del producto con ese ID:
        posicion = buscarPosicionProductoPorId(idProd);
        
        //Si la posicion del producto existe, lo quitamos del arreglo:
        if (posicion>= 0)
        {
            productos.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de producto Eliminado.', 'success');
            fillTableProducto();
        }
        else
        {
            Swal.fire('', 'El ID de producto especificado no existe.', 'warning');
        }
    }
    else
    {
        Swal.fire('', 'Especifique un ID de producto.', 'warning');
    }
}

export function getProducto()
{

}


//Rellena la tabla con prooductos
//con el arreglo.
function fillTableProducto()
{
    //Aqui vamos a ir guardando el contenido del
    //tbody de la tabla empleados.
    let contenido1 = '';

    //recorremos el arreglo elemento por elemento.
    for (let i = 0; i < productos.length; i++)
    {
        contenido1 += '<tr>' +
                '<td>' + productos[i].nombre + '</td>' + '' +
                '<td>' + productos[i].formaFarmaceutica +'</td>' + '' +
                '<td>' + productos[i].presentacion +'</td>' + '' +
                '<td>' + productos[i].concentracion +'</td>' + '' +
                '<td>' + productos[i].principalIndicacion +'</td>' + '' +
                '<td>' + productos[i].precioVenta+'</td>' + '' +
                '<td>' + 
                    '<a href="#" class="text-info" onclick="cm.cargarDetalleProducto('+ i +');"><i class=" h4 fa fa-brands fa-wpforms"></i></a>' + 
                '</td>' +
                '</tr>';
    }

    document.getElementById("tbodyProductos").innerHTML = contenido1;
}

export function cargarDetalleProducto(posicion2)
{
    //Recuperamos al empleado en la posicion indicada:
    let prod = productos[posicion2];
    
    //LLenamos las cajas de texto y demas controles con los datos del
    //producto que recuperamos previamente.
    
    //Datos de productos:
    //document.getElementById("").value = prod.productos.foto;
    document.getElementById("txtIdProducto").value = prod.idProducto;
    document.getElementById("txtNombreProd").value = prod.nombre;
    document.getElementById("txtNomGen").value = prod.nombreGenerico;
    document.getElementById("txtFormFarm").value = prod.formaFarmaceutica;
    document.getElementById("txtUniMed").value = prod.unidadMedida;
    document.getElementById("txtPresentacion").value = prod.presentacion;
    document.getElementById("txtIndiPrin").value = prod.principalIndicacion;
    document.getElementById("txtContraIndi").value = prod.contraindicacion;
    document.getElementById("txtConcentracion").value = prod.concentracion;
    document.getElementById("txtUniEnvase").value = prod.unidadesEnvase;
    document.getElementById("txtPrecioUnitario").value = prod.precioVenta;
    document.getElementById("cmbEstatus").value = prod.estatus;
    document.getElementById("txtCodBarras").value = prod.codigoBarras;
    
    setDetalleProductoVisible(true);
}

export function clearFormProd()
{
    //document.getElementById("").value = '';
    document.getElementById("txtIdProducto").value = '';
    document.getElementById("txtNombreProd").value = '';
    document.getElementById("txtNomGen").value = '';
    document.getElementById("txtFormFarm").value = '';
    document.getElementById("txtUniMed").value = '';
    document.getElementById("txtPresentacion").value = '';
    document.getElementById("txtIndiPrin").value = '';
    document.getElementById("txtContraIndi").value = '';
    document.getElementById("txtConcentracion").value = '';
    document.getElementById("txtUniEnvase").value = '';
    document.getElementById("txtPrecioUnitario").value = '';
    document.getElementById("cmbEstatus").value = '';
    document.getElementById("txtCodBarras").value = '';
}

//Busca la posicion de un objeto producto
//con base a la prioridad de ID y la devuelve.
//Si no se encuentra el ID buscado,
//el metodo devuelve -1.
function buscarPosicionProductoPorId(idProducto)
{
    //let pos = -1;
    
    for (let i = 0; i < productos.length; i++)
    {
        if (productos[i].idProducto === idProducto)
            return i;
    }
    return -1;
}

export function setDetalleProductoVisible(valor1)
{
    if(valor1 === true)
    {
        //Ocultamos la seccion del catalogo de productos:
        document.getElementById('divCatalogoProductos').style.display = 'none';
        
        //Mostramos la seccion del detalle:
        document.getElementById('divDetalleProducto').style.display = '';
    }
    else
    {
        //Ocultamos la seccion del detalle:
        document.getElementById('divDetalleProducto').style.display = 'none';
        
        //Mostramos la seccion del catalogo de productos:
        document.getElementById('divCatalogoProductos').style.display = '';
    }
}

export function clearAndShowDetalleProducto()
{
    clearFormProd();
    setDetalleProductoVisible(true);
}
