#!/usr/bin/env node

const whichPm = require('which-pm-runs');
const argv = require('yargs')
  .usage('Usage: $0 --message "Please use yarn"')
  .option('message', {
    default: ''
  })
  .demand(1).argv;

const expectedPm = argv._[0];
let runningPm = whichPm();

if (runningPm) {
  runningPm = runningPm.name;
}

if (runningPm !== expectedPm) {
  const message = argv.message ? argv.message : `Please use ${expectedPm}.`;
  console.error(message);
  process.exitCode = 1;
}
