function cargarDatosPago(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Cliente </th> "+
                        "<th> Id Forma Pago </th> "+
                        "<th> Fecha Pago </th> "+
                        "<th> Total </th> "+
                        "<th> Id Pedido </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/pago",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_cliente + "</td>" +
                                "<td>" + data[i].id_formapago+ "</td>"+
                                "<td>" + data[i].fecha_pago+ "</td>"+
                                "<td>" + data[i].total + "</td>" +
                                "<td>" + data[i].id_pedido + "</td>" +
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePago").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosPago(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_cliente : $("#idcliente").val(),
        id_formapago : $("#idformapago").val(),
        fecha_pago : $("#fechap").val(),
        total: $("#total").val(),
        id_pedido: $("#idpedido").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/pago",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pago "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPago();

}


function actualizarDatosPago(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_cliente : $("#idcliente").val(),
        id_formapago : $("#idformapago").val(),
        fecha_pago : $("#fechap").val(),
        total: $("#total").val(),
        id_pedido: $("#idpedido").val()
    };
    let id = $("#idcliente").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/pago/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pago "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPago();

}

function borrarDatosPago(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idcliente").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/pago/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Pago "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosPago();

}