function cargarDatos(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Sucursal </th> "+
                        "<th> Ciudad </th> "+
                        "<th> Departamento </th> "+
                        "<th> Telefono </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/sucursal",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_sucursal + "</td>" +
                                "<td>" + data[i].ciudad+ "</td>"+
                                "<td>" + data[i].departamento+ "</td>"+
                                "<td>" + data[i].telefono+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reportePersona").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_sucursal : $("#id").val(),
        ciudad : $("#ciudad").val(),
        departamento : $("#departamento").val(),
        telefono : $("#telefono").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/sucursal",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Sucursal "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}


function actualizarDatos(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_sucursal : $("#id").val(),
        ciudad : $("#ciudad").val(),
        departamento : $("#departamento").val(),
        telefono : $("#telefono").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/sucursal/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Sucursal "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}

function borrarDatos(){

    jQuery.ajaxSetup({async:false});

    let id = $("#id").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/sucursal/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Sucursal "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos();

}