function ler() {
    var xhttp = new XMLHttpRequest();

    var divResult = document.getElementById("resultado");
    divResult.innerHTML = "Carregando...";

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            divResult.innerHTML = this.responseText;
        } else {
            divResult.innerHTML += "<br>Tivemos um probleminha!!!" + 
                this.status + " - " + this.statusText;
        }
    };
    xhttp.open("GET", "informacoes.txt", true);
    xhttp.send();
}