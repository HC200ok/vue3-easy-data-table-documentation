# Expandable row
> This is a new feature since version `1.3.2`

Use `#expand` to customize the expanded row like this:

```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
  >
    <template #expand="item">
      <div style="padding: 15px">
        {{item.player}} won championships in {{item.championships.join(,)}}
      </div>
    </template>
    // omit
    ...
  </EasyDataTable>
</template>

<script lang="ts" setup>
import type { Header, Item } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended"},
  { text: "COUNTRY", value: "country"},
  { text: "Operation", value: "operation"},
];

const items: Item[] = [
  { "championships": [2017, 2018, 2019, 2022], "player": "Stephen Curry", ... },
  { "championships": [2012, 2013, 2016, 2020], "player": "Lebron James", ... },
  { "championships": [2017, 2018], "player": "Kevin Durant", ... },
  { "championships": [2021], "player": "Giannis Antetokounmpo", ...}
];

// omit
...
</script>
```

Then an expand icon will be generated in each row automatically. Click the expand icon to display expandable row that you customized: 

<ExpandSlot/>


> :warning: `expand slot` feature is based on the [`slots`](https://vuejs.org/guide/components/slots.html) feature of vue.js. So before using the `expand slot` feature in vue3-easy-data-table, Please make sure you have known how to use the [`slots`](https://vuejs.org/guide/components/slots.html) feature of vue.js. 

# Fetch async data for the expanded row
> This is a new feature since version `1.3.4`

`expand-row` event emits when an expand icon is clicked to expand a row. The argument of the event includes the index of expanded item in the `table items`, you can bind a callback function which is used to load async data for the expanded row like how `loadIntroduction` does as below:

```vue
<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    @expand-row="loadIntroduction"
  >
    <template #expand="item">
      <div
        v-if="item.introduction"
        style="padding: 15px"
      >
        {{ item.introduction }}
      </div>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Header, Item } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: 'PLAYER', value: 'player' },
  { text: 'TEAM', value: 'team' },
];

const items = ref<Item[]>([
  { player: 'Stephen Curry', team: 'GSW' },
  { player: 'Lebron James', team: 'LAL' },
  { player: 'Kevin Durant', team: 'BKN' },
  { player: 'Giannis Antetokounmpo', team: 'MIL' },
]);

const mockItemIntroduction = async (name: string): Promise<string> => {
  await new Promise((s) => setTimeout(s, 2000));
  const introduction: Record<string, string> = {
    'Stephen Curry': 'Wardell Stephen Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA).',
    'Lebron James': 'LeBron Raymone James Sr is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA).',
    'Kevin Durant': 'Kevin Wayne Durant also known by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA).',
    'Giannis Antetokounmpo': 'Giannis Sina Ugo Antetokounmpo (né Adetokunbo; December 6, 1994) is a Greek-Nigerian professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA).',
  };
  return introduction[name];
};

const loadIntroduction = async (index: number): Promise<void> => {
  const expandedItem = items.value[index];
  if (!expandedItem.introduction) {
    expandedItem.expandLoading = true;
    expandedItem.introduction = await mockItemIntroduction(expandedItem.player);
    expandedItem.expandLoading = false;
  }
};
</script>
```

Tip: Don't forget to use the `expandLoading` property of item to display a loading line when fetching the async data.

<ExpandAsync/>