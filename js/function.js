
$(document).ready(function() {
    $("ul").hide();
    $(".icono").click(function(e){
        e.preventDefault();
        $("ul").slideToggle();
    });
    
    $("h1").append("<span>Comprá las cosas desde tu casa y gana tiempo</span>");
});
