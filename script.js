
let body = document.getElementsByTagName("body")[0];

// function GetColor(name) {
//     body.style.backgroundColor = name;
// }
let Green = document.querySelector(".Green");
Green.addEventListener("click",function () {
    body.style.backgroundColor = "Green";
    Green.style.color = "black";
    Green.style.backgroundColor = "White";
});
let Red = document.querySelector(".Red");
Red.addEventListener("click",function () {
    body.style.backgroundColor = "Red";
    Red.style.color = "black";
    Red.style.backgroundColor = "White";
});
let Blue = document.querySelector(".Blue");
Blue.addEventListener("click",function () {
    body.style.backgroundColor = "Blue  ";
    Blue.style.color = "black";
    Blue.style.backgroundColor = "White";
});

let rendom = document.querySelector(".random");
rendom.addEventListener("click",function RandomColor() {
    
        const Red = Math.round(Math.random() * 255);
        const Green= Math.round(Math.random() * 255);
    
        const Blue = Math.round(Math.random() * 255);
    
        const colors = `rgb(${Red} , ${Green} , ${Blue})`;
        body.style.backgroundColor =colors;
})
