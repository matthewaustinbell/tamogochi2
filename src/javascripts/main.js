import eat from './components/health';
import fight from './components/fight';
import play from './components/play';
import sleep from './components/sleep';

import '../styles/main.scss';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
};

init();
