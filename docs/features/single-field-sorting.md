# Single field sorting
Use `sort-by` and `sort-type` props to determine the initial sorting field and sorting type ('asc' or 'desc').

Set `sortable` property to `true` in a header item to make the corresponding columns sortable.

> :warning: **Attention**: Single field sorting is only available in client-side mode. In server-side mode, you need to request sorted data from server when you navigate to a new page.
> Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/server-side-paginate-and-sort.html) to check more information about server-side mode.

## Example

```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :sort-by="sortBy"
    :sort-type="sortType"
  />
</template>

<script lang="ts" setup>
import type { Header, Item, SortType } from "vue3-easy-data-table";

const sortBy = "weight";
const sortType: SortType = "desc";

const headers: Header[] = [
  { text: "WEIGHT (lbs)", value: "weight", sortable: true},
  ...
];
...
</script>
```


[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/single-field-sorting-rjniui?file=/src/App.vue)


<SingleFieldSorting/>