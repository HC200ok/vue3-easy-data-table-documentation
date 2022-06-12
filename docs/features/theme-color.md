# Theme color
Use `theme-color` prop to customize color of active checkbox, active option of rows selector, loading animation and active pagination button.

## Example
```vue
<EasyDataTable
  :headers="headers"
  :items="items"
  :theme-color="#f48225"
  :items-selected="itemsSelected"
  buttons-pagination
  loading
/>

<script lang="ts" setup>
import type { Header, Item } from "vue3-easy-data-table";
import { ref } from "vue";

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

const itemsSelected = ref([items[0]]);
</script>
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/theme-color-89ps64?file=/src/App.vue)


<ThemeColor/>
