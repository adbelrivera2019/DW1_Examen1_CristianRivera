function cargarDatosPedido(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Pedido </th> "+
                        "<th> Fecha Pedido </th> "+
                        "<th> Fecha Entrega</th> "+
                        "<th> Id Estado </th> "+
                        "<th> Id Cliente </th> "+
                        "<th> Id Empleado </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/pedido",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_pedido + "</td>" +
                                "<td>" + data[i].fecha_pedido+ "</td>"+
                                "<td>" + data[i].fecha_entrega+ "</td>"+
                                "<td>" + data[i].id_estado+ "</td>"+
                                "<td>" + data[i].id_cliente+ "</td>"+
                                "<td>" + data[i].id_empleado + "</td>" +
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePedido").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosPedido(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pedido : $("#idpedido").val(),
        fecha_pedido : $("#fechap").val(),
        fecha_entrega : $("#fechae").val(),
        id_estado : $("#idestado").val(),
        id_cliente : $("#idcliente").val(),
        id_empleado: $("#idempleadop").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/pedido",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pedido "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPedido();

}


function actualizarDatosPedido(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_pedido : $("#idpedido").val(),
        fecha_pedido : $("#fechap").val(),
        fecha_entrega : $("#fechae").val(),
        id_estado : $("#idestado").val(),
        id_cliente : $("#idcliente").val(),
        id_empleado: $("#idempleadop").val()
    };
    let id = $("#idpedido").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/pedido/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pedido "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPedido();

}

function borrarDatosPedido(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idpedido").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/pedido/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pedido "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPedido();

}