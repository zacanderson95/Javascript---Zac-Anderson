let customForm = document.forms["customForm"];
let submitBtn = document.getElementById("submitButton");
let same = document.getElementById("sameCheck");

customForm.onchange = changed;
submitBtn.addEventListener("click", validate);
// same.addEventListener("click", handleChange)


// function passCheck() {
//     if (passwordOne.value == passwordTwo.value)
//     {
//         clicked();
//     }
//     else {
//         passwordTwo.setCustomValidity("Passwords must match")
//     }
    
// }

// function handleChange() {
 //    var address1 = document.getElementById("address").value;
//     var zip1 = document.getElementById("zipCode").value;
//     var state1 = document.getElementById("shipState").value;


//     document.getElementById("addressBilling").value = address1;
//     document.getElementById("zipCodeBilling").value = zip1;
//     document.getElementById("billState").value = state1;

    

//    }


function changed(event) {
    console.log(this.name);
    var address1 = document.getElementById("address").value;
    var zip1 = document.getElementById("zipCode").value;
    var state1 = document.getElementById("shipState").value;
    let passwordOne = document.getElementById("inputPassword").value;
    let passwordTwo = document.getElementById("verifyPassword").value;

    if(document.getElementById("submitButton").checked) {
    
    document.getElementById("addressBilling").value = address1;
    document.getElementById("zipCodeBilling").value = zip1;
    document.getElementById("billState").value = state1;

    }
    if (passwordOne.value != passwordTwo.value) {
        console.log("Passwords must match")
        passwordTwo.setCustomValidity("Passwords must match");
    }
    else {console.log("passwords match")}

    customForm.elements["cardNumber"].setCustomValidity("");
    if (customForm.elements["cardNumber"].validity.patternMismatch) {
        customForm.elements["cardNumber"].setCustomValidity(customForm.elements["cardNumber"].value+" is an invalid card number. format is 4444-4444-4444-4444");
    }
    else {console.log("card number is valid");}

    customForm.elements["phone"].setCustomValidity("");
    if (customForm.elements["phone"].validity.patternMismatch) {
        customForm.elements["phone"].setCustomValidity(customForm.elements["phone"].value+ " is an invalid card number. format is 555-555-5555");
    }
    else {console.log("phone number is valid");}
}


//  function validate() {
//     let passwordOne = document.getElementById("inputPassword").value;
//     let passwordTwo = document.getElementById("verifyPassword").value;
//     console.log(this.name)
//     if (passwordOne != passwordTwo) {
//         passwordTwo.setCustomValidity("Passwords must match");
//     }
//     else {passwordTwo.setCustomValidity("");}
// }

function validate() {
    if (customForm.validity.validate) {
        form.submit();
    }
    else {
        alert("a value is missing");
    }
}


