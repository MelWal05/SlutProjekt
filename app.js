let wallet = document.getElementById("wallet")
let cashButton = document.getElementById("getCash")

let currencyAmount = 0
wallet.innerText = `Balance: ${currencyAmount}$`

username = prompt("What is your name?")
document.getElementById("username").innerHTML = username


// Get Cash
cashButton.onclick = function(){
  currencyAmount = currencyAmount + 100
  wallet.innerText = `Balance: ${currencyAmount}$`
}

let betAmount = 0
document.getElementById("submitAmount").onclick = function(){
  betAmount = document.getElementById("depositAmount").valueAsNumber
  document.getElementById("chosenAmount").innerText = `You are betting: ${betAmount}$`
}



// Randomizing color

let coinflipResult = document.getElementById("coinflipResult")

document.getElementById("submitBet").onclick = function(){
  console.log("klicka submit")
  if (betAmount <= currencyAmount && chosenColor != "") {
    randomNumber = Math.floor(Math.random()*2)
    console.log(`random number är ${randomNumber}`)
    
    if (randomNumber == 0) {
      rightColor = "red"
      coinflipResult.style.backgroundImage = "url(pokerred.png)"
      setTimeout(resetCoinflip, 5000)      
    }
    else if (randomNumber == 1) {
      rightColor = "black"
      coinflipResult.style.backgroundImage = "url(pokerblack.png)"
      setTimeout(resetCoinflip, 5000)
    }

    if (chosenColor == rightColor) {
      currencyAmount += betAmount
    }
    else {
      currencyAmount -= betAmount
    }

    document.getElementById("wallet").innerHTML = `Balance: ${currencyAmount}$`
    setTimeout(resetCoinflip, 5000)
  }
}

// Choose color on coinflip

let chosenColor = ""

document.getElementById("chooseRed").onclick = function(){
  console.log("Change red")
  document.getElementById("chooseRed").classList.add("selected")
  document.getElementById("chooseBlack").classList.remove("selected")
  chosenColor = "red"
}
document.getElementById("chooseBlack").onclick = function(){
  console.log("Change Black")
  document.getElementById("chooseBlack").classList.add("selected")
  document.getElementById("chooseRed").classList.remove("selected")
  chosenColor = "black"
}



function resetCoinflip() {
  document.getElementById("chosenAmount").innerText = `You are betting:`
  chosenColor = ""
  rightColor = ""
  betAmount = 0
  document.getElementById("chooseBlack").classList.remove("selected")
  document.getElementById("chooseRed").classList.remove("selected")
  // coinflipResult.style.backgroundImage = "linear-gradient(to right, greenyellow, red)"
}