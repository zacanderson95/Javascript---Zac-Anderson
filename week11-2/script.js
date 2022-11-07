let output = document.getElementById("output");
let formNode = document.getElementById("formid");


let queryString = location.search.slice(1);
console.log(queryString);


queryString = queryString.replace(/\+/g," ");
queryString = decodeURIComponent(queryString);
console.log(queryString);

let formData = queryString.split("&");
console.log(formData);

for (let items of formData) {
    let pair = items.split("=");
    let fieldLabel = document.createElement("li");
    fieldLabel.innerHTML = pair[0] +" = "+pair[1];
    formNode.appendChild(fieldLabel);
    let inputField = document.createElement("input");
    inputField.id = pair[0];
    inputField.name = pair[0];
    inputField.value = pair[1];
    inputField.hidden = true;
    formNode.appendChild(inputField);
}

for (let items of formData) {
     let pair = items.split("=");
    sessionStorage.setItem(pair[0], pair[1])
}

console.log(localStorage.getItem('first_name'));
console.log(sessionStorage);

function writeCookie(name, value, expDate, path, domain, secure) {
    if (name && value) {
        let cStr = name + "=" + encodeURIComponent(value);
        if (expDate) cStr += ";expires=" + expDate.toUTCString();
        if (path) cStr += ";path=" + path;
        if (domain) cStr += ";domain=" + domain;
        if (secure) cStr += ";secure";
        document.cookie = cStr;
    }
}

let expDate = new Date("January 01, 2026");
writeCookie("password","nahyoudonothaveaccesstothispassword",expDate,"","","secure");
console.log(writeCookie);

let keys = ["first_name","last_name","address","zip","state"];


    // for (let items of keys) {
    //         let newRow = document.createElement("tr");

    //         let keyCell = document.createElement("td");
    //         keyCell.textContent = items;

    //         let keyValue = document.createElement("td");
    //         keyValue.textContent = localStorage.getItem(items);
    //         newRow.appendChild(keyValue);

    //         document.getElementById("prefTable").appendChild(newRow);
    //     }

document.getElementById("output").innerHTML = formData;

