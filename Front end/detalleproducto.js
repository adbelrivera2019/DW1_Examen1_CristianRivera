function cargarDatosDPedido(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Pedido </th> "+
                        "<th> Id Producto </th> "+
                        "<th> Cantidad </th> "+
                        "<th> Precio </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/detalles_pedido",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_pedido + "</td>" +
                                "<td>" + data[i].id_producto+ "</td>"+
                                "<td>" + data[i].cantidad+ "</td>"+
                                "<td>" + data[i].precio + "</td>" +
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteDPedido").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosDPedido(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pedido : $("#idpedido").val(),
        id_producto : $("#idproducto").val(),
        cantidad : $("#Cantidad").val(),
        precio: $("#precio").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/detalles_pedido",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Detales Pedido "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosDPedido();

}


function actualizarDatosDPedido(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pedido : $("#idpedido").val(),
        id_producto : $("#idproducto").val(),
        cantidad : $("#Cantidad").val(),
        precio: $("#precio").val()
    };
    let id = $("#idpedido").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/detalles_pedido/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Detalles Pedido "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosDPedido();

}

function borrarDatosDPedido(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idpedido").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/detalles_pedido/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Detalles Pedido "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosDPedido();

}