# Common props
common props can be used both in client-side mode and server-side mode.

| Name | Required | Type | Default | Description |
| -------- | ----------- | ---- | -------- | ------- |
| v-model: itemsSelected | false | Item[]<br>(Record<string, any>[]) | null | Items selected|
| alternating | false | boolean | false | Set `true` to color alternating (even and odd) rows.|
| body-font-color | false | string | '#212121' | Font color of table body|
| body-font-size | false | number | 12 | Font size of table body, including foot pagination |
| border-color | false | string | '#e0e0e0' | Border color |
| buttons-pagination | false | boolean | false | By default, you can only use prev and next buttons to navigate. But if you set the value to `true`, Seven visible page buttons will be generated automatically to help you navigate much easier |
| dense | false | boolean | false | Set `true` to decrease the height of rows|
| empty-message | false | string | 'No Available Data' | Message to display when there is no data in table|
| fixed-header | false | boolean | true | Fixed header to top of table. NOTE: Does not work in IE11 |
| headers | true | Header[]<br>(Header: {<br> &nbsp;&nbsp;&nbsp;&nbsp;text: string,<br>  &nbsp;&nbsp;&nbsp;&nbsp;value: string,<br>  &nbsp;&nbsp;&nbsp;&nbsp;sortable?: boolean,})<br>  | [] | Table header items |
| header-background-color | false | string | '#fff' | Background color of table head |
| header-font-color | false | string | '#373737' | Font color of table head |
| items | true | Item[] <br>(Item:  Record<string, any>) | [] | Table body items |
| loading | false | boolean | false | If true and no items are provided, then a loading bar and loading message will be shown |
| loading-message | false | string | 'Loading, please wait.' | Message shown when loading is true and no items are provided |
| max-height | false | number \| null | null | Max height of table (table header and table body, not including footer pagination) |
| rows-hover-color | false | string | '#eee' | Background color of row when mouse hover |
| rows-items | false | number[] | [25, 50, 100] | A number array of rows-per-page, working as the options of `rows per page` selector |
| rows-per-page | false | number | 25 | Rows of items to display in per page |
| show-index | false | boolean | false | Set `true` to show index of item.|
| theme-color | false | string | '#42b883' | Fill color of checkbox, background color of active option of rows selector, color of loading bar and  background color of active button of buttons pagination |