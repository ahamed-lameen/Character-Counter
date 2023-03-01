/**
*
* base.js
* @author - Lameen
* @date - 01/03/2023
**/

function characterCount() {
    var textField = document.getElementById("text-field").value;
    var charCount = document.getElementById("char-count");
    charCount.innerHTML = textField.length;
}