# Footer customization

## Method 1: Exposed variables and functions
`vue3-easy-data-table` exposes some footer related variables and functions:

| Name | Type |  Description |
| -------- | ----------- | ---- |
| clientItemsLength | variable | Total amount of items in `client-side` mode. <br>Attention: In server-side mode, please use `serverItemsLength` prop instead!|
| currentPageFirstIndex | variable | First index in current page |
| currentPageLastIndex | variable | Last index in current page |
| currentPaginationNumber | variable | Current pagination number |
| maxPaginationNumber | variable |Max pagination number |
| isLastPage | variable | Is the last page |
| isFirstPage | variable | Is the first page |
| nextPage | function | Navigate to the next pag |
| prevPage | function | Navigate to the previous page |
| updatePage | function | Navigate to the specified page |
| rowsPerPageOptions | variable | Options of rows per page  |
| rowsPerPageActiveOption | variable | Active option of rows per page |
| updateRowsPerPageActiveOption | function | Update active option of rows per page |

You can access to these variables and functions through [template refs](https://vuejs.org/guide/essentials/template-refs.html).
Then you can customize your own footer outside of the `vue3-easy-data-table` as the examples provided:

### Examples

#### In client mode

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
    <div class="customize-rows-per-page">
      <select
        class="select-items"
        @change="updateRowsPerPageSelect"
      >
        <option
          v-for="item in rowsPerPageOptions"
          :key="item"
          :selected="item === rowsPerPageActiveOption"
          :value="item"
        >
          {{ item }} rows per page
        </option>
      </select>
    </div>

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

// rows per page related
const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions);
const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption);

const updateRowsPerPageSelect = (e: Event) => {
  dataTable.value.updateRowsPerPageActiveOption(Number((e.target as HTMLInputElement).value));
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

**Attention**: don't forget to set `show-footer` to `false` to to hide the native footer of `vue3-easy-data-table`

#### In server-side mode

Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/server-side-paginate-and-sort.html) to check how to use server-side mode

```vue
<template>
  <EasyDataTable
    ref="dataTable"
    v-model:server-options="serverOptions"
    :headers="headers"
    :items="items"
    :server-items-length="serverItemsLength"
    hide-footer
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

**Attention**: In server-side mode, please use `serverItemsLength` prop instead of `clientItemsLength`.


## Method 2: Composable function

You can alos use `usePagination` function in [`use-vue3-easy-data-table`](https://github.com/HC200ok/use-vue3-easy-data-table) to achieve the customization more easily.

### Install
```
npm install use-vue3-easy-data-table
```

### Usage
```vue
<template>
  <EasyDataTable
    ref="dataTable"
    :headers="headers"
    :items="items"
    :rows-per-page="10"
    hide-footer
  />
  
  <div class="customize-footer">
    <div class="customize-rows-per-page">
      <select
        class="select-items"
        @change="updateRowsPerPageSelect"
      >
        <option
          v-for="item in rowsPerPageOptions"
          :key="item"
          :selected="item === rowsPerPageActiveOption"
          :value="item"
        >
          {{ item }} rows per page
        </option>
      </select>
    </div>

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
import { computed, ref } from "vue";
import { mockClientItems } from "../mock";
import { usePagination, useRowsPerPage } from "use-vue3-easy-data-table";
import type { UsePaginationReturn, UseRowsPerPageReturn } from "use-vue3-easy-data-table";

const dataTable = ref();

const {
  currentPageFirstIndex,
  currentPageLastIndex,
  clientItemsLength,
  maxPaginationNumber,
  currentPaginationNumber,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  updatePage,
}: UsePaginationReturn = usePagination(dataTable);

const {
  rowsPerPageOptions,
  rowsPerPageActiveOption,
  updateRowsPerPageActiveOption,
}: UseRowsPerPageReturn = useRowsPerPage(dataTable);

const updateRowsPerPageSelect = (e: Event) => {
  updateRowsPerPageActiveOption(Number((e.target as HTMLInputElement).value));
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

### Type declaration

| Name | Type |  Description |
| -------- | ----------- | ---- |
| clientItemsLength | ComputedRef<number \| undefined> | Total amount of items in `client-side` mode. <br>Attention: In server-side mode, please use `serverItemsLength` prop instead!|
| currentPageFirstIndex | ComputedRef<number \| undefined> | First index in current page |
| currentPageLastIndex | ComputedRef<number \| undefined> | Last index in current page |
| currentPaginationNumber | ComputedRef<number \| undefined> | Current pagination number |
| maxPaginationNumber | ComputedRef<number \| undefined> |Max pagination number |
| isLastPage | ComputedRef<boolean \| undefined> | Is the last page |
| isFirstPage |  ComputedRef<boolean \| undefined> | Is the first page |
| nextPage | () => void | Navigate to the next pag |
| prevPage | () => void | Navigate to the previous page |
| updatePage | (paginationNumber: number) => void | Navigate to the specified page |
| rowsPerPageOptions |  ComputedRef<number[] \| undefined> | Options of rows per page |
| rowsPerPageActiveOption |  ComputedRef<number \| undefined> | Active option of rows per page |
| updateRowsPerPageActiveOption |  (option: number) => void | Update active option of rows per page |