// ==UserScript==
// @name           Youtube Ripper
// @namespace      http://*.youtube.*
// @include        http://*.youtube.*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// ==/UserScript==

var youtubeRipper = {'tmpl':
                     '<embed src="{url}"></embed>'};

$(document).ready(function() {
    var regex = /\|(http:[^|]+id=[^,|]+)\|/;
    var txt = $('script')[8].innerHTML;
    match = regex.exec(txt);

    eval('var url = ' + match[0].replace(/\|/g,'\"'));

    youtubeRipper.playerContainer = $('#watch-player');
    youtubeRipper.original = youtubeRipper.playerContainer.html();
    youtubeRipper.url = url;
    loadPlayerInterface();
});

function testAppl() {
    alert('Check');
}

function loadPlayerInterface() {
    youtubeRipper.playerContainer.html(
        youtubeRipper.tmpl.replace(/\{url\}/g, youtubeRipper.url));
}
