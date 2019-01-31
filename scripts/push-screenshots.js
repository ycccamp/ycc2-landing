// @ts-check
const { spawnSync, execSync } = require('child_process')
const log = require('./log')

exports.run = async () => {
  if (spawnSync('git diff --exit-code --quiet', { shell: true }).status === 0) {
    log.info('Working directory clean. Nothing to do.')
    return
  }
  log.info('Got things to commit!')
  execSync('git commit -a -m "Update screenshots"', {
    env: {
      ...process.env,
      GIT_COMMITTER_NAME: 'Janitor',
      GIT_AUTHOR_NAME: 'Janitor',
      EMAIL: 'repository-janitor[bot]@users.noreply.github.com',
    },
    stdio: 'inherit',
  })
}
