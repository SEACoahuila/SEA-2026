import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#00897B',
    success: '#4CAF50',
    warning: '#FB8C00',
    article: '#f7f8fc',
          bluegreyt: '#F5F5F5',
          cc: '#F5F5F5',
          peac: '#FBF8EE',
          sei: '#F5F5F5',
          seicard: '#37474F',
          revista: '#f7edf2',
          cpc: '#EDE7F6',
  
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
    
  }
}

export default defineNuxtPlugin((app) => {
  
  const vuetify = createVuetify({

    // ... your configuration
theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  
  })
  app.vueApp.use(vuetify)
})

    // theme: {
    //   dark: false,
    //   light: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3,
    //       bluegreyt: '#37474F',
    //       cc: '#F7F3DF ',
    //       peac: '#191501 ',
    //       sei: '#2a2f30',
    //       revista: '#1a000d'
    //     },
    //     light: {
    //       primary: colors.blue.lighten2,
    //       accent: colors.grey.lighten3,
    //       secondary: colors.amber.lighten3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.lighten4,
    //       success: colors.green.lighten3,
    //       article: '#F5F5F5',
    //       bluegreyt: '#F5F5F5',
    //       cc: '#F5F5F5',
    //       peac: '#FBF8EE',
    //       sei: '#F5F5F5',
    //       seicard: '#37474F',
    //       revista: '#f7edf2',
    //       cpc: '#EDE7F6',
    //     }
    //   }
    // }