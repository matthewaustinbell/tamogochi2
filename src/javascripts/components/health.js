import util from '../helpers/util';

let domString = '';
const full = [100];

function getSum(total, push) {
  return total + push;
}

const healthyEats = () => {
  if (full.reduce(getSum) < 91) {
    full.push(10);
    full.reduce(getSum);
    const totalHealth = full.reduce(getSum);
    document.getElementById('full').innerHTML = totalHealth;
  }
};

const unHealthyEats = () => {
  if (full.reduce(getSum) > 2) {
    full.push(-3);
    full.reduce(getSum);
    const totalHealth = full.reduce(getSum);
    document.getElementById('full').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button type="button" id="healthyFood">Eat healthy</button>';
  domString += '<button type="button" id="unhealthyFood">Drink water</button>';
  domString += `<div id="full">${full}</div>`;
  util.printToDom('eat', domString);
  document.getElementById('healthyFood').addEventListener('click', healthyEats, false);
  document.getElementById('unhealthyFood').addEventListener('click', unHealthyEats);
  util.printToDom('pet', '<img id="img" src="../../../src/img/images.jpg">');
};

export default { domStringBuilder };
