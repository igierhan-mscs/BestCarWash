// JavaScript for the navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }// JavaScript for the navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }// JavaScript for the navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Products
let price = 0;
let count = 0;

function myFunction1() {
  price += 3.99;
  count++;
  document.getElementById("demo").innerHTML = "$" + price.toFixed(2);
  document.getElementById("demo2").innerHTML = count + " Towels";
}

let price2 = 0;
let count2 = 0;

function myFunction2() {
  price2 += 14.99;
  count2++;
  document.getElementById("demo3").innerHTML = "$" + price2.toFixed(2);
  document.getElementById("demo4").innerHTML = count2 + " Wax";
}
  
let price3 = 0;
let count3 = 0;

function myFunction3() {
  price3 += 12.99;
  count3++;
  document.getElementById("demo5").innerHTML = "$" + price3.toFixed(2);
  document.getElementById("demo6").innerHTML = count3 + " Brush";
}

let price4 = 0;
let count4 = 0;

function myFunction4() {
  price4 += 19.99;
  count4++;
  document.getElementById("demo7").innerHTML = "$" + price4.toFixed(2);
  document.getElementById("demo8").innerHTML = count4 + " Soap";
}

let price5 = 0;
let count5 = 0;

function myFunction5() {
  price5 += 10.99;
  count5++;
  document.getElementById("demo9").innerHTML = "$" + price5.toFixed(2);
  document.getElementById("demo10").innerHTML = count5 + " Polish Pad";
}

let price6 = 0;
let count6 = 0;

function myFunction6() {
  price6 += 8.99;
  count6++;
  document.getElementById("demo11").innerHTML = "$" + price6.toFixed(2);
  document.getElementById("demo12").innerHTML = count6 + " Sponge";
}

let price7 = 0;
let count7 = 0;

function myFunction7() {
  price7 += 23.99;
  count7++;
  document.getElementById("demo13").innerHTML = "$" + price7.toFixed(2);
  document.getElementById("demo14").innerHTML = count7 + " Pro Soap";
}

let price8 = 0;
let count8 = 0;

function myFunction8() {
  price8 += 24.99;
  count8++;
  document.getElementById("demo15").innerHTML = "$" + price8.toFixed(2);
  document.getElementById("demo16").innerHTML = count8 + " Pro Wax";
}

let price9 = 0;
let count9 = 0;

function myFunction9() {
  price9 += 14.99;
  count9++;
  document.getElementById("demo17").innerHTML = "$" + price9.toFixed(2);
  document.getElementById("demo18").innerHTML = count9 + " Shampoo";
}

// Total of all products
var total = 0;
function addToCart(price) {
  total += price;
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}



