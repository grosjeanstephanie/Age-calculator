
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";
import { get } from "https";

/*
  Put the JavaScript code you want below.
*/
let option, i;
let age = document.getElementById("year");
let age1 = document.getElementById("month");
let age2 = document.getElementById("day");
let result = document.getElementById("result");
let dayNow = new Date(Date.now());
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
age.addEventListener('change', () => {
  calc();
})
age2.addEventListener('change', () => {
  calc();
})
for (i = 1900; i <= dayNow.getFullYear(); i++) {
  option = document.createElement("option");
  option.text = i;
  age.add(option, age[0]);
}

for (i = 0; i <= 11; i++) {
  option = document.createElement("option");
  option.setAttribute("id", months[i]);
  option.text = months[i];
  age1.add(option, age1[0]);
}

generateDay(31);

function generateDay(n){
  for (let i = n; i >= 1; i--) {
    option = document.createElement("option");
    option.text = i;
    age2.add(option, age2[0]);
  }
}

age1.addEventListener('change', () => {
  age2.options.length = 0;
  if (document.getElementById('January').selected || document.getElementById('March').selected
    || document.getElementById('May').selected || document.getElementById('July').selected || document.getElementById('August').selected
    || document.getElementById('October').selected || document.getElementById('December').selected) {
    generateDay(31);
  }

  if (document.getElementById('April').selected || document.getElementById('June').selected
    || document.getElementById('September').selected || document.getElementById('November').selected) {
    generateDay(30);
  }
  if (document.getElementById('February').selected) {
    generateDay(28);
  }
  calc();
})

function calc(){
  let d = dayNow.getFullYear() * 10000 + (dayNow.getMonth()+1) * 100 + dayNow.getDate();
  let birthday = parseInt(age[age.selectedIndex].value) * 10000 + (months.indexOf(age1[age1.selectedIndex].value)+1) * 100 + parseInt(age2[age2.selectedIndex].value);
  result.innerHTML = Math.floor((d - birthday)/10000) + " years old.";
}