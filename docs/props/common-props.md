# Common props
common props can be used both in client-side mode and server-side mode.

| Name | Required | Type | Default | Description |
| -------- | ----------- | ---- | -------- | ------- |
| v-model: itemsSelected | false | Item[]<br>(Record<string, any>[]) | null | Items selected|
| alternating | false | boolean | false | Set `true` to color alternating (even and odd) rows.|
| body-expand-row-class-name | false | (item: Item, rowNumber: number) => string `or` string | '' | Function that returns custom class names for a body expanding row, or a string assigning class names for every body expanding row |
| body-row-class-name | false | (item: Item, rowNumber: number) => string `or` string | '' | Function that returns custom class names for a body row, or a string assigning class names for every body row |
| body-item-class-name | false | (column: string, index: rowNumber) => string `or` string | '' | Function that returns custom class names for a body row item, the second parameter means the row number in current page|
| body-text-direction | false | 'left' \| 'center' \| 'right' | 'left' | Text direction of body item|
| border-cell | false | boolean | false | Set `true` to show borderof  header item and body item |
| buttons-pagination | false | boolean | false | By default, you can only use prev and next buttons to navigate. But if you set the value to `true`, Seven visible page buttons will be generated automatically to help you navigate much easier |
| checkbox-column-width | false | number | null | Width of checkbox column. Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/fixed-column.html) for more information|
| current-page | false | number | 1 | Initial current page |
| empty-message | false | string | 'No Available Data' | Message to display when there is no data in table|
| expand-column-width | false | number | 36 | Width of expand column. Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/expand-slot.html) for more information|
| fixed-checkbox | false | boolean | false | Fixed checkbox column to the left side of table. Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/fixed-column.html) for more information |
| fixed-expand | false | boolean | false | Fixed expand column to the left side of table. Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/expand-slot.html) for more information |
| fixed-header | false | boolean | true | Fixed header to top of table. NOTE: Does not work in IE11 |
| fixed-index | false | boolean | false | Fixed index column to the left side of table. Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/fixed-column.html) for more information |
| filter-options | false | FilterOption[] | null | Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/filtering.html) for more information |
| headers | true | Header[]<br>(Header: {<br> &nbsp;&nbsp;&nbsp;&nbsp;text: string,<br>  &nbsp;&nbsp;&nbsp;&nbsp;value: string,<br>  &nbsp;&nbsp;&nbsp;&nbsp;sortable?: boolean,<br>  &nbsp;&nbsp;&nbsp;&nbsp;width?: number,<br>  &nbsp;&nbsp;&nbsp;&nbsp;fixed?: boolean,})<br>  | [] | Table header items |
| hide-footer | false | boolean | false | Set `true` to hide native footer of `vue3-easy-data-table`.|
| hide-rows-per-page | false | boolean | false |Set to `true` to hide rows per page|
| header-class-name | false | string | '' | String assigning class names for table header |
| header-item-class-name | false | (item: Header, columnNumber: number) => string `or` string | '' | Function that returns custom class names for a header item, or a string assigning class names for every header item |
| header-text-direction | false | 'left' \| 'center' \| 'right' | 'left' | Text direction of header item|
| index-column-width | false | number | 60 | Width of index column. Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/fixed-column.html) for more information|
| items | true | Item[] <br>(Item:  Record<string, any>) | [] | Table body items |
| loading | false | boolean | false | If true and no items are provided, then a loading animation and will be shown |
| must-sort | false | boolean | false | If `true` then one can not disable sorting, it will always switch between ascending and descending |
| no-hover | false | boolean | false |Set to `true` to forbidden change color when hovering table row|
| rows-of-page-separator-message | false | string | 'of' | Rows of page separator message. e.g. 1-5 `of` 5 |
| rows-items | false | number[] | [25, 50, 100] | A number array of rows-per-page, working as the options of `rows per page` selector |
| rows-per-page | false | number | 25 | Rows of items to display in per page |
| rows-per-page-message | false | string | 'rows per page:' | Rows per page message |
| show-index | false | boolean | false | Set `true` to show index of item |
| show-index-symbol | false | string | '#' | Text of index column header when `show-index` is `true` |
| table-class-name | false | string | '' | String assigning class names for table |
| table-height | false | number \| null | null | Height of table (table header and table body, without footer) |
| table-min-height | false | number | 180 | Min height of table (table header and table body, without footer) |
| theme-color | false | string | '#42b883' | Fill color of checkbox, background color of active option of rows selector, loading color and background color of active button of buttons pagination |
