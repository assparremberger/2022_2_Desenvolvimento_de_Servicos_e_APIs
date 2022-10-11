// $("#paragrafo").hide();
$("#p2").hide();
$("#s2").hide();

$("#btn").click( function(){
    //$("#paragrafo").fadeToggle(1000);
    $("#p2").slideToggle(3000 , function(){
        $("#s2").html("Sim!");
        $("#s2").fadeIn(3000);

    });

    $("#btn").text("<i>Olá</i>");
    $("#paragrafo").html( "Boa noite!" );
  //  alert( $("#txtNome").val() );
});

$("#btnAdicionar").click( function(){
    var item = "<li>"+ $("#prod").val() + "</li>";
    $("#produtos").append(item);
    $("#prod").val("");
});

