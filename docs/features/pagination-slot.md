# Pagination slot
vue3-easy-data-table is providing a pagination slot exposing four pagination related varaibles: `isFirstPage`, `isLastPage`, `currentPaginationNumber`, `maxPaginationNumber`,and two two pagination related functions:
`nextPage`, `prevPage`.

## Example
So, you can customize pagination like this:

```vue
<DataTable
  :headers="headers"
  :items="mockItems"
>
  <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
    <button :disabled="isFirstPage" @click="prevPage">
      prev page
    </button>
    <button :disabled="isLastPage" @click="nextPage">
      next page
    </button>
  </template>
</DataTable>
```
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pagination-slot-75n6iv?file=/src/App.vue)

<PaginationSlot/>