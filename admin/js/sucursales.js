let sucursales = [
                    {
                        "id" : 100001,
                        "nombreSucursal" : "Sucursal central",
                        "nombreTitular" : "Oscar Villegas",
                        "rfcTitular" : "VIGO4875",
                        "calle" : "Monte de las cruces #275",
                        "colonia" : "Col.Miguel Hidalgo",
                        "ciudad" : "Leon",
                        "estado" : "Guanajuato",
                        "cp" : "36550",
                        "telefono" : "47712345677",
                        "longitud" : "21.063418219816178",
                        "latitud" : "-101.57411144948688",
                        "estatus" : 1
                    },
                    {
                        "id" : 100002,
                        "nombreSucursal" : "Sucursal Altacia",
                        "nombreTitular" : "Roberto Gomez",
                        "rfcTitular" : "GORB1457",
                        "calle" : "Jacarandas #275",
                        "colonia" : "Col.Jardines",
                        "ciudad" : "Leon",
                        "estado" : "Guanajuato",
                        "cp" : "36612",
                        "telefono" : "4792365687",
                        "longitud" : "31.063418219814785",
                        "latitud" : "-80.57411144978942",
                        "estatus" : 1
                    },
                    {
                        "id" : 100003,
                        "nombreSucursal" : "Sucursal Metropolitano",
                        "nombreTitular" : "Damian Lopez",
                        "rfcTitular" : "LODA7532",
                        "calle" : "Metropolitano #3023",
                        "colonia" : "Col.Monte bello",
                        "ciudad" : "Leon",
                        "estado" : "Guanajuato",
                        "cp" : "36678",
                        "telefono" : "4578964512",
                        "longitud" : "201.784512219816178",
                        "latitud" : "-45.95175344948688",
                        "estatus" : 1
                    }
    
];


//Esta funcion nos sirve para inicializar el modulo
//de Sucursales.
export function inicializar()
{
    setDetalleSucursalVisible(false);
    fillTableSucursal();
}

export function saveSucursal()
{
    //Declaramos un objeto donde guardaremos los datos de Sucursal.
    let suc = null;
    let posicion = -1; //Para saber si una sucursal ya existe o no existe. 
    let idSucursal = 0;
    
    //Revisamos si hay un id Sucursal
    if (document.getElementById("txtId").value.trim().length > 0)
    {
        idSucursal = parseInt(document.getElementById("txtId").value.trim());
        
        posicion = buscarPosicionSucursalPorId(idSucursal);
        
        //Si la posicion es mayor a 0 si encontramos la Sucursal
        if (posicion >= 0)
            suc = sucursales[posicion];
        else
        {
            //si no hay una sucursal con el id escrito 
            //creamos una nueva instancia del objeto
            suc = new Object();
            suc.id = idSucursal;
  
            //insertamos el objeto suc dentro del arreglo de Sucursal
            sucursales.push(suc);
        }
            //continuar llenando los datos del objeto
            //suc.id = document.getElementById("txtId").value;
            suc.nombreSucursal = document.getElementById("txtNombreSucursal").value;
            suc.nombreTitular = document.getElementById("txtNombreTitular").value;
            suc.rfcTitular = document.getElementById("txtRfcTitular").value;
            suc.calle = document.getElementById("txtCalle").value;
            suc.colonia = document.getElementById("txtColonia").value;
            suc.ciudad = document.getElementById("txtCiudad").value;
            suc.estado = document.getElementById("txtEstado").value;
            suc.cp = document.getElementById("txtCp").value;
            suc.telefono = document.getElementById("txtTelefono").value;
            suc.longitud = document.getElementById("txtLongitud").value;
            suc.latitud = document.getElementById("txtLatitud").value;
            suc.estatus = document.getElementById("cmbEstatus").value;
            
            //Refrescamos el catalogo de sucursal:
            fillTableSucursal();
            
            Swal.fire('MovimientoRealizado','Datos del empleado Actualizados correctamente.','success');
    }
        else
    {
            Swal.fire('Verificaci&oacute;n de datos requerida.','Debe agregar un Id a la sucursal(Valor n&uacute;merico).','warning');
                
    }        
}

export function deleteSucursal()
{
    let posicion = -1;
    let idSucursal = 0 ;
    
    //Revisamos si hay un ID de Sucursal
    if (document.getElementById("txtId").value.trim().length > 0)
    {
        //Recumeramos el id de la sucursal que deseamos eliminar
        idSucursal = parseInt(document.getElementById("txtId").value.trim());
        
        //buscar la posicion del empleado con ese id
        posicion = buscarPosicionSucursalPorId(idSucursal);
        
        //si la posocion del empleado existe, lo quitamos del arreglo 
        if (posicion >= 0)
        {
            sucursales.splice(posicion, 1);
            Swal.fire('Movimiento realizado', 'Registro de la sucursal eliminado', 'success');
            fillTableSucursal();
        }
        else
        {
            Swal.fire('', 'El Id dela sucursal especificado no existe', 'warning');
        }
        }
        else
        {
            Swal.fire('', 'Especifique un ID de la sucursal', 'warning');
        }
}

