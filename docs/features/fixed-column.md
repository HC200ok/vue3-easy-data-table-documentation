# Fixed columns
> This is a new feature since version `1.2.10`

Now, Achieve left side fixed columns by setting `fixed` property `true` in header items.

> :warning: **Attention**: 
> Setting column width to a specfic value for every columns is highly recommended when using `fixed-column` feature, the default width of columns will be 100px. 
```js
const headers: Header[] = [
  { text: "PLAYER", value: "player", fixed: true, width: 200 }, // the width of this column will be 200px
  { text: "TEAM", value: "team" }, // the width of this column will be 100px
  ...
];
```


Please keep in mind that if you are using `fixed-column` feature with [`show-index`](https://hc200ok.github.io/vue3-easy-data-table-doc/features/show-index.html) and [`multiple-selecting`](https://hc200ok.github.io/vue3-easy-data-table-doc/features/multiple-selecting.html) features, the checkbox and index columns will be fixed to the most left side automatically like the example below.

### Example 1

```vue
<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    show-index
    :headers="headers"
    :items="items"
  >
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Header, Item } from "vue3-easy-data-table";
import { mockClientItems } from "../mock";

const itemsSelected: Item[] = ref([]);

const headers: Header[] = [
  { text: "PLAYER", value: "player", fixed: true, width: 200 }, // set fixed to true
  { text: "TEAM", value: "team", fixed: true, width: 100}, // set fixed to true
  { text: "NUMBER", value: "number", width: 200},
  { text: "POSITION", value: "position", width: 200},
  { text: "HEIGHT", value: "height", width: 200},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true, width: 200},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country", width: 200},
];

const items: Item[] = [
  { "player": "Stephen Curry", "team": "GSW", "number": 30, "position": 'G', "height": '6-2', "weight": 185, "lastAttended": "Davidson", "country": "USA"},
  { "player": "Lebron James", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', "weight": 250, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA"},
  { "player": "Kevin Durant", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 240, "lastAttended": "Texas-Austin", "country": "USA"},
  { "player": "Giannis Antetokounmpo", "team": "MIL", "number": 34, "position": 'F', "height": '6-11', "weight": 242, "lastAttended": "Filathlitikos", "country": "Greece"},
];
</script>
```
<FixedColumns/>

### Example 2

Working with [`item slot`](https://hc200ok.github.io/vue3-easy-data-table-doc/features/item-slot.html) feature

```vue
<template>
  <EasyDataTable
    alternating
    v-model:items-selected="itemsSelected"
    show-index
    buttons-pagination
    :headers="headers"
    :items="items"
    :loading="loading"
  >
    <template #player="{ player, avator, page }">
      <div class="player-wrapper">
        <img class="avator" :src="avator" alt="">
        <a target="_blank" :href="page">{{ player }}</a>
      </div>
    </template>
    <template #item-team="{ teamName, teamUrl }">
      <a target="_blank" :href="teamUrl">{{ teamName }}</a>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Header, Item } from "vue3-easy-data-table";
import { mockClientItems } from "../mock";

const itemsSelected: Item[] = ref([]);

const headers: Header[] = [
  { text: "PLAYER", value: "player", fixed: true, width: 200}, // set fixed to true
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "height"},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true, width: 200},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
  { text: "Operation", value: "operation", fixed: true}, // set fixed to true
];

// omit
...
</script>
```

<FixedItemSlot/>

## Fixed checkbox column

If you just want to fix checkbox column, you can use `fixed-checkbox` prop to fix and `checkbox-column-width` prop to set the width of checkbox column.

### Example 
```vue
<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    fixed-checkbox
    :checkbox-column-width="36"
    :headers="headers"
    :items="items"
  />
</template>

<script lang="ts" setup>
// omit
...
const headers: Header[] = [
  { text: "PLAYER", value: "player", width: 200 },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "height"},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true, width: 200},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];
// omit
...
</script>
```
<FixedCheckbox/>


## Fixed index column

If you just want to fix index column, you can use `fixed-index` prop to fix and `index-column-width` prop to set the width of checkbox column.

### Example 
```vue
<template>
  <EasyDataTable
    show-index
    fixed-index
    :index-column-width="30"
    :headers="headers"
    :items="items"
  />
</template>

<script lang="ts" setup>
// omit
...
const headers: Header[] = [
  { text: "PLAYER", value: "player", width: 200 },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "height"},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true, width: 200},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];
// omit
...
</script>
```
<FixedIndex/>

## Fixed checkbox and index columns
Also you can fixed checkbox and index columns at the same time, and checkbox column will always in the left side of index column.

### Example:

```vue
<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    fixed-checkbox
    :checkbox-column-width="40"
    show-index
    fixed-index
    :index-column-width="40"
    :headers="headers"
    :items="items"
  />
</template>

// omit
...
```

<FixedCheckboxAndIndex/>
