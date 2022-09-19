//variable declarations
 /*
const PERSON_NAME = "Name here";
const THREES = 10;
const TWOS = 10;
const ATTEMPTS = 35;
*/
let formname = document.getElementById("formname");
let Person =  document.getElementById("Person");
var Threes_Made =  document.getElementById("Threes_Made");
var Twos_Made = document.getElementById("Twos_Made");
var Attempts = document.getElementById("Attempts");
let output = document.getElementById("output");
let fg = document.getElementById("fg");
let reset = document.getElementById("reset");
let calculate = document.getElementById("calculate")


//event listeners and intialization on load

window.onload = initialize;

Attempts.addEventListener("input", function() {
    this.value = this.value.replace(/[e\+\-\.]/gi, "");
});


Attempts.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

Threes_Made.addEventListener("input", function() {
    this.value = this.value.replace(/[e\+\-\.]/gi, "");
});


Threes_Made.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

Twos_Made.addEventListener("input", function() {
    this.value = this.value.replace(/[e\+\-\.]/gi, "");
});


Twos_Made.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

formname.addEventListener("change", function (event) {
    calculate_it();
    event.preventDefault();
});


reset.addEventListener("click", function (event) {
    initialize();
    output.innerHTML = `<div class="alert alert-warning" role="alert">
                            The calculator has been reset!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    event.preventDefault();
});

calculate.addEventListener("click", function (event) {
    output.innerHtml =  ((isNaN(Attempts.value) || !Attempts.value) || (isNaN(Threes_Made.value) || !Threes_Made.value) (isNaN(Twos_Made.value) || !Twos_Made.value))
                        ? alert("Please enter a number in Three Pointers Made, Two Pointers Made, and Total Shots Attempted")
                        : calculate_it();
    event.preventDefault();
});


// functions

function initialize() {
    output.innerHTML = null;
    Person.value = null;
    Twos_Made.value = null;
    Threes_Made.value = null;
    Attempts.value = null;
};

function calculate_it() {
    let personName = (Person.value) ? Person.value : "[person name]";
    var threesMade = Threes_Made.value;
    var twosMade = Twos_Made.value;
    var fgAttempts = Attempts.value;

    //having a hard time getting it to work without using the parseInt function. Maybe use it above somewhere
    var twos = parseInt(twosMade);
    var threes = parseInt(threesMade);
    var fga = parseInt(fgAttempts);

    var fgRegular = ((twos + threes)/(fga)*(100)).toFixed(2);
    var fgMade = twos + threes;
    /*var eFG = ((isNaN(twos) || !twos) || (isNaN(threes) || !threes))
              ? alert("Please enter a number")
              : ((fgMade + .5 * threes)/(fga)*(100)).toFixed(2);*/
    var eFG = ((fgMade + .5 * threes)/(fga)*(100)).toFixed(2);
    

    let text = personName +" has an effective field goal percentage of " + eFG +"%";
    var regFG = (fg.checked) ? fgRegular : "N/A";
    output.innerHTML = text +" with a regular field goal percentage of " + regFG + "%";

    
};