function lerDados(){

    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            var dados = this.responseText;
            var conteudo =  '<table border="1">';
            conteudo +=     '   <th> ';
            conteudo +=     '       <td>Código</td> ';
            conteudo +=     '       <td>Nome</td> ';
            conteudo +=     '       <td>Preço</td> ';
            conteudo +=     '   </th>';
            console.log("passei 2");
            var produtos = dados.getElementsByTagName("produto");
           
            for( i = 0; i <= produtos.length ; i++ ){
                var id = produtos[i].getElementsByTagName("id");
                var nome = produtos[i].getElementsByTagName("nome");
                var preco = produtos[i].getElementsByTagName("preco");
                conteudo += "<tr>";
                conteudo+="<td>"+id[0].childNodes[0].nodeValue + "</td>"; 
                conteudo+="<td>"+nome[0].childNodes[0].nodeValue + "</td>";
                conteudo+="<td>"+preco[0].childNodes[0].nodeValue + "</td>";
                conteudo += "</tr>";
            }
            conteudo += "</table>";
            document.getElementById("minhaDiv").innerHTML = conteudo;

        }else{
            alert("ReadyState: " + this.readyState + " Status: " + this.status);
        }

    }; 
    xHttp.open("GET", "dados.xml", true);
    xHttp.send();
}