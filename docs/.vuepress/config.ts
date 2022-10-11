const { defaultTheme } = require('@vuepress/theme-default')
const VueExamplePlugin = require('vuepress-plugin-vue-example');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { searchPlugin } = require('@vuepress/plugin-search')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

module.exports = {
  base: '/vue3-easy-data-table-doc/',
  lang: 'en-US',
  title: 'vue3-easy-data-table',
  description: 'A customizable and easy-to-use data table component made with Vue.js 3.x.',
  plugins: [
    mediumZoomPlugin({
      selector: '.zoomable-images img'
    }),
    searchPlugin(),
    VueExamplePlugin({
      componentsPath: '/components/'
    }),
    registerComponentsPlugin({
      components: {
        ItemSlot: path.resolve(__dirname, './components/ItemSlot.vue'),
        Basic: path.resolve(__dirname, './components/Basic.vue'),
        ButtonsPagination: path.resolve(__dirname, './components/ButtonsPagination.vue'),
        MultipleSelecting: path.resolve(__dirname, './components/MultipleSelecting.vue'),
        SingleFieldSorting: path.resolve(__dirname, './components/SingleFieldSorting.vue'),
        Searching: path.resolve(__dirname, './components/Searching.vue'),
        ServerSidePaginateAndSort: path.resolve(__dirname, './components/ServerSidePaginateAndSort.vue'),
        ThemeColor: path.resolve(__dirname, './components/ThemeColor.vue'),
        PaginationSlot: path.resolve(__dirname, './components/PaginationSlot.vue'),
        ShowIndex: path.resolve(__dirname, './components/ShowIndex.vue'),
        Alternating: path.resolve(__dirname, './components/Alternating.vue'),
        BorderCell: path.resolve(__dirname, './components/BorderCell.vue'),
        StyleCustomization: path.resolve(__dirname, './components/StyleCustomization.vue'),
        LoadingSlot: path.resolve(__dirname, './components/LoadingSlot.vue'),
        FooterCustomization: path.resolve(__dirname, './components/FooterCustomization.vue'),
        MixBlend: path.resolve(__dirname, './components/MixBlend.vue'),
        FooterCustomizationServer: path.resolve(__dirname, './components/FooterCustomizationServer.vue'),
        Filtering: path.resolve(__dirname, './components/Filtering.vue'),
        ClickRow: path.resolve(__dirname, './components/ClickRow.vue'),
        ColumnWidth: path.resolve(__dirname, './components/ColumnWidth.vue'),
        FixedCheckbox: path.resolve(__dirname, './components/FixedCheckbox.vue'),
        FixedColumns: path.resolve(__dirname, './components/FixedColumns.vue'),
        FixedCheckboxAndIndex: path.resolve(__dirname, './components/FixedCheckboxAndIndex.vue'),
        FixedIndex: path.resolve(__dirname, './components/FixedIndex.vue'),
        FixedItemSlot: path.resolve(__dirname, './components/FixedItemSlot.vue'),
        HeaderSlot: path.resolve(__dirname, './components/HeaderSlot.vue'),
        ExpandSlot: path.resolve(__dirname, './components/ExpandSlot.vue'),
        ExpandSlotFixed: path.resolve(__dirname, './components/ExpandSlotFixed.vue'),
        ExpandAsync: path.resolve(__dirname, './components/ExpandAsync.vue'),
        ClassNameCustomization: path.resolve(__dirname, './components/ClassNameCustomization.vue'),
        ServerMustSort: path.resolve(__dirname, './components/ServerMustSort.vue'),
        UpdateSortEvent: path.resolve(__dirname, './components/UpdateSortEvent.vue'),
        MultiSortClient: path.resolve(__dirname, './components/MultiSortClient.vue'),
        MultiSortServer: path.resolve(__dirname, './components/MultiSortServer.vue'),
      }
    })
  ],
  theme: defaultTheme({
    darkMode: false,
    logo: 'https://bafkreifo3ijm2a3tvuervp63lyrwrledgecmmglonny3qh3sy7lmi6e2ve.ipfs.dweb.link/?filename=logo.png',
    repo: 'https://github.com/HC200ok/vue3-easy-data-table/',
    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction/',
      },
      {
        text: 'Getting started',
        link: '/getting-started/',
        children: [
          {
            text: 'ES module',
            link: '/getting-started/es-module',
          },
          {
            text: 'Via CDN',
            link: '/getting-started/via-cdn',
          },
        ]
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
            text: 'Border cell',
            link: '/features/border-cell',
          },
          {
            text: 'Buttons pagination',
            link: '/features/buttons-pagination',
          },
          {
            text: 'Class name customization',
            link: '/features/class-name-customization',
          },
          {
            text: 'Click row',
            link: '/features/click-row/',
          },
          {
            text: 'Column width',
            link: '/features/column-width',
          },
          {
            text: 'Expandable row',
            link: '/features/expand-slot',
          },
          {
            text: 'Filtering',
            link: '/features/filtering/',
          },
          {
            text: 'Fixed columns',
            link: '/features/fixed-column',
          },
          {
            text: 'Footer customization',
            link: '/features/footer-customization',
          },
          {
            text: 'Header slot',
            link: '/features/header-slot',
          },
          {
            text: 'Item slot',
            link: '/features/item-slot',
          },
          {
            text: 'Loading slot',
            link: '/features/loading-slot',
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
            text: 'Multiple fields sorting',
            link: '/features/multiple-fields-sorting',
          },
          {
            text: 'Theme color',
            link: '/features/theme-color',
          },
          {
            text: 'Style customization',
            link: '/features/style-customization',
          },
        ]
      },
      // {
      //   text: 'Features',
      //   link: '/features/',
      //   children: [
      //     {
      //       text: 'Alternating',
      //       link: '/features/alternating',
      //     },
      //     {
      //       text: 'Item slot',
      //       link: '/features/item-slot',
      //     },
      //     {
      //       text: 'Buttons pagination',
      //       link: '/features/buttons-pagination',
      //     },
      //     {
      //       text: 'Multiple selecting',
      //       link: '/features/multiple-selecting',
      //     },
      //     {
      //       text: 'Pagination slot',
      //       link: '/features/pagination-slot',
      //     },
      //     {
      //       text: 'Searching',
      //       link: '/features/searching',
      //     },
      //     {
      //       text: 'Server side paginate and sort',
      //       link: '/features/server-side-paginate-and-sort',
      //     },
      //     {
      //       text: 'Show index',
      //       link: '/features/show-index',
      //     },
      //     {
      //       text: 'Single field sorting',
      //       link: '/features/single-field-sorting',
      //     },
      //     {
      //       text: 'Theme color',
      //       link: '/features/theme-color',
      //     },
      //     {
      //       text: 'Loading slot',
      //       link: '/features/loading-slot',
      //     },
  
      //     {
      //       text: 'Filtering',
      //       link: '/features/filtering/',
      //     },
      //     {
      //       text: 'Click row',
      //       link: '/features/click-row/',
      //     },
      //     {
      //       text: 'Column width',
      //       link: '/features/column-width',
      //     },
      //     {
      //       text: 'Fixed columns',
      //       link: '/features/fixed-column',
      //     },
      //     {
      //       text: 'Header slot',
      //       link: '/features/header-slot',
      //     },
      //     {
      //       text: 'Expandable row',
      //       link: '/features/expand-slot',
      //     },
      //     {
      //       text: 'Border cell',
      //       link: '/features/border-cell',
      //     },
      //     {
      //       text: 'Style customization',
      //       link: '/features/style-customization',
      //     },
      //     {
      //       text: 'Class name customization',
      //       link: '/features/class-name-customization',
      //     },
      //   ],
      // },
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
        text: 'CSS variables',
        link: '/css-variables/',
      },
      {
        text: 'Events',
        link: '/event/',
      },
      {
        text: 'Todo',
        link: '/roadmap/',
      },
      {
        text: 'Contribute',
        link: '/contribute/',
      },
    ],
  }),
}