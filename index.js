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

const nomberMaker = () => {
  const nomber = document.createElement("span");
  document.body.appendChild(nomber);
  nomber.classList.add("nomber");

  const nomberRandom = Math.floor(Math.random() * 10);

  nomber.innerHTML = nomberRandom;

  nomber.style.top = Math.random() * -100  + "%";
  nomber.style.left = Math.random() * 100 + "%";
  
  
  const size = Math.random() * 35 + 20 + "px";


  nomber.style.fontSize = size;
  // nomber.style.width = size;

  nomber.style.setProperty("--left", Math.random() * 100 + "%");
  nomber.style.setProperty("--rotate", Math.floor(Math.random() * 721) - 360 + "deg");


  setTimeout(() => {
    nomber.remove();
  }, 12000);
};

setInterval(nomberMaker, 200);
