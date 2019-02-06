const Bundler = require('parcel-bundler')
const path = require('path')
const vfs = require('vinyl-fs')
const rimraf = require('rimraf')

const distDir = path.resolve(__dirname, '../dist')
const srcDir = path.resolve(__dirname, '../src')
const staticDir = path.resolve(__dirname, '../static')

const options = {
  outDir: distDir,
  outFile: 'index.html',
  publicUrl: '/',
}

const bundler = new Bundler(path.join(srcDir, 'index.html'), options)

exports.serve = () => bundler.serve()
exports.bundle = async () => {
  rimraf.sync(distDir)
  await bundler.bundle()
  await new Promise((resolve, reject) => {
    vfs
      .src(staticDir + '/**/*')
      .pipe(vfs.dest(distDir))
      .on('end', resolve)
      .on('error', reject)
  })
  process.exit(0)
}
