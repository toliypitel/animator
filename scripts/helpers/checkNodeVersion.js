const cp = require('child_process');

const log = require('./log');

const NODE_VERSION = '18.18.2';

module.exports = () => {
  const nodeVersion = cp.execSync('node --version').toString().trim();
  if (nodeVersion !== `v${NODE_VERSION}`) {
    log.warn(`WARNING: you are using node version ${nodeVersion}. We recommend version v${NODE_VERSION}.`);
    log.warn('Get it via:');
    log.warn('  # macOS / Linux');
    log.warn(`  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`);
    log.warn('  . "$HOME/.nvm/nvm.sh"');
    log.warn(`  nvm install ${NODE_VERSION}`);
    log.warn(`  nvm alias default ${NODE_VERSION}`);
    log.warn('  # Windows');
    log.warn('  Install the LTS build from https://nodejs.org/ or use https://github.com/coreybutler/nvm-windows');
    log.warn('You have been warned!\n');
  } else {
    log.hat(`Using recommended version of Node (${NODE_VERSION})!`);
  }
};
