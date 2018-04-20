$( document ).ready(function() {
    

var myjson;
$.getJSON("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function(json){
    myjson = json;
});


    $("div.ethvalue").html(myjson);

});










});