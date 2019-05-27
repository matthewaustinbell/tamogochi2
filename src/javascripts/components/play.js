import util from '../helpers/util';

let domString = '';
const fun = [50];

function getSum(total, push) {
  return total + push;
}

const veryFun = () => {
  if (fun.reduce(getSum) < 51) {
    fun.push(50);
    fun.reduce(getSum);
    const totalHealth = fun.reduce(getSum);
    document.getElementById('fun').innerHTML = totalHealth;
  }
};

const aLittleFun = () => {
  if (fun.reduce(getSum) < 100) {
    fun.push(2);
    fun.reduce(getSum);
    const totalHealth = fun.reduce(getSum);
    document.getElementById('fun').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button id="veryFun">Big Fun</button>';
  domString += '<button id="aLittleFun">No Fun</button>';
  domString += `<div id="fun">${fun}</div>`;
  util.printToDom('play', domString);
  document.getElementById('veryFun').addEventListener('click', veryFun, false);
  document.getElementById('aLittleFun').addEventListener('click', aLittleFun);
};

export default { domStringBuilder };
