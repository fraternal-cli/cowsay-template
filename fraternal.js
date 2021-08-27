const { Config } = require('fraternal');

module.exports = Config()
  .derive('packageName', ({ projectName }) => projectName.toLowerCase().trim().split(/\s+/).join('-'), {
    searchText: '~~package-name~~',
  })
  .prompt('text', 'What does the cow say?')
  .derive('cowText', ({ values }) => values.text.split("'").join("\\'"))
  .derive('topLine', ({ values }) =>
    Array(values.text.length + 2)
      .fill('_')
      .join('')
  )
  .derive('bottomLine', ({ values }) =>
    Array(values.text.length + 2)
      .fill('-')
      .join('')
  )
  .setupFiles()
  .run('npm install')
  .run('npm run build')
  .log(
    ({ chalk, projectName }) => `
Your cow is ready to talk!

Next you'll want to run
  ${chalk.green(`cd ${projectName}`)}
  ${chalk.green('npm start')}`
  );
