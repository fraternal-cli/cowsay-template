const { Config } = require('fraternal');

module.exports = Config()
  .derive('packageName', ({ values }) => values.projectName.toLowerCase())
  .prompt('text', 'What does the cow say?')
  .setupFiles()
  .run('npm install')
  .run('npm run build')
  .log(
    ({ chalk, values }) => `
Your cow is ready to talk!

Next you'll want to run
  ${chalk.green(`cd ${values.projectName}`)}
  ${chalk.green('npm start')}`
  );
