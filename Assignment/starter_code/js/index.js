$(document).ready(function(){
    console.log("Ready!!!!");
    /*$('#miniNav').hide();*/

    $('#miniNav').click(relaxr);

    function relaxr(){
    event.preventDefault();
    $('#mainNav').toggle();
         }

});