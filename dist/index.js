const core = require('@actions/core');
const github = require('@actions/github');
const {execSync} = require('child_process');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

  console.log(`cwd : ${process.cwd()}`);
  console.log(`dirname : ${__dirname}`);

  console.log(`ls cwd : ` + execSync(`ls -al ` + process.cwd()).toString());
  console.log(`ls dirname : ` + execSync(`ls -al ` + __dirname).toString());
  console.log(`ls dirname/../ : ` + execSync(`ls -al ${__dirname}/../`).toString());

  console.log(`ls ./ : ${execSync(`ls -al ./`).toString()}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
