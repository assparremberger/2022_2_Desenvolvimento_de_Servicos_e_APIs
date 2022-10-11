function lerDados(){
    var xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var obj = JSON.parse( this.responseText );
            var conteudo = "Nome: " + obj.nome + "<br>";
            conteudo += "Cônjuge: " + obj.conjuge.nome + "<br>";
            conteudo += "Filhos: <br>";
            obj.filhos.forEach( filho => {
                conteudo += filho.nome + " -> idade: " + filho.idade + "<br>" ; 
            }); 
            conteudo += "Tempo desde as formaturas: <br>"
            obj.formaturas.forEach( ano => {
                conteudo += ( 2022 - ano ) + " ano(s) <br>"; 
            }); 

            document.getElementById("divDados").innerHTML = conteudo;
        }

    };
    xHttp.open("GET", "meuJSON.json", true);
    xHttp.send();
}