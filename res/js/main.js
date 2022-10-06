const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const upgrade2 = document.getElementById("upgrade2");
const autoclicker = document.getElementById("upgrade3");
const autoclickercounter = document.getElementById("autoclickercounter");

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 25;
let upgradePrice2 = 100;
let autoclickerPrice = 500;
let numberOfAutoClickerCookies = 0;

cookie.onclick = () => {
  // ++ = +1
  numberOfCookies += numberOfCookiesOnClick;
  counter.innerHTML = `Cookiez: ${numberOfCookies}`;
};

upgrade.onclick = () => { 
  if (numberOfCookies >= upgradePrice) {
    numberOfCookies -= upgradePrice; // numberOfCookies = numberOfCookies - 50;
    upgradePrice *= 2;
    numberOfCookiesOnClick++;
    counter.innerHTML = `Cookiez: ${numberOfCookies}`;
    upgrade.innerHTML = `Buy grandma: ${upgradePrice}`;
  }
};

upgrade2.onclick = () => {
  if (numberOfCookies >= upgradePrice2) {
    numberOfCookies -= upgradePrice2;
    upgradePrice2 *= 2;
    numberOfCookiesOnClick += 5;
    counter.innerHTML = `Cookiez: ${numberOfCookies}`;
    upgrade2.innerHTML = `Buy grandpa: ${upgradePrice2}`;
  }
};
autoclicker.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    numberOfCookies -= autoclickerPrice;
    if (numberOfAutoClickerCookies == 0) {
      setInterval(() => {
        numberOfCookies += numberOfAutoClickerCookies;
        counter.innerHTML = `Cookiez: ${numberOfCookies}`;
      }, 1000);
    }
    numberOfAutoClickerCookies += 10;
    autoclickerPrice *= 2;
    counter.innerHTML = `Cookiez: ${numberOfCookies}`;
    autoclicker.innerHTML = `Buy farm: ${autoclickerPrice}`;
    autoclickercounter.innerHTML = `Cookies per second: ${numberOfAutoClickerCookies}`;
  }
};
