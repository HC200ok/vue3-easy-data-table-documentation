<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    @expand-row="loadIntroduction"
  >
    <template #expand="item">
      <div style="padding: 15px" v-if="item.introduction">
        {{ item.introduction }}
      </div>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { ref, reactive } from "vue";
import { Header, Item } from "vue3-easy-data-table";
import { mockItemIntroduction } from '../mock';

const headers: Header[] = [
  { text: 'PLAYER', value: 'player' },
  { text: 'TEAM', value: 'team' },
];

const items = ref<Item[]>([
  { player: 'Stephen Curry', team: 'GSW' },
  { player: 'Lebron James', team: 'LAL' },
  { player: 'Kevin Durant', team: 'BKN' },
  { player: 'Giannis Antetokounmpo', team: 'MIL'},
]);

const loadIntroduction = async (index: number): Promise<void> => {
  const expandItem = items.value[index];
  if (!expandItem.introduction) {
    expandItem.expandLoading = true;
    expandItem.introduction = await mockItemIntroduction(expandItem.player);
    expandItem.expandLoading = false;
  }
};
</script>
