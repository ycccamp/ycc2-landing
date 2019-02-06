// @ts-check
const { spawnSync, execSync } = require('child_process')
const log = require('./log')

exports.run = async () => {
  spawnSync('git add __screenshots__', { shell: true, stdio: 'inherit' })
  if (
    spawnSync('git commit -a -m ":camera_flash: Update screenshots"', {
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
  try {
    execSync('git push origin "$(git rev-parse --abbrev-ref HEAD)"', {
      stdio: 'inherit',
    })
    log.info('Pushed successfully!')
    return
  } catch (e) {
    log.info('Cannot push... but it’s fine!')
    // Someone else may have pushed to the branch in the meantime,
    // and another build should have triggered.
  }
}
