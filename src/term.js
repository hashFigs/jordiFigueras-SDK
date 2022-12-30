const chalk = require('chalk');



const log = console.log;

const title = (...args) => {
  log(chalk.bold.green.bold(args));
};

const error = (...args) => {
  log(chalk.bold.red(args) + '\n');
  process.exit(1);
};

const warning = (...args) => {
  log(chalk.hex('#FFA500').bold(args));
};

const check = (args) => {
  log(args, chalk.hex('#00FF00').bold('OK'));
};




module.exports = {
  log,  
  title,
  warning,
  error,
  check
};
