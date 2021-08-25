const { Fraternal } = require('fraternal');

module.exports = new Fraternal()
  .derive('packageName', ({ values }) => values.projectName.toLowerCase())
  .prompt('text', 'What does the cow say?')
  .setupFiles();
