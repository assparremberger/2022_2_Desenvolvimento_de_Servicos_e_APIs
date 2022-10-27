const restify = require("restify");
const errors = require("restify-errors");

const servidor = restify.createServer({
    name : 'Lojinha' ,
    version : '1.0.0'
});

servidor.use( restify.plugins.acceptParser(servidor.acceptable) );
servidor.use( restify.plugins.queryParser() );
servidor.use( restify.plugins.bodyParser() );

servidor.listen(8001, function(){
    console.log("%s executando em %s", servidor.name, servidor.url);
} );


const knex = require("knex")({
    client : 'mysql' ,
    connection : {
        host : 'localhost' ,
        user : 'root' ,
        password : '' ,
        database : 'loja'
    }
});

servidor.get("/" , (req, res) => {
    res.send("Bem-vindo à nossa Lojinha!");
});

servidor.get("/produtos" , (req, res, next) => {
    knex('produtos').then( (dados)=>{
        res.send( dados );
    } , next );
});

servidor.get("/produtos/:idProd" , (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('produtos')
        .where('id' , idProduto )
        .first()
        .then( (dados)=>{
            if( !dados ){
                return res.send( new errors.BadRequestError('Produto não encontrado!') );
            }
            res.send( dados );
        } , next );
});

servidor.del("/produtos/:idProd", (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('produtos')
        .where('id' , idProduto )
        .delete()
        .then( (dados)=>{
            if( !dados ){
                return res.send( new errors.BadRequestError('Produto não encontrado!') );
            }
            res.send( "Produto deletado" );
        } , next );
} );

servidor.put("/produtos/:idProd", (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('produtos')
        .where('id' , idProduto )
        .update( req.body )
        .then( (dados)=>{
            if( !dados ){
                return res.send( new errors.BadRequestError('Produto não encontrado!') );
            }
            res.send( "Produto editado" );
        } , next );
} );



servidor.post("/produtos", (req, res, next) => {
    knex('produtos')
        .insert( req.body )
        .then( (dados)=>{
//            if( !dados ){
//                return res.send(new errors.BadRequestError('Erro ao inserir o produto!'));
//            }
            res.send( "Produto inserido" );
        } , next );
} );

