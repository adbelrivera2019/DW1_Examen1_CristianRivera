function cargarDatosEmpleados(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Empleado </th> "+
                        "<th> Nombre </th> "+
                        "<th> Apellido </th> "+
                        "<th> Id Sucursal </th> "+
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/empleado",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_empleado + "</td>" +
                                "<td>" + data[i].nombre+ "</td>"+
                                "<td>" + data[i].apellido+ "</td>"+
                                "<td>" + data[i].id_sucursal+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteEmpleado").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosEmpleados(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_empleado : $("#idempleado").val(),
        nombre : $("#nombreempleado").val(),
        apellido : $("#apellido").val(),
        id_sucursal : $("#id_sucursal").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/empleado",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Empleado "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosEmpleados();

}


function actualizarDatosEmpleados(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_empleado : $("#idempleado").val(),
        nombre : $("#nombreempleado").val(),
        apellido : $("#apellido").val(),
        id_sucursal : $("#id_sucursal").val()
    };
    let id = $("#idempleado").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/empleado/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Empleado "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosEmpleados();

}

function borrarDatosEmpleados(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idempleado").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/empleado/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Empleado "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosEmpleados();

}