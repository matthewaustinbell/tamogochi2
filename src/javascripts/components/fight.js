import util from '../helpers/util';

let domString = '';
const strength = [100];

function getSum(total, push) {
  return total + push;
}

const runAway = () => {
  if (strength.reduce(getSum) < 100) {
    strength.push(1);
    strength.reduce(getSum);
    const totalHealth = strength.reduce(getSum);
    document.getElementById('strength').innerHTML = totalHealth;
  }
};

const commitViolence = () => {
  if (strength.reduce(getSum) > 10) {
    strength.push(-10);
    strength.reduce(getSum);
    const totalHealth = strength.reduce(getSum);
    document.getElementById('strength').innerHTML = totalHealth;
  }
};

const domStringBuilder = () => {
  domString += '<button id="runAway">Run</button>';
  domString += '<button id="commitViolence">Fight</button>';
  domString += `<div id="strength">${strength}</div>`;
  util.printToDom('fight', domString);
  document.getElementById('runAway').addEventListener('click', runAway);
  document.getElementById('commitViolence').addEventListener('click', commitViolence);
};

export default { domStringBuilder };
