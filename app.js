let coinflipContainer = document.getElementById("coinflipContainer");
let coinflipImage = document.createElement("img");
let btnRandom = document.getElementById("btnRandom");

btnRandom.addEventListener("click", function (e) {
  randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 1) {
    coinflipImage.src = "pokerred.png";
    coinflipContainer.append(coinflipImage);
    coinflipImage.style.width = "200px";
    coinflipImage.style.height = "200px";
    coinflipContainer.style.transition = "3s";
    coinflipContainer.style.transform = "rotate(180deg)";
  } else {
    coinflipImage.src = "pokerblack.png ";
    coinflipContainer.append(coinflipImage);
    coinflipImage.style.width = "200px";
    coinflipImage.style.height = "200px";
    coinflipContainer.style.transition = "3s";
    coinflipContainer.style.transform = "rotate(180deg)";
  }
});

// const ChanceJS = require("chance");
// const serverSeed = "";
// const randomSeed = "";
// const mod = `${serverSeed}-${randomSeed}`;

// const chance = new ChanceJS(mod);
// const ticket = chance.floating({ min: 0, max: 1, fixed: 8 });

// console.log(ticket);