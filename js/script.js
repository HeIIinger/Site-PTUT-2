// jQuery

$(document).ready(function() {
    $("#nav1 div:nth-child(2)").hide();
    $("#nav1 img").click(function(){
        $("#nav1 div:nth-child(2)").slideToggle();
    });
});

// Javascript

var map = L.map('map').setView([47.750545, 7.335529], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([47.814863, 7.101077]).addTo(map);
marker.bindPopup("<b>L'Oeil de la Sorcière</b><br>Thann");
var marker2 = L.marker([47.681529, 7.312515]).addTo(map);
marker2.bindPopup("<b>Le Grand Canon</b><br>Zillisheim");