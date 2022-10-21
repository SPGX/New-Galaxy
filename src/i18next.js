import { initReactI18next, useTranslation } from 'react-i18next'
import i18n from 'i18next'
// import { reactI18nextModule } from 'react-i18next'
// import localStorage from 'localStorage'

import tranEN from './Languages/en.json'
import tranTH from './Languages/th.json'
import tranTC from './Languages/tc.json'
import tranSC from './Languages/sc.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: tranEN },
    th: { translation: tranTH },
    tc: { translation: tranTC },
    sc: { translation: tranSC },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

// Traditional chinese

// Simplified chinese
