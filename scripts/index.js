const yargs = require('yargs')
const path = require('path')
const root = path.dirname(__dirname)

yargs
  .command('build', 'Builds the web page.', {}, args => {
    process.NODE_ENV = 'production'
    return require('./bundler').bundle()
  })
  .command('dev', 'Starts a development server.', {}, args =>
    require('./bundler').serve()
  )
  .command('update-screenshots', 'Updates the screenshots.', {}, args =>
    require('./update-screenshots').run()
  )
  .command('push-screenshots', 'Commits and pushs the screenshots.', {}, args =>
    require('./push-screenshots').run()
  )
  .demandCommand()
  .help()
  .strict()
  .parse()
