# Filtering

Use `filter-options` prop to filter items in `vue3-easy-data-table`.

### Filter comparisons:
| Value | Description |
| ----- | ----------- |
| between | Between |
| in | In |
| = | Equals |
| != | Does not equal |
| > | Greater than |
| >= | Greater than or equal to |
| \< | Less than |
| \<= | Less than or equal to |

### Type definition

```ts
type FilterOption = {
  field: string,
  comparison: 'between',
  criteria: [number, number],
} | {
  field: string,
  comparison: '=' | '!=',
  criteria: number | string,
} | {
  field: string,
  comparison: '>' | '>=' | '<' | '<=',
  criteria: number,
} | {
  field: string,
  comparison: (value: any, criteria: string) => boolean,
  criteria: string,
} | {
  field: string
  comparison: 'in'
  criteria: number[] | string[]
}
```

## Example

For now, you can customize filter menu by using [`header slot`](https://hc200ok.github.io/vue3-easy-data-table-doc/features/header-slot.html) feature, here is an example:

```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :filter-options="filterOptions"
  >
    <template #header-name="header">
      <div class="filter-column">
        <img src="../images/eglass-filter.png" class="filter-icon" @click.stop="showNameFilter=!showNameFilter">
        {{ header.text }}
        <div class="filter-menu" v-if="showNameFilter">
          <input v-model="nameCriteria"/>
        </div>
      </div>
    </template>
    <template #header-age="header">
      <div class="filter-column">
        <img src="../images/eglass-filter.png" class="filter-icon" @click.stop="showAgeFilter=!showAgeFilter">
        {{ header.text }}
        <div class="filter-menu filter-age-menu" v-if="showAgeFilter">
          <Slider v-model="ageCriteria" class="slider"/>
        </div>
      </div>
    </template>
    <template #header-favouriteSport="header">
      <div class="filter-column">
        <img src="../images/eglass-filter.png" class="filter-icon" @click.stop="showFavouriteSportFilter=!showFavouriteSportFilter">
        {{ header.text }}
        <div class="filter-menu filter-sport-menu" v-if="showFavouriteSportFilter">
          <select
            class="favouriteSport-selector"
            v-model="favouriteSportCriteria"
            name="favouriteSport"
          >
            <option value="swimming">
              swimming
            </option>
            <option value="basketball">
              basketball
            </option>
            <option value="running">
              running
            </option>
            <option value="football">
              football
            </option>
            <option value="all">
              all
            </option>
          </select>
        </div>
      </div>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { Header, Item, FilterOption } from "vue3-easy-data-table";
import { mockClientItems } from "../mock";

const ageCriteria = ref<[number, number]>([1, 15]);
const favouriteSportCriteria = ref('swimming');
const nameCriteria = ref('');

const filterOptions = computed((): FilterOption[] => {
  const filterOptionsArray: FilterOption[] = [];
  if (favouriteSportCriteria.value !== 'all') {
    filterOptionsArray.push({
      field: 'favouriteSport',
      comparison: '=',
      criteria: favouriteSportCriteria.value,
    });
  }
  filterOptionsArray.push({
    field: 'age',
    comparison: 'between',
    criteria: ageCriteria.value,
  });
  filterOptionsArray.push({
    field: 'name',
    criteria: nameCriteria.value,
    comparison: (value, criteria): boolean => (value != null && criteria != null &&
      typeof value === 'string' && value.includes(`name-${criteria}`)),
  });
  return filterOptionsArray;
});

const showAgeFilter = ref(false);
const showFavouriteSportFilter = ref(false);
const showNameFilter = ref(false);

const items = ref<Item[]>(mockClientItems(100));
const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];
</script>

<style>
// omit
...
</style>
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/snowy-dew-ptz9m0?file=/src/App.vue)


<Filtering/>