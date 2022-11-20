// A

let timer = 0;
setInterval(() => {
    console.log(timer++);
},5000);

// B

let square = (x) => Math.pow(x, 2);

console.log(square(5));

// C

let form = document.getElementById("form");

form.addEventListener("mouseover", () => 
        alert("hovering"));

// 2
let stuff = document.getElementById("stuff");


let xhr = new XMLHttpRequest();
//xhr.open("get", "file.html"); Did a xhr on this file to make sure it would work. It did!
xhr.open("get", "file.php&id=99");
xhr.send(null);
// 3 
xhr.onreadystatechange = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log("responseText is the property: " + xhr.statusText);
        stuff.innerHTML = xhr.responseText;
    }
    else {
        console.log("Failed: here is the XMLHttpRequest status: " + xhr.statusText);
    }
}

//4

fetch("file.html")
.then(response => response.text())
.then(text => stuff.innerHTML = text)
.catch((error) => console.log(error));

//5

let promiseObj = new Promise((resolve, reject) => {
    if (Math.random() < 0.6) {
        resolve("Promise kept");
    }
    else {
        reject("Promise not kept");
    }
})

// Original resolve/reject messages being displayed here
// promiseObj
// .then(msg => console.log(msg))
// .catch(msg2=>console.log(msg2));

promiseObj
.then(msg => "Promise kept")
.then(msg2 => msg2.substr(0,3))
.then(msg3 => console.log(msg3))
.catch(msg=>console.log(msg));

// promise kept is shortened to "pro" due to the substring