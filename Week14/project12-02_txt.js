"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: Zac Anderson
      Date:   12/04/2022  

      Filename: project12-02.js
*/

$( "#cValue" ).change(function() {
      let celsius = $("input#cValue").val();
      let fahrenheit = (celsius*1.8) + 32;
      $("#fValue").val(fahrenheit.toFixed(0));
    });

$("#fValue").change(function() {
      let fahrenheit = $("input#fValue").val();
      let celsius = (fahrenheit - 32)/(1.8);
      $("#cValue").val(celsius.toFixed(0));
});
