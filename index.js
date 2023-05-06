const form = document.getElementById("form");
const monInput = document.getElementById("mon-input");
const result = document.getElementById("result");

function guessMyNumber() {
  const valeur = monInput.value;
  let nombre = Math.ceil(Math.random() * 10);

  if (nombre === parseInt(valeur)) {
    result.innerHTML = `GAGNER:<span class="green">BRAVOOOO</span> le chiffre était bien le nombre: <span class="green">${nombre} </span> Réessayer ?! `;
  } else if (valeur === "" || valeur > 10) {
    result.innerHTML = `Merci de choisir un nombre entre 1/10. `;
  } else {
    result.innerHTML = `Perdu: le nombre était <span class="green" >${nombre} </span>. Vous aviez choisi <span>${valeur}</span>. Réessayer !!`;
  }
  
  monInput.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  guessMyNumber();
});
