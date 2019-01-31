// @ts-check
const { spawnSync, execSync } = require('child_process')
const log = require('./log')

exports.run = async () => {
  spawnSync('git add screenshots', { shell: true, stdio: 'inherit' })
  if (
    spawnSync('git commit -a -m "Update screenshots"', {
      env: {
        ...process.env,
        GIT_COMMITTER_NAME: 'Janitor',
        GIT_AUTHOR_NAME: 'Janitor',
        EMAIL: 'repository-janitor[bot]@users.noreply.github.com',
      },
      shell: true,
      stdio: 'inherit',
    }).status > 0
  ) {
    log.info('Working directory clean. Nothing to do.')
    return
  }
  log.info('Got things to push!')
  for (let i = 0; i < 3; i++) {
    try {
      execSync('git push -u "$(git rev-parse --abbrev-ref HEAD)"', {
        stdio: 'inherit',
      })
      log.info('Pushed successfully!')
      return
    } catch (e) {
      log.info('Got things to pull!')
      execSync(
        'git pull origin "$(git rev-parse --abbrev-ref HEAD)" --no-edit',
        { stdio: 'inherit' }
      )
    }
  }
  throw new Error('Cannot push!')
}
