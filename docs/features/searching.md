# Searching
Use `search-field` and `search-value` props to search for information in a specific field. If you don't pass the `search-field` prop, the component will search in all fields.

> :warning: **Attention**: Searching feature is only available in client-side mode. In server-side mode, you need to request searched data from server when you navigate to a new page.
> Click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/server-side-paginate-and-sort.html) to check more information about server-side mode

## Example

By default, vue3-easy-data-table doesn't provide a search input, but you can provide your own search input element like this:

```vue
<template>
  <span>search field:</span>
  <select v-model="searchField">
    <option>player</option>
    <option>team</option>
  </select>
  
  <br/>

  <span>search value: </span>
  <input type="text" v-model="searchValue">

  <EasyDataTable
    :headers="headers"
    :items="items"
    :search-field="searchField"
    :search-value="searchValue"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

const searchField = ref("player");
const searchValue = ref("Stephen Curry");
  
const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
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
[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/searching-8egujm?file=/src/App.vue)

<Searching/>

