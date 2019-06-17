//items that start with p belong to player
//items that start with c belong to computer

var playerName = "";
var pstats = { health: 100, hits: 0, swordcount: 0, fswordcount: 0, bandaidcount: 0 };
var cstats = { health: 100, hits: 0, };

//reset game
function reset() {
  pstats = { health: 100, hits: 0, swordcount: 0, fswordcount: 0, bandaidcount: 0 };
  cstats = { health: 100, hits: 0, };
  document.getElementById("pturns").innerText = "You:";
  document.getElementById("cturns").innerText = "Computer:";
  upDate();
}
function upDate() {
  document.getElementById("health").innerText = " " + pstats.health
  document.getElementById("healthbar").style = "width:" + pstats.health + "%";
  document.getElementById("hits").innerText = " " + pstats.hits
  document.getElementById("chits").innerText = " " + cstats.hits
  document.getElementById("chealth").innerText = " " + cstats.health
  document.getElementById("chealthbar").style = "width:" + cstats.health + "%";
  //checks to see if either health has become 0
  if (pstats.health < 1 && cstats.health >= 1) {
    alert("Player Loses!");
    reset();
  } else if (cstats.health < 1 && pstats.health >= 1) {
    alert("Computer Loses!");
    reset();
  }
}

//attempted image change for one second, activated but action buttons
//function hit() {
//  document.getElementById("imge").src = "hit.png";
//}

//function mainImage() {
//  setTimeout(document.getElementById("imge").src = "main.png", 1000);
//}


//players name
function namePrompt() {
  let playerName = prompt("What is your name?");
  document.getElementById("name").innerText = playerName;
  document.getElementById("pturns").innerText = "You:";
  upDate();
}
//players actions
function pslap() {
  cstats.health = cstats.health - 1;
  pstats.hits = pstats.hits + 1;
  document.getElementById("pturns").innerText += "\nslaps"
  upDate();
  whosTurn();
}
function ppunch() {
  cstats.health = cstats.health - 5;
  pstats.hits = pstats.hits + 1;
  document.getElementById("pturns").innerText += "\npunches"
  upDate();
  whosTurn();
}
function pkick() {
  cstats.health = cstats.health - 10;
  pstats.hits = pstats.hits + 1;
  document.getElementById("pturns").innerText += "\nkicks";
  upDate();
  whosTurn();
}
//computers actions
function cslap() {
  pstats.health = pstats.health - 1;
  cstats.hits = cstats.hits + 1;
  document.getElementById("cturns").innerText += "\nslaps";
  upDate()
}
function cpunch() {
  pstats.health = pstats.health - 5;
  cstats.hits = cstats.hits + 1;
  document.getElementById("cturns").innerText += "\npunches";
  upDate();
}
function ckick() {
  pstats.health = pstats.health - 10;
  cstats.hits = cstats.hits + 1;
  document.getElementById("cturns").innerText += "\nkicks";
  upDate();
}
//items
function sword() {
  switch (pstats.hits > 9 && pstats.swordcount !== 1) {
    case true:
      cstats.health = cstats.health - 20;
      pstats.hits = pstats.hits + 1;
      pstats.swordcount = 1;
      upDate();
      whosTurn();
      break;
    case false:
      alert("Sword can only be used one time,\n to use you must have 10 hits or more!")
      break;
  }
}
function fsword() {
  switch (pstats.hits > 19 && pstats.fswordcount !== 1) {
    case true:
      cstats.health = cstats.health - 30;
      pstats.hits = pstats.hits + 1;
      pstats.fswordcount = 1;
      upDate();
      whosTurn();
      break;
    case false:
      alert("Flaming sword can only be used one time,\n to use you must have 20 hits or more!")
      break;
  }
}
function bandaid() {
  switch (pstats.bandaidcount !== 1) {
    case true:
      pstats.health = pstats.health + 25;
      pstats.bandaidcount = 1;
      whosTurn();
      upDate();
      break;
    case false:
      alert("Bandaid can only be used once!")
      break;
  }
}

//randomly decide whos turn it is
function whosTurn() {
  let turn = Math.random();
  switch (turn > 0.5) {
    case false:
      upDate();
      break;
    case true:
      cPlay();
      upDate();
      break;
  }
}

//randomly decide which action the computer takes
function cPlay() {
  let cch = Math.floor(Math.random() * (+4 - +1)) + +1;
  switch (cch) {
    case 1:
      cslap();
      upDate();
      whosTurn();
      break;
    case 2:
      cpunch();
      upDate();
      whosTurn();
      break;
    case 3:
      ckick();
      upDate();
      whosTurn();
      break;
  }
}