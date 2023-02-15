function cargarDatosCliente(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Cliente </th> "+
                        "<th> Nombre Cliente </th> "+
                        "<th> Apellido Cliente</th> "+
                        "<th> Ciudad </th> "+
                        "<th> Id Empleado </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/cliente",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_cliente + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "<td>" + data[i].apellido+ "</td>"+
                                "<td>" + data[i].ciudad+ "</td>"+
                                "<td>" + data[i].id_empleado + "</td>" +
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteCliente").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosCliente(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_cliente : $("#idcliente").val(),
        nombre : $("#nombrecliente").val(),
        apellido : $("#apellidocliente").val(),
        ciudad : $("#ciudadcliente").val(),
        id_empleado: $("#idempleadoc").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/cliente",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Cliente "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosCliente();

}


function actualizarDatosCliente(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_cliente : $("#idcliente").val(),
        nombre : $("#nombrecliente").val(),
        apellido : $("#apellidocliente").val(),
        ciudad : $("#ciudadcliente").val(),
        id_empleado: $("#idempleadoc").val()
    };
    let id = $("#idcliente").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/cliente/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Cliente "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosCliente();

}

function borrarDatosCliente(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idcliente").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/cliente/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Cliente "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosCliente();

}