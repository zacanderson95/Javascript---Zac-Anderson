const PERSON_NAME = "Name here";
const THREES = 10;
const TWOS = 10;
const ATTEMPTS = 35;


window.onload = initialize;

document.getElementById("touch").addEventListener("click", function (event) {
    calculate();
    event.preventDefault();
});

function initialize() {
    document.getElementById("Person").value = PERSON_NAME;
    document.getElementById("Threes_Made").value = THREES;
    document.getElementById("Twos_Made").value = TWOS;
    document.getElementById("Attempts").value = ATTEMPTS;
};

function calculate() {
    let personName = document.getElementById("Person").value;
    var threesMade = document.getElementById("Threes_Made").value;
    var twosMade = document.getElementById("Twos_Made").value;
    var fgAttempts = document.getElementById("Attempts").value;

    var twos = parseInt(twosMade);
    var threes = parseInt(threesMade);
    var fga = parseInt(fgAttempts);

    var fgRegular = (twos + threes)/(fga);
    var fgMade = twos + threes;
    var eFG = (fgMade + .5 * threes)/(fga);

    let text = personName +" has an effective field goal percentage of " + eFG +"%";
    var regFG = (document.getElementById("fg").checked) ? fgRegular : "N/A";
    document.getElementById("output").innerHTML = text +" with a regular field goal percentage of " + regFG + "%";
};