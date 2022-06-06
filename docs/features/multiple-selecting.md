# Multiple selecting
Using the `v-model:items-selected` will enable you to gather data of specific items by toggling checkbox.

## Example

```vue
<EasyDataTable
  v-model:items-selected="itemsSelected"
  :headers="headers"
  :items="items"
/>

<script lang="ts" setup>
import { ref } from "vue";
const itemsSelected: Item[] = ref([]);
...
</script>
```
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/multiple-selecting-bhe0r9?file=/src/App.vue)

<MultipleSelecting/>

