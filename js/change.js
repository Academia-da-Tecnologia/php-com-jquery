$(document).ready(function() {

    /*
     * this
     * change
     * val
     */

    $('#texto').hide();

    $("#status_texto").on('change', function() {
        var status = $(this).val();
        
        //console.log(typeof(status));
        //console.log(typeof('mostrar'));
        //console.log(status.length);
        //var divs = $('div');
        
        console.log(divs.length);
        if (status === 'mostrar') {
            $("#texto").show();
        } else {
            $("#texto").hide();
        }
    });


    /*
     $("#cor").on('change', function() {
     var cor = $(this).val();
     $('h2').css({'background-color': cor, 'color': '#FFF'});
     });
     */

});