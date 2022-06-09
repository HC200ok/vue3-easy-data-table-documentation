# Footer customization

vue3-easy-data-table exposes some footer related variables and footer related functions:

| Name | Type |  Description |
| -------- | ----------- | ---- |
| clientItemsLength | variable | Total amount of items in `client-side` mode. <br>Attention: In server-side mode, please use `serverItemsLength` prop instead!|
| currentPageFirstIndex | variable | First index in current page |
| currentPageLastIndex | variable | Last index in current page |
| currentPa ginationNumber | variable | Current pagination number |
| maxPaginationNumber | variable |Max pagination number |
| isLastPage | variable | Is the last page |
| isFirstPage | variable | Is the first page |
| nextPage | function | Navigate to the next pag |
| prevPage | function | Navigate to the previous page |
| updatePage | function | Navigate to the specified page |

You can access to these variables and functions by using [template refs](https://vuejs.org/guide/essentials/template-refs.html).
Then you can customize your own footer outside of vue3-easy-data-table as the example provided:

**Attention**: don't forget to set `show-footer` to `false` to hide the native footer of vue3-easy-data-table
## Example 

### In client-side mode

```vue
<template>
  <EasyDataTable
    ref="dataTable"
    :headers="headers"
    :items="items"
    :rows-per-page="10"
    :show-footer="false"
  />
  
  <div class="customize-footer">
    <div class="customize-index">
      Now displaying: {{currentPageFirstIndex}} ~ {{currentPageLastIndex}} of {{clientItemsLength}}
    </div>
  
    <div class="customize-buttons">
      <span
        v-for="paginationNumber in maxPaginationNumber"
        class="customize-button"
        :class="{'active': paginationNumber === currentPaginationNumber}"
        @click="updatePage(paginationNumber)"
      >
        {{paginationNumber}}
      </span>
    </div>
  
    <div class="customize-pagination">
      <button class="prev-page" @click="prevPage" :disabled="isFirstPage">prev page</button>
      <button class="next-page" @click="nextPage" :disabled="isLastPage">next page</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Header, Item } from "vue3-easy-data-table";
import { computed, ref } from 'vue';
import { mockClientItems } from "../mock";

// $ref dataTable
const dataTable = ref();

// index related
const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex);
const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex);
const clientItemsLength = computed(() => dataTable.value?.clientItemsLength);

// pagination related
const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber);
const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber);

const isFirstPage = computed(() => dataTable.value?.isFirstPage);
const isLastPage = computed(() => dataTable.value?.isLastPage);

const nextPage = () => {
  dataTable.value.nextPage();
};
const prevPage = () => {
  dataTable.value.prevPage();
};
const updatePage = (paginationNumber: number) => {
  dataTable.value.updatePage(paginationNumber);
};

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

const items: Item[] = mockClientItems(200);
</script>

<style>
/* omit */
...
</style>
```

<FooterCustomization/>


### In server-side mode

Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/server-side-paginate-and-sort.html) to check how to use server-side mode

```vue
<template>
  <EasyDataTable
    ref="dataTable"
    v-model:server-options="serverOptions"
    :headers="headers"
    :items="items"
    :server-items-length="serverItemsLength"
    :show-footer="false"
    :loading="loading"
  />

  <div class="customize-footer">
    <div class="customize-index">
      <!-- In server-side mode, please use serverItemsLength prop not clientItemsLength variable !!! -->
      Now displaying: {{currentPageFirstIndex}} ~ {{currentPageLastIndex}} of {{serverItemsLength}}
    </div>
    <!-- omit -->
    <!-- ... -->
  </div>
</template>
```

<FooterCustomizationServer/>
