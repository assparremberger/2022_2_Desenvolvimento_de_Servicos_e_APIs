function buscar(){
    var xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
//            console.log(this.responseText);

            var objJSON = JSON.parse( this.responseText );
            var produtos = objJSON.produtos; 
//          var produtos = JSON.parse( this.responseText ).produtos;

            var conteudo =  '<table border="1">';
            conteudo +=     '   <tr> ';
            conteudo +=     '       <th>Código</th> ';
            conteudo +=     '       <th>Nome</th> ';
            conteudo +=     '       <th>Preço</th> ';
            conteudo +=     '       <th>Quantidade</th> ';
            conteudo +=     '   </tr>';
            produtos.forEach( prod => {
                conteudo += '<tr> ' ;
                conteudo += '   <td>' + prod.id + '</td>';
                conteudo += '   <td>' + prod.nome + '</td>';
                conteudo += '   <td>' + prod.preco + '</td>';
                conteudo += '   <td>' + prod.quantidade + '</td>';
                conteudo += '</tr>';
            });
            conteudo += '</table>'

            document.getElementById("divProdutos").innerHTML = conteudo;
        }

    };
    xHttp.open("GET", "servidor.php?listar", true);
    xHttp.send();
}

function salvar(){
    var xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            buscar();
        }

    };

    var nome = document.getElementById("txtNome").value;
    var preco = document.getElementById("txtPreco").value;
    var qtd = document.getElementById("txtQuantidade").value;
    xHttp.open("GET", "servidor.php?cadastrar&nome=" + nome +
                        "&preco=" + preco + "&quantidade=" + qtd, true);
    xHttp.send();
}