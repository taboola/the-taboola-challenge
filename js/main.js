!function(win, doc) {
    'use strict';

    var datumSourceUri = 'http://10.150.20.141:8080/stats/clicks';


    /**
     * tryck
     *
     * prints each record
     */
    function tryck(response) {
         // print the first 10 entries
        response.data.length = 10;

        doc.querySelector('[data-type="exempel"]').innerHTML = response.data.map(function(d) {
            return '<div>\
            <span>Region: {region}</span>, \
            <span>Country: {countryName}</span>, \
            <span>city: {city}</span>, \
            <span>Source: {sourcePublisher}</span>, \
            <span>Target: {targetPublisher}</span>\
                </div>'.supplant(d);

        }).join('');
    }

    /**
     * general purpose substite template
     *
     * 'helo {name}'.supplant({name: 'John Christiansen'}) --> hello John Christiansen
     */
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g, function (a, b) {
            var r = o[b];
            return typeof r !== 'undefined' ? r : a;
        });
    };

    $.getJSON(datumSourceUri)
        .done(tryck);


}(window, document)