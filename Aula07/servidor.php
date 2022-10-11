<?php 

    header("Content-type: application/json");

    $user = "root";
    $password = "";
    $database = "loja";
    $host = "localhost";
    
    $conn = mysqli_connect($host, $user, $password, $database);

    if( $conn ){

      
        if( isset( $_GET["listar"] )  ){

            $sql = "SELECT * FROM produtos ";
            
            $result = mysqli_query($conn, $sql);
            $array = array();
            while( $linha = mysqli_fetch_assoc($result)){
                $array[] = $linha;
            }
            echo '{ "produtos" : '.json_encode($array).' }' ;
        }


        if( isset( $_GET["cadastrar"]) ){
            $nome = $_GET["nome"];
            $preco = $_GET["preco"] ;
            $qtd = $_GET["quantidade"];
            $sql = "INSERT INTO produtos (nome, preco, quantidade) 
                    VALUES ( '$nome' , $preco , $qtd ) ";
            mysqli_query($conn, $sql);
            echo '{ "resposta" : "OK" }';
        }

        mysqli_close( $conn );

    }else{
        echo "Erro ao conectar o banco!";
    }

?>