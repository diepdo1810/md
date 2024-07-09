import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import Store from './stores'
import ElementPlus from './element'
import App from './App.vue'

import en from './locale/lang/en'
import vi from './locale/lang/vi'

import 'virtual:uno.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'

/* 每个页面公共css */
import './assets/less/theme.less'
import './assets/less/style-mirror.less'

import 'codemirror/mode/css/css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/css-hint'

const i18n = createI18n({
  locale: `en`,
  messages: {
    en,
    vi,
  },
  silentTranslationWarn: true,
})

const app = createApp(App)

app.use(i18n)
app.use(Store)
app.use(ElementPlus)

app.mount(`#app`)
