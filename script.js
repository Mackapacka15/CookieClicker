let cookieAmmount = 0;
let energy = 100;
let currentMultiplyer = 1;
let multiplyerPrice = 100;
let currentAutoClickerAmount = 0;

let update = () => {
  timesClickedLabel.innerHTML = cookieAmmount + " Cookies Clicked";
  energyLabel.innerHTML = "you have " + energy + " energy left";
  powerupClickMultiplierCostLabel.innerHTML = multiplyerPrice;
  powerupClickMultiplierAmmountLabel.innerHTML = currentMultiplyer + 1;
  powerupAutoClickerCostLabel.innerHTML = 500 * (currentAutoClickerAmount + 1);
  if (energy <= 0) {
    killplayer();
  }
};


let addAutoCookies = () => {
  cookieAmmount += currentAutoClickerAmount;
  update();
};

let addEnergy = () => {
  if (cookieAmmount >= 200) {
    energy += 100;
    cookieAmmount -= 200;
  } else {
    console.warn("You don't have enough cookies");
  }

  update();
};

let addCookie = () => {
  cookieAmmount += currentMultiplyer;
  if (Math.floor(Math.random() * 7) == 1) {
    cookieAmmount += 20 * currentMultiplyer;
  }
  energy--;
  update();
};

let killplayer = () => {
  let bodyLabel = document.querySelector(".main-body");
  bodyLabel.innerHTML = "You died";
};

let buyMultiplyer = () => {
  if (cookieAmmount >= multiplyerPrice) {
    cookieAmmount -= multiplyerPrice;
    multiplyerPrice *= 2;
    currentMultiplyer += 1;
  } else {
    console.warn("You don't have enough cookies");
  }
  update();
};

let buyAutoClicker = () => {
  if (cookieAmmount >= 500 * currentAutoClickerAmount + 1) {
    currentAutoClickerAmount++;
  } else {
    console.warn("You don't have enough cookies");
  }
};

const timesClickedLabel = document.querySelector("#cookies-clicked");
const addCookielabel = document.querySelector(".add-cookie");
timesClickedLabel.innerHTML = cookieAmmount + " Cookies Clicked";

const energyLabel = document.querySelector("#energy-ammount");
const addEnergyLabel = document.querySelector(".energy-button");

const powerupClickMultiplier = document.querySelector("#click-multiply");
const powerupClickMultiplierCostLabel = document.querySelector(
  "#click-multiply-next-cost"
);
const powerupClickMultiplierAmmountLabel =
  document.querySelector("#next-multiply");
powerupClickMultiplierCostLabel.innerHTML = multiplyerPrice;
powerupClickMultiplierAmmountLabel.innerHTML = currentMultiplyer + 1;

const powerupAutoClicker = document.querySelector("#auto-clicker-button");
const powerupAutoClickerCostLabel = document.querySelector(
  "#auto-clicker-next-cost"
);
powerupAutoClickerCostLabel.innerHTML = 500 * (currentAutoClickerAmount + 1);
setInterval(addAutoCookies, 1000);

powerupClickMultiplier.addEventListener("click", buyMultiplyer);
addEnergyLabel.addEventListener("click", addEnergy);
addCookielabel.addEventListener("click", addCookie);
powerupAutoClicker.addEventListener("click", buyAutoClicker);
