$(document).ready(function() {
    /* 
     JSON (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação leve de troca de dados. 
     Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. 
     Está baseado em um subconjunto da linguagem de programação JavaScript, Standard ECMA-262 3a Edição -Dezembro - 1999. 
     JSON é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares às 
     linguagens C e familiares, incluindo C++, C#, Java, JavaScript, Perl, Python e muitas outras. Estas propriedades 
     fazem com que JSON seja um formato ideal de troca de dados.
     JSON está constituído em duas estruturas:
     
     1 - Uma coleção de pares nome/valor. Em várias linguagens, isto é caracterizado como um object, record, struct, 
     dicionário, hash table, keyed list, ou arrays associativas.
     
     2 - Uma lista ordenada de valores. Na maioria das linguagens, isto é caracterizado como uma array, vetor, 
     lista ou sequência.
     
     Estas são estruturas de dados universais. Virtualmente todas as linguagens de programação modernas as suportam, 
     de uma forma ou de outra. É aceitavel que um formato de troca de dados que seja independente de linguagem de 
     programação se baseie nestas estruturas.
     
     Em JSON, os dados são apresentados desta forma:
     Um objeto é um conjunto desordenado de pares nome/valor. Um objeto começa com { (chave de abertura) e termina com } 
     (chave de fechamento). Cada nome é seguido por : (dois pontos) e os pares nome/valor são seguidos por , (vírgula).
     */

    $.getJSON('paginas/json.php', function(data) {
        
        var total_objetos = data.length;
        for(i = 0; i < total_objetos; i++){
            console.log(data[i].nome);
        }
        
        //$.each(data, function(k, v) {
           // console.log(data[k].telefone);
        //});
    });

    var container = $("#container");
    var mensagem = container.find("#mensagem");
    var dados = container.find("#dados");

    /*
     $.ajax({
     url: 'paginas/json.php',
     dataType: 'json',
     beforeSend: function() {
     mensagem.html('Carregando dados json');
     },
     success: function(data) {
     
     $.each(data, function(k, v){
     console.log(data[k].email);
     });
     
     }
     });
     
     */

});