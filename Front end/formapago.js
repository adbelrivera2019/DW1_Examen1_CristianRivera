function cargarDatosFPago(){

    var cuerpoTabla = " <thead> "+
                        "<tr> " + 
                        "<th> Id Cliente </th> "+
                        "<th> Descripcion </th> "
                        "</tr> "
                        +" </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/crivera/api/formapago",
        success: function(data){

            for (var i = 0; i < data.length ; i++ ){

                cuerpoTabla += " <tr> " +
                                "<td>" + data[i].id_formapago+ "</td>" +
                                "<td>" + data[i].descripcion+ "</td>"+
                                "</tr>";

            }

            cuerpoTabla += " </tbody>";

            $("#reporteFPago").html(cuerpoTabla);
            

        },
        dataType: "json"
      });

}


function insertarDatosFPago(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_formapago : $("#idformapago").val(),
        descripcion: $("#descripcion").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/crivera/api/formapago",
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

      cargarDatosFPago();

}


function actualizarDatosFPago(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
        id_formapago : $("#idformapago").val(),
        descripcion: $("#descripcion").val()
    };
    let id = $("#idformapago").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/crivera/api/formapago/"+id,
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

      cargarDatosFPago();

}

function borrarDatosFPago(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idformapago").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/crivera/api/formapago/"+id,
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

      cargarDatosFPago();

}