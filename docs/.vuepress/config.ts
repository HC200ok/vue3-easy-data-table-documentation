const { defaultTheme } = require('@vuepress/theme-default')
const VueExamplePlugin = require('vuepress-plugin-vue-example');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  base: '/vue3-easy-data-table-doc/',
  lang: 'en-US',
  title: 'vue3-easy-data-table',
  description: 'A customizable and easy-to-use data table component made with Vue.js 3.x.',
  plugins: [
    searchPlugin(),
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
        ColorCustomization: path.resolve(__dirname, './components/ColorCustomization.vue'),
        LoadingSlot: path.resolve(__dirname, './components/LoadingSlot.vue'),
        FooterCustomization: path.resolve(__dirname, './components/FooterCustomization.vue'),
        MixBlend: path.resolve(__dirname, './components/MixBlend.vue'),
        FooterCustomizationServer: path.resolve(__dirname, './components/FooterCustomizationServer.vue'),
      }
    })
  ],
  theme: defaultTheme({
    darkMode: false,
    logo: 'https://github.com/HC200ok/vue3-easy-data-table/blob/main/images/logo.png?raw=true',
    repo: 'https://github.com/HC200ok/vue3-easy-data-table/',
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
          {
            text: 'Color customization',
            link: '/features/color-customization',
          },
          {
            text: 'Loading slot',
            link: '/features/loading-slot',
          },
          {
            text: 'Footer customization',
            link: '/features/footer-customization',
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
          {
            text: 'Color props',
            link: '/props/color-props',
          }
        ]
      },
      {
        text: 'Roadmap',
        link: '/roadmap/',
      },
      {
        text: 'Contribute',
        link: '/contribute/',
      }
    ],
  }),
}