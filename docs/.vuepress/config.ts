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
        Basic: path.resolve(__dirname, './components/Basic.vue'),
        ButtonsPagination: path.resolve(__dirname, './components/ButtonsPagination.vue'),
        Dense: path.resolve(__dirname, './components/Dense.vue'),
        MultipleSelecting: path.resolve(__dirname, './components/MultipleSelecting.vue'),
        SingleFieldSorting: path.resolve(__dirname, './components/SingleFieldSorting.vue'),
        Searching: path.resolve(__dirname, './components/Searching.vue'),
        ServerSidePaginateAndSort: path.resolve(__dirname, './components/ServerSidePaginateAndSort.vue'),
        ThemeColor: path.resolve(__dirname, './components/ThemeColor.vue'),
        PaginationSlot: path.resolve(__dirname, './components/PaginationSlot.vue'),
        ShowIndex: path.resolve(__dirname, './components/ShowIndex.vue'),
        Alternating: path.resolve(__dirname, './components/Alternating.vue'),
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
        text: 'Modes',
        link: '/modes/',
      },
      {
        text: 'Features',
        link: '/features/',
        children: [
          {
            text: 'Alternating',
            link: '/features/alternating',
          },
          {
            text: 'Item slot',
            link: '/features/item-slot',
          },
          {
            text: 'Buttons pagination',
            link: '/features/buttons-pagination',
          },
          {
            text: 'Dense',
            link: '/features/dense',
          },
          {
            text: 'Multiple selecting',
            link: '/features/multiple-selecting',
          },
          {
            text: 'Pagination slot',
            link: '/features/pagination-slot',
          },

          {
            text: 'Searching',
            link: '/features/searching',
          },
          {
            text: 'Server side paginate and sort',
            link: '/features/server-side-paginate-and-sort',
          },
          {
            text: 'Show index',
            link: '/features/show-index',
          },
          {
            text: 'Single field sorting',
            link: '/features/single-field-sorting',
          },
          {
            text: 'Theme color',
            link: '/features/theme-color',
          },
        ],
      },
      {
        text: 'Props',
        link: '/props/',
        children: [
          {
            text: 'Common props',
            link: '/props/common-props',
          },
          {
            text: 'Client side mode props',
            link: '/props/client-side-mode-only-props',
          },
          {
            text: 'Server side mode props',
            link: '/props/server-side-mode-only-props',
          },
        ]
      },
      {
        text: 'Contribute',
        link: '/contribute/',
      }
    ],
  }),
}