//let output = document.getElementById("output").innerHTML;

let sportsCardRussel = {
    player: "D'Angelo Russell",
    playerDetails: {
        position: "Point Guard",
        age: 19,
        team: "Los Angeles Lakers",
        collegeTeam: "Ohio State Buckeyes",
        currentTeam: "Minnesota Timberwolves"
    },
    cardType: ["Basketball", "Autograph", "Rookie"],
    cardNumber: 16,
    cardYear: 2015,
    cardManufacturer: "Panini",
    ageOfCard: function() {
        let today = new Date();
        let yyyy = today.getFullYear();
        let age = yyyy - this.cardYear;
        return age+" years old";
    }
};
document.getElementById("output").innerHTML += sportsCardRussel.ageOfCard();

function sportsCard(player, cardNumber, cardYear) {
    this.player = player;
    this.cardNumber = cardNumber;
    this.cardYear = cardYear;
}

sportsCard.prototype.ageOfCardPROTO = function() {
    let today = new Date();
        let yyyy = today.getFullYear();
        let age = yyyy - this.cardYear;
        return "The "+ this.player + " card with the card number of " + this.cardNumber + " is "+age+" years old";
}

let card1 = new sportsCard("Anthony Edwards", 77, 2021);
let card2 = new sportsCard("Giannis Antetokounmpo", 432, 2018);
let card3 = new sportsCard("Joe Montana", 4, 1985);

output.innerHTML += "<br>" + card1.ageOfCardPROTO();
output.innerHTML += "<br>" + card2.ageOfCardPROTO();
output.innerHTML += "<br>" + card3.ageOfCardPROTO();

function sportsCard2(player, cardNumber, cardYear) {
    this.player = player;
    this.cardNumber = cardNumber;
    this.cardYear = cardYear;

    function ageOfCard() {
        let today = new Date();
        let yyyy = today.getFullYear();
        let age = yyyy - cardYear;
        return age+" years old";
    }

    this.showAgeOfCard = function() {
        return "The "+ this.player + " card with the card number of " + this.cardNumber + " is "+ageOfCard()+" years old"
    }
}

let card4 = new sportsCard2("Walter Payton", 111, 1990);
console.log(card4.showAgeOfCard());
// console.log(card4.ageOfCard());

function playerX() {
    this.playerName = null;
    this.getPlayer = function() {
        return this.playerName;
    }
}

function numberX() {
    this.cardNumber = null;
    this.getNumber = function() {
        return this.cardNumber;
    }
}

function teamX(name) {
    this.teamName = name;
    this.getTeam = function() {
        return this.teamName + " " + this.getNumber();
    }
}

teamX.prototype = new numberX();
numberX.prototype = new playerX();

let cardStuff = new teamX("Timberwolves");

cardStuff.number = 43;
cardStuff.player = "Rudy Gobert";

output.innerHTML += "<br>" + cardStuff.getTeam();

let json = JSON.stringify(cardStuff);
output.innerHTML += "<br>" + json;

let newCardObject = JSON.parse(json);
output.innerHTML += "<br>" + newCardObject.player;
