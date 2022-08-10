# Click row
> This is a new feature since version `1.2.4`

`click-row` event emits when a table row is clicked. The argument of the event includes the item data that was clicked. If you are using multiple-selecting and show-index feature, `isSelected` and `indexInCurrentPage` will be also included.

## Type declaration of event argument

```ts
type ClickRowArgument = Item & {
  isSelected?: boolean,
  indexInCurrentPage?: number,
}
```

## Example
```vue
<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    show-index
    :headers="headers"
    :items="items"
    @click-row="showRow"
  />

  row clicked:<br />
  <div id="row-clicked"></div>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";

// omit

const showRow = (item: ClickRowArgument) => {
  document.getElementById('row-clicked').innerHTML = JSON.stringify(item);
};

// omit
</script>
```

<ClickRow/>