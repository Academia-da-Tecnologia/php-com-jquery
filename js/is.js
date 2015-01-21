$(document).ready(function() {

    var container = $("#container");
    var lista = container.find('#lista');
    var check = container.find('.check');
    /*
     *target
     *is - é ou está
     *checked 
     *ul#lista - event.currantTarget
     *li - event.target
     */

    lista.on('click', function(event) {
        var alvo = $(event.target);
        if (alvo.is('li')) {
            alvo.css('background-color', '#900');
        }
    });


    check.on('click', function() {
        //console.log('Você clicou em '+ $(this).val());
        
        //if($(this).val() === 'maria'){
          //  alert('voce clicou em maria');
       // }else{
          //  console.log('voce clicou em '+$(this).val());
       // }
       
       if($(this).is(':checked')){
            console.log($(this).val() + ' esta selecionado');
       }else{
            console.log($(this).val() + ' nao esta selecionado');
       }
        
    });




});