function cargarDatosEstado(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Estado </th> "+
                        "<th> Descripcion </th> "
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/estado",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_estado+ "</td>" +
                                "<td>" + data[i].descripcion+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteEstado").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosEstado(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_formapago : $("#idestado").val(),
        descripcion: $("#descripcion").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/estado",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Forma Pago "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosEstado();

}


function actualizarDatosEstado(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_formapago : $("#idestado").val(),
        descripcion: $("#descripcion").val()
    };
    let id = $("#idestado").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/estado/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Forma Pago "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatosEstado();

}

function borrarDatosEstado(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idestado").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/estado/"+id,
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

      cargarDatosEstado();

}