export function getSucursal()
{
    
}

function fillTableSucursal()
{
    //Aqui vamos a guardar el contenido
    //del tbody de la tabla sucursal
    
    let contenido = '' ; 
    
    //Recorremos el arreglo elemento por elemento
    for ( let i = 0; i < sucursales.length; i++)
    {
        contenido += '<tr>' +
                                '<td>'+ sucursales[i].nombreSucursal + '</td>' +
                                '<td>'+ sucursales[i].id + '</td>'+
                                '<td>'+ sucursales[i].nombreTitular + '</td>'+
                                
                                '<td>'+ 
                                        sucursales[i].calle + ' ' + 
                                        sucursales[i].colonia + ' ' + 
                                        sucursales[i].cp + ' ' + 
                                        sucursales[i].ciudad + ' ' + 

                                '</td>'+
                                '<td>'+ sucursales[i].telefono + '</td>'+
                                '<td>'+
                                        '<a href="#" class="text-info" onclick="cm.cargarDetallesSucursal(' + i + ');"><i class="h4 fa-solid fa-house-circle-exclamation"></i></a>'+
                                '</td>'+
                     '</tr>';           
    }
    
    document.getElementById("tbodySucursales").innerHTML = contenido;
}


export function cargarDetallesSucursal(posicion)
{
    //Recuperamos la sucursal en la posicion indicada
    let suc = sucursales[posicion];
    
    //llenamos las cajas de texto y demas controles con los datos del 
    //empleado que recuperamos previamente:
    document.getElementById("txtId").value = suc.id;
    document.getElementById("txtNombreSucursal").value = suc.nombreSucursal;
    document.getElementById("txtNombreTitular").value = suc.nombreTitular;
    document.getElementById("txtRfcTitular").value = suc.rfcTitular;
    document.getElementById("txtCalle").value = suc.calle;
    document.getElementById("txtColonia").value = suc.colonia;
    document.getElementById("txtCiudad").value = suc.ciudad;
    document.getElementById("txtEstado").value = suc.estado;
    document.getElementById("txtCp").value = suc.cp;
    document.getElementById("txtTelefono").value = suc.telefono;
    document.getElementById("txtLongitud").value = suc.longitud;
    document.getElementById("txtLatitud").value = suc.latitud;
    document.getElementById("cmbEstatus").value = suc.estatus;
    
    setDetalleSucursalVisible(true);
}


export function clearForm()
{
    document.getElementById("txtId").value ='';
    document.getElementById("txtNombreSucursal").value = '';
    document.getElementById("txtNombreTitular").value ='';
    document.getElementById("txtRfcTitular").value = '';
    document.getElementById("txtCalle").value = '';
    document.getElementById("txtColonia").value = '';
    document.getElementById("txtCiudad").value = '';
    document.getElementById("txtEstado").value = '';
    document.getElementById("txtCp").value = '';
    document.getElementById("txtTelefono").value = '';
    document.getElementById("txtLongitud").value = '';
    document.getElementById("txtLatitud").value = '';
    document.getElementById("cmbEstatus").value = ''; 
}

//Buscar la posicion de un objeto sucursal
//con base a la propiedad id y la devuelva
//si no se encuentra el id buscado
//el metodo devuelve -1.
function buscarPosicionSucursalPorId (id)
{
    //let pos = -1;
    
    for (let i = 0; i < sucursales.length; i++)
    {
        if (sucursales[i].id === id)
        return i ; 
    }
    return -1;
}


export function setDetalleSucursalVisible(valor)
{
    if (valor === true)
    {
       //Ocultamos la seccion del catalogo de Sucursales:
        document.getElementById('divCatalogoSucursales').style.display = 'none'; 
        
        //Mostrar la seccion de detalles
        document.getElementById('divDetalleSucursales').style.display = '';
    }
    else
    {
        //Ocultamos la seccion del detalle:
        document.getElementById('divDetalleSucursales').style.display = 'none'; 
        
        //Mostrar la seccion de catalogo Sucursales 
        document.getElementById('divCatalogoSucursales').style.display = '';
    } 
    
}

export function clearAndShowDetalleSucursal()
{
    clearForm();
    setDetalleSucursalVisible(true); 
}