# Multiple fields sorting

## Multiple fields sorting in client mode
Use `sort-by` and `sort-type` props to determine the initial sorting fields and sorting type.

Set `multi-sort` property `true` to make all fileds sortable.

### Example:

```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :sort-by="sortBy"
    :sort-type="sortType"
    multi-sort
  />
</template>

<script lang="ts" setup>
import type { Header, Item, SortType } from "vue3-easy-data-table";

const sortBy: string[] = ["number", "weight"];
const sortType: SortType[] = ["desc", "asc"];

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
  { "player": "Lebron James II", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', "weight": 255, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA"},
  { "player": "Kevin Durant", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 240, "lastAttended": "Texas-Austin", "country": "USA"},
  { "player": "Kevin Durant II", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 242, "lastAttended": "Texas-Austin", "country": "USA"},
  { "player": "Giannis Antetokounmpo", "team": "MIL", "number": 34, "position": 'F', "height": '6-11', "weight": 242, "lastAttended": "Filathlitikos", "country": "Greece"},
];
</script>
```

<MultiSortClient/>


## Multiple fields sorting in server-side mode

Set `sortBy` array and `sortType` array of `serverOptions` to determine the initial sorting fields and sorting type.

Set `multi-sort` property `true` to make all fileds sortable.

### Example:

```vue
<template>
  <EasyDataTable
    v-model:server-options="serverOptions"
    :server-items-length="serverItemsLength"
    :loading="loading"
    :headers="headers"
    :items="items"
    multi-sort
  />
</template>

<script lang="ts" setup>
import type { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { mockServerItems } from "../mock";
import { ref, computed, watch } from "vue";

const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "firstName", value: "firstName"},
  { text: "NUMBER", value: "number", sortable: true},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];

const items = ref<Item[]>([]);

const serverItemsLength = ref(0);
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: ['indicator.weight', 'number'],
  sortType: ['desc', 'asc'],
});

const loading = ref(false);

const loadFromServer = async () => {
  loading.value = true;
  const {
    serverCurrentPageItems,
    serverTotalItemsLength,
  } = await mockServerItems(serverOptions.value);
  items.value = [
    { player: "Stephen Curry", firstName: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
    { player: "Kevin Durant", firstName: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
    { player: "Lebron James", firstName: "LAL", number: 7, position: 'F', indicator: {"height": '6-9', "weight": 185}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
    { player: "Giannis Antetokounmpo", firstName: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
    { player: "HC", firstName: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 243}, lastAttended: "Filathlitikos", country: "Greece"},
  ];
  serverItemsLength.value = serverTotalItemsLength;
  loading.value = false;
};

// first load when created
loadFromServer();

watch(
  serverOptions,
  (value) => {
    loadFromServer();
  },
  { deep: true }
);
</script>
```
<MultiSortServer/>

> :warning: **Attention**: In server-side mode, multiple sorting function should be implemented in server side which means you need to request sorted data from server when you update multiple sorting fields.