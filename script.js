var nameField = document.getElementById("name");
var kmsField = document.getElementById("kms");
var ageField = document.getElementById("age");
var button = document.getElementById("generate-ticket");

var passengerNameElement = document.getElementById("passenger-name");
var discountElement = document.getElementById("discount");
var wagonElement = document.getElementById("wagon");
var trainCodeElement = document.getElementById("train-code");
var priceElement = document.getElementById("price");

button.addEventListener('click', function() {
console.log(nameField)
console.log(nameField)
    var nameValue = nameField.value;
    var kmsValue = kmsField.value;
    var ageValue = ageField.value;

    var price = 0.21 * kmsValue;
    var discountDisplay = "tariffa ordinaria";

    if (ageValue === "min"){
        price *= 0.8;
        discountDisplay = "tariffa minori";
    } else if (ageValue === "over65") {
        price *= 0.6;
        discountDisplay = "tariffa over 65";
    }
        price = 'euro' + price.toFixed(2);

    var wagonNumber = Math.floor(Math.random()*12) +1;

    passengerNameElement.innerHTML = nameValue;
    discountElement.innerHTML = discountDisplay;
    wagonElement.innerHTML = wagonNumber;
    trainCodeElement.innerHTML = '19820';
    priceElement.innerHTML = price;
});
