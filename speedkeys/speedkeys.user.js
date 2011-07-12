// ==UserScript==
// @name           Speedkeys
// @namespace      http://www.google.de/
// @include        http://speedtest.10-fast-fingers.com/
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

function start()
{
    var text = $('span[style="background: #ddd;"]').text();
    $('#eingabe').val(text);
}

$(document).ready(function () {
    $('#logo').append('<input type="button" value="Start the action">').click(
        function() {
            $('#eingabe').keypress(start);
        });
});
