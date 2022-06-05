const { defaultTheme } = require('@vuepress/theme-default')
const VueExamplePlugin = require('vuepress-plugin-vue-example');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'vue3-easy-datat-table',
  description: 'A simple and easy-to-use data table component made with Vue.js 3.x.',
  plugins: [
    VueExamplePlugin({
      componentsPath: '/components/'
    }),
    registerComponentsPlugin({
      components: {
        ItemSlot: path.resolve(__dirname, './components/ItemSlot.vue'),

      }
    })
  ],
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction/',
      },
      {
        text: 'Getting started',
        link: '/getting-started/',
      },
      {
        text: 'Features',
        link: '/features/',
        children: [
          {
            text: 'Item slot',
            link: '/features/item-slot',
          },
        ],
      },
      {
        text: 'Props',
        link: '/props/',
      },
    ],
  }),
}