$(document).ready(function() {

    var container = $("#container");
    var form_cadastro = container.find("#form_cadastro");
    var bt_cadastrar = form_cadastro.find("#bt_cadastrar");
    var mensagem = container.find("#mensagem");

    /*
     * $.post
     * $.get
     * 
     * 
     */

     bt_cadastrar.on('click', function(event){
        event.preventDefault();
        
        var nome = form_cadastro.find("#nome").val();
        var email = form_cadastro.find("#email").val();
        var telefone = form_cadastro.find("#telefone").val();
        
        if(nome.length === 0){
            mensagem.html('Nome pbrigatório');
        }else if(email.length === 0){
            mensagem.html('Email pbrigatório');
        }else if(telefone.length === 0){
            mensagem.html('Telefone obrigatório');
        }else{
        
        
         $.get('paginas/submit.php', {'nome' : nome, 'email' : email}, function(data){
               mensagem.html(data);
           });
        
           /*
           $.post('paginas/submit.php', form_cadastro.serialize(), function(data){
               mensagem.html(data);
           });
        
            $.post('paginas/submit.php', form_cadastro.serialize(), function(data){
                mensagem.html(data);
            }).done(function(){
                mensagem.html('Cadastrado com sucesso');
            }).fail(function(){
                mensagem.html('Ocorreu um erro ao cadastrar');
            });
            */
            //form_cadastro.submit();
        }
        
        
    });
    
    
 });
