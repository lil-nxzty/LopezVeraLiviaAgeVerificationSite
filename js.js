const txt = document.getElementById("ageInpt");
const submitti = document.getElementById("submitBtn");
const resultado = document.getElementById("resultText");
let age;
   submitti.onclick = function() {
      // Read and convert
      age = txt.value;
      age = Number(age);

      if (txt.value !== "" && age >= 0 && age < 5) {
        resultado.textContent = "Googoogahgah... Get off the internet kid";
      } 
      else if (txt.value !== "" && age >= 0 && age < 13) {
        resultado.textContent = `Im ${age} years old and this is deep`;
      } 
      else if (txt.value !== "" && age >= 0 && age < 18) {
        resultado.textContent = `${18-age} year[s] left you got this`;
      } 
      else if (age == 21) {
        resultado.textContent = "Welcome to the gang";
      } 
      else if (txt.value !== "" && age <= 20 && age > 17) {
        resultado.textContent = "Yes, those are taxes. No, you cant just evade them";
      } 
      else if (txt.value !== "" && age >= 65) {
        resultado.textContent = "Age is just an old number";
      } 
      else if (txt.value !== "" && age > 21 && age < 65) {
        resultado.textContent = "Taxes am i right. :(";
      } 
      else {
        resultado.textContent = "You cant have 0 years buddy come on, if you have negative years or youre just trying to be funny please touch grass.";
      }
    };