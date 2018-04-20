$( document ).ready(function() {
    
var ethjson;
$.getJSON("api.coinmarketcap.com/v1/ticker/ethereum/?q=price_usd", function(json){
    ethjson = json;
});


    $("div.ethvalue").html(ethjson);

});










});