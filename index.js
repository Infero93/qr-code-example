var $ = require("jquery");
var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')
 
function generateQRCode(value) {
    console.log("Generating qrcode for value: " + value);
    QRCode.toCanvas(canvas, value, function (error) {
        if (error) console.error(error)
      })
}

$("#qrvalue").keypress(function (e) {
    if (e.which == 13) {
        generateQRCode($(this).val());
        e.preventDefault();
        return false;
    }
});

$(document).ready(function()    {
    let value = $("#qrvalue").val();
    generateQRCode(value)
});