const i18next = require('i18next')

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale

// if no pkg (see in package.json) is used, also the i18next-fs-backend could be used...
i18next
  .init({
    // debug: true,
    initImmediate: false, // setting initImediate to false, will load the resources synchronously
    fallbackLng: 'en',
    resources: {
      en: {
        translation: require('./locales/en/translation.json')
      },
      de: {
        translation: require('./locales/de/translation.json')
      }
    }
  })

module.exports = (lng) => i18next.getFixedT(lng || systemLocale)
