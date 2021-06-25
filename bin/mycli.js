#!/usr/bin/env node

const program = require('commander')
const i18n = require('../i18n.js')

program
  .command('sayhi')
  .alias('s')
  .option('-l, --language <lng>', 'by default the system language is used')
  .option('-n, --name <name>', 'your name')
  .action((options) => {
    const t = i18n(options.language)
    if (options.name) {
      console.log(t('salutationWithName', { name: options.name }))
    } else {
      console.log(t('salutation'))
    }
  })
  .on('--help', () => {
    console.log('  Examples:')
    console.log()
    console.log('    $ mycli sayhi')
    console.log('    $ mycli sayhi --language de')
    console.log('    $ mycli sayhi --language de --name John')
    console.log()
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
