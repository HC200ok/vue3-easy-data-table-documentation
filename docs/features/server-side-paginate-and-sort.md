# Server side paginate and sort
Also called server-side mode, In this mode, you’re loading data already paginated and sorted from a server. You should watch the `serverOptions` to know when to request for new page. Don't forget to use the `loading` prop to display a loading bar while fetching data.

Attention: 
1. `server-items-length` and `v-model:server-options` props are required.
2. searching and single field sorting features are not available in server-side mode. Please request sorted and searched data from server by Restful api (for example: http://localhost:8080/search?q=stephen+curry&sortBy=age&sortType=desc) or server side rendering.
## Example

```vue
<template>
  <EasyDataTable
    v-model:server-options="serverOptions"
    :server-items-length="serverItemsLength"
    :loading="loading"
    :headers="headers"
    :items="items"
  />
</template>

<script lang="ts" setup>
import { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { mockServerItems } from "../mock";
import { ref, computed, watch } from "vue";

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

const items = ref<Item[]>([]);

const loading = ref(false);
const serverItemsLength = ref(0);
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: 'age',
  sortType: 'desc',
});

const loadFromServer = async () => {
  loading.value = true;
  const {
    serverCurrentPageItems,
    serverTotalItemsLength,
  } = await mockServerItems(serverOptions.value);
  items.value = serverCurrentPageItems;
  serverItemsLength.value = serverTotalItemsLength;
  loading.value = false;
};

// initial load
loadFromServer();

watch(serverOptions, (value) => { loadFromServer(); }, { deep: true });
</script>
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/server-side-paginate-and-sort-mif1nr?file=/src/App.vue)

<ServerSidePaginateAndSort/>




