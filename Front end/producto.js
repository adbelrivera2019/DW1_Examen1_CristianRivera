function cargarDatosPro(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Producto </th> "+
                        "<th> Nombre </th> "+
                        "<th> Proveedor </th> "+
                        "<th> Descripcion </th> "+
                        "<th> Cantidad Bodega </th> "+
                        "<th> Precio </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/producto",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_producto + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "<td>" + data[i].proveedor+ "</td>"+
                                "<td>" + data[i].descripcion+ "</td>"+
                                "<td>" + data[i].cantidad_bodega+ "</td>"+
                                "<td>" + data[i].precio+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteProducto").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosPro(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_producto : $("#idproducto").val(),
        nombre : $("#nombre").val(),
        proveedor : $("#proveedor").val(),
        descripcion : $("#descripcion").val(),
        cantidad_bodega : $("#cantidad_bodega").val(),
        precio : $("#precio").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/producto",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Producto "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPro();

}


function actualizarDatosPro(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_producto : $("#id").val(),
        nombre : $("#nombre").val(),
        proveedor : $("#proveedor").val(),
        descripcion : $("#descripcion").val(),
        cantidad_bodega : $("#cantidad_bodega").val(),
        precio : $("#precio").val()
    };

    let id = $("#idproducto").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/producto/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Producto "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPro();

}

function borrarDatosPro(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idproducto").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/producto/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Producto "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPro();

}