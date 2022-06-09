# Color customization

Use props in [color related props](https://hc200ok.github.io/vue3-easy-data-table-doc/props/color-props.html) to customize border color, background color and font color of table head, table body and table footer.

## Example

```vue
<EasyDataTable
  v-model:items-selected="itemsSelected"
  :headers="headers"
  :items="items"
  buttons-pagination
  alternating
  
  table-border-color="#445269"
  row-border-color="#445269"

  header-background-color="#2d3a4f"
  header-font-color="#c1cad4"

  even-row-background-color="#4c5d7a"
  even-row-font-color="#fff"

  footer-background-color="#2d3a4f"
  footer-font-color="#c0c7d2"

  row-background-color="#2d3a4f"
  row-font-color="#c0c7d2"

  row-hover-background-color="#eee"
  row-hover-font-color="#2d3a4f"

  theme-color="#1d90ff"

  :hover-to-change-color="false"
/>
```
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/color-customization-d8nu1z?file=/src/App.vue)

<ColorCustomization/>