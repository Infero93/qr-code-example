var $ = require("jquery");
var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
 

$( "#qrvalue" ).keypress(function() {
    QRCode.toCanvas(canvas, $(this).val(), function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
});

