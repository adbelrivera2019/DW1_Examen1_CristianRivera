const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

//************************    TABLA CLIENTE    ************************
//*********************************************************************
//************* GET CLIENTE TODOS **************
app.get('/api/cliente/', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from cliente";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

//************* GET CLIENTE ID **************
app.get('/api/cliente/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from cliente where id_cliente = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* POST CLIENTE **************
app.post('/api/cliente/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "insert into cliente " +
            " (dni,nombre_cliente, dirección, telefono) " +
            " values (?, ?, ?, ?)";
    
    let parametros = [  req.body.dni, 
                        req.body.nombre_cliente, 
                        req.body.dirección,
                        req.body.telefono
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );
//************* PUT CLIENTE **************
app.put('/api/cliente/:id', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = " update cliente"+
                " set dni = ?, " +
                " nombre_cliente = ?,  "+
                " dirección = ?, "+
                " telefono = ?"+
                " where id_cliente = ?";

                let parametros = [req.body.dni, 
                    req.body.nombre_cliente, 
                    req.body.dirección,
                    req.body.telefono,
                    req.params.id
                ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* DELETE CLIENTE **************
app.delete('/api/cliente/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "delete from cliente where id_cliente = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//************************    TABLA PROCURADOR    ************************
//*********************************************************************
//************* GET PROCURADOR TODOS **************
app.get('/api/procurador/', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from procurador";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});
//************* GET PROCURADOR ID **************
app.get('/api/procurador/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from procurador where id_procurador = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* POST PROCURADOR **************
app.post('/api/procurador/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "insert into procurador " +
            " (dni,nombre_procurador, dirección, telefono) " +
            " values (?, ?, ?, ?)";
    
    let parametros = [  req.body.dni, 
                        req.body.nombre_procurador, 
                        req.body.dirección,
                        req.body.telefono
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );
//************* PUT PROCURADOR **************
app.put('/api/procurador/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = " update procurador set dni = ?, " +
                " nombre_procurador = ?,  "+
                " dirección = ?, "+
                " telefono = ? "+
                " where id_procurador = ? ";

    let parametros = [  req.body.dni, 
                        req.body.nombre_procurador, 
                        req.body.dirección, 
                        req.body.telefono,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* DELETE PROCURADOR **************
app.delete('/api/procurador/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "delete from procurador where id_procurador = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//************************    TABLA ESTADO     ************************
//*********************************************************************
//************* GET ESTADO *  **************
app.get('/api/estado/', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from estado";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});
//************* GET ESTADO ID **************
app.get('/api/estado/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from estado where id_estado = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* POST ESTADO **************
app.post('/api/estado/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "insert into estado " +
            " (descripcion) " +
            " values (?)";
    
    let parametros = [  
                        req.body.descripcion
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );
//************* PUT ESTADO **************
app.put('/api/estado/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = " update estado set descripcion = ? " +
                " where id_estado = ? ";

    let parametros = [  req.body.descripcion,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* DELETE ESTADO **************
app.delete('/api/estado/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "delete from estado where id_estado = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//************************    TABLA ASUNTO     ************************
//*********************************************************************
//************* GET ASUNTO *  **************
app.get('/api/asunto/', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from asunto";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});
//************* GET ASUNTO ID **************
app.get('/api/asunto/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from asunto where no_expediente = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* POST ASUNTO **************
app.post('/api/asunto/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "insert into asunto " +
            " (id_cliente, fecha_inicio, fecha_finalización,id_estado) " +
            " values (?, ?, ?, ?)";
    
    let parametros = [  
                        req.body.id_cliente, 
                        req.body.fecha_inicio,
                        req.body.fecha_finalización,
                        req.body.id_estado
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );
//************* PUT ASUNTO **************
app.put('/api/asunto/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = " update asunto set id_cliente = ?, " +
                " fecha_inicio = ?,  "+
                " fecha_finalización = ?, "+
                " id_estado = ? "+
                " where no_expediente = ? ";

    let parametros = [  req.body.id_cliente, 
                        req.body.fecha_inicio, 
                        req.body.fecha_finalización, 
                        req.body.id_estado,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* DELETE ASUNTO **************
app.delete('/api/asunto/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "delete from asunto where no_expediente = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

//************************    TABLA ASUNTO_PROCURADORES     ************************
//**********************************************************************************
//************* GET ASUNTOS_PROCURADORES *  **************
app.get('/api/asuntos_procuradores/', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from asuntos_procuradores";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});
//************* GET ASUNTO_PROCURADORES ID **************
app.get('/api/asuntos_procuradores/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "select * from asuntos_procuradores where no_expediente = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* POST ASUNTO_PROCURADORES **************
app.post('/api/asuntos_procuradores/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "insert into asuntos_procuradores " +
            " (no_expediente,id_procurador) " +
            " values (?, ?)";
    
    let parametros = [  
                        req.body.no_expediente,
                        req.body.id_procurador
                    ];
    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );
//************* PUT ASUNTO_PROCURADORES **************
app.put('/api/asuntos_procuradores/:id', (req, res)=>{
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = " update asuntos_procuradores set id_procurador = ? " +
                " where no_expediente = ? ";

    let parametros = [  req.body.id_procurador,
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
//************* DELETE ASUNTO_PROCURADORES **************
app.delete('/api/asuntos_procuradores/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "gabineteabogados"
    });

    let sql = "delete from asuntos_procuradores where no_expediente = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});
app.listen(3000);