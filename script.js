let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

steveImgEl.addEventListener("click", selectSteve);

function selectSteve() {
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");

  character = "Steve";
}

alexImgEl.addEventListener("click", selectAlex);

function selectAlex() {
  steveImgEl.classList.remove("active");
  alexImgEl.classList.add("active");

  character = "Alex";
}

fishBtnEl.addEventListener("click", fishOnce);

function fishOnce() {
  if (character === "Steve") {
    let randNum = Math.random();
    if (randNum < 0.7) {
      imgResultEl.src = "img/Raw-Cod.png";
      numCod++;
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.9) {
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      imgResultEl.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalEl.innerHTML = numTropical;
    } else {
      imgResultEl.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferEl.innerHTML = numPuffer;
    }
  } else {
    alert("Fish with Alex");
  }
}
