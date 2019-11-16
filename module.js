const { resolve, join } = require('path')
const { readdirSync } = require('fs')

export default function (moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.customSelect
  }

  if (!options.namespace) options.namespace = 'customSelect'
  const { namespace } = options

  const pluginsToSync = [
    'components/index.js',
    'debug.js',
  ]
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options
    })
  }

  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['components/lib']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options
      })
    }
  }
}
module.exports.meta = require('./package.json')
