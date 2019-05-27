import util from '../helpers/util';

let domString = '';
const sleep = [50];

function getSum(total, push) {
  return total + push;
}

const shortSleep = () => {
  if (sleep.reduce(getSum) < 51) {
    sleep.push(50);
    sleep.reduce(getSum);
    const totalHealth = sleep.reduce(getSum);
    document.getElementById('rest').innerHTML = totalHealth;
  }
};

const deepSlumber = () => {
  if (sleep.reduce(getSum) < 41) {
    sleep.push(60);
    sleep.reduce(getSum);
    const totalHealth = sleep.reduce(getSum);
    document.getElementById('rest').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button id="shortSleep">Short Nap</button>';
  domString += '<button id="deepSlumber">Solid 8 Hours</button>';
  domString += `<div id="rest">${sleep}</div>`;
  util.printToDom('sleep', domString);
  document.getElementById('shortSleep').addEventListener('click', shortSleep);
  document.getElementById('deepSlumber').addEventListener('click', deepSlumber);
};

export default { domStringBuilder };
