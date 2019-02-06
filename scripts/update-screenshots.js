// @ts-check
const puppeteer = require('puppeteer')
const express = require('express')
const jimp = require('jimp')
const log = require('./log')
const tmp = require('tmp')
const fs = require('fs')

exports.run = async () => {
  log.info('Starting static files server...')
  const server = await startStaticFilesServer()
  const address = /** @type {import('net').AddressInfo} */ (server.address())
  log.info('Server started on port %s...', address.port)
  const browser = await puppeteer.launch({
    args: ['--single-process'],
  })
  log.info('Browser launched.')
  const url = `http://localhost:${address.port}`
  await takeScreenshot(browser, url, 375, 667, 'Homepage-375w.png')
  await takeScreenshot(browser, url, 1280, 720, 'Homepage-1280w.png')
  await browser.close()
  server.close()
}

async function startStaticFilesServer() {
  const app = express()
  app.use(express.static('dist'))
  /** @type {import('http').Server} */
  const server = await new Promise(resolve => {
    app.listen(function() {
      resolve(this)
    })
  })
  return server
}

/**
 * @param {import('puppeteer').Browser} browser
 * @param {string} url
 * @param {number} width
 * @param {number} height
 * @param {string} filename
 * @return true if new images created
 */
async function takeScreenshot(browser, url, width, height, filename) {
  const page = await browser.newPage()
  log.info('New page created.')
  try {
    const tmpName = tmp.tmpNameSync({ postfix: '.png' })
    const target = '__screenshots__/' + filename
    await page.setViewport({ width, height })
    await page.goto(url)
    await page.screenshot({ path: tmpName })
    log.info({ url, width, height, tmpName }, 'Taken page screenshot.')
    if (!fs.existsSync(target)) {
      log.info('Create: "%s"', target)
      fs.copyFileSync(tmpName, target)
      return true
    } else {
      const existingImage = await jimp.read(target)
      const latestImage = await jimp.read(tmpName)
      const diff = jimp.diff(existingImage, latestImage)
      const threshold = 0.001
      if (diff.percent > threshold) {
        fs.copyFileSync(tmpName, target)
        log.info({ diffPercent: diff.percent }, 'Update: "%s"', target)
        return false
      } else {
        log.info('Already up-to-date: "%s"', target)
        return true
      }
    }
  } finally {
    await page.close()
  }
}
