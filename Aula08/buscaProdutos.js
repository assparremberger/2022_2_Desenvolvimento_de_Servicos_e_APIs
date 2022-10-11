var mysql = require('mysql');

var conn = mysql.createConnection( {
    host : "localhost" ,
    user : "root" ,
    password : "" ,
    database : "loja"
} );

conn.connect( function(erro){
    if( !erro ){
        var consulta = "SELECT * FROM produtos ORDER BY nome";
        conn.query( consulta , function( err , result, fields ){
            if( !err ){
                console.log( result );
            }else{
                console.log( err );
            }
        } );
    }else{
        console.log(erro);
    }
} );
