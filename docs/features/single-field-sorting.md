# Single field sorting
Use `sort-by` and `sort-type` to determine the initial sorting field and sorting type ('asc' or 'desc').

Set `sortable` property to true in a header items to make the corresponding columns sortable.

## Example

```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :sort-by="weight"
    :sort-type="desc"
  />
</template>

<script lang="ts" setup>
const sortBy = "weight";
const sortType = "desc";

const headers: Header[] = [
  { text: "WEIGHT (lbs)", value: "weight", sortable: true},
  ...
];
...
</script>
```


[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/single-field-sorting-rjniui?file=/src/App.vue)


<SingleFieldSorting/>