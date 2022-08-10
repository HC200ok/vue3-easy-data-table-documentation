# Single field sorting
Use `sort-by` and `sort-type` props to determine the initial sorting field and sorting type ('asc' or 'desc').

Set `sortable` property `true` in header items to make the corresponding columns sortable.
If you add `sortable` properties in multi header items, you can select a different column to sort the table on.

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
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number", sortable: true},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "height"},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended"},
  { text: "COUNTRY", value: "country"},
];

const items: Item[] = [
  { "player": "Stephen Curry", "team": "GSW", "number": 30, "position": 'G', "height": '6-2', "weight": 185, "lastAttended": "Davidson", "country": "USA"},
  { "player": "Lebron James", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', "weight": 250, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA"},
  { "player": "Kevin Durant", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 240, "lastAttended": "Texas-Austin", "country": "USA"},
  { "player": "Giannis Antetokounmpo", "team": "MIL", "number": 34, "position": 'F', "height": '6-11', "weight": 242, "lastAttended": "Filathlitikos", "country": "Greece"},
];
</script>
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/single-field-sorting-rjniui?file=/src/App.vue)


<SingleFieldSorting/>

# update-sort event
`update-sort` event emits when sort type or sort filed change. The argument of the event includes the new sort type and sort filed.

## Type declaration of event argument

```ts
type UpdateSortArgument = {
  sortType: SortType | null
  sortBy: string
}
```

## Example
```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    @update-sort="updateSort"
  />
  <br/>
  New sort options:<br/>
  <div id="new-sort"></div>
</template>

<script setup lang="ts">
import type { UpdateSortArgument } from "vue3-easy-data-table";

const updateSort = (sortOptions: UpdateSortArgument) => {
  document.getElementById('new-sort').innerHTML = JSON.stringify(sortOptions);
};
// omit
// ...
</script>
```

<UpdateSortEvent/>
