<template>
  <div>
    <EasyDataTable
      v-model:items-selected="itemsSelected"
      :headers="headers"
      :items="items"
      :header-item-class-name="headerItemClassNameFunction"
      :body-row-class-name="bodyRowClassNameFunction"
      :body-expand-row-class-name="bodyExpandRowClassNameFunction"
      :body-item-class-name="bodyItemClassNameFunction"
      no-hover
    >
    <template #expand="item">
      {{ item.name }} in {{ item.class }} got {{ item.score }}
    </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { Header, Item, BodyRowClassNameFunction, HeaderItemClassNameFunction, BodyItemClassNameFunction} from "vue3-easy-data-table";
import { mockClientItems } from "../mock";
import { ref } from "vue";

const itemsSelected: Item[] = ref([]);

const bodyRowClassNameFunction: BodyRowClassNameFunction = (item: Item, index: number): string => {
  if (item.score < 60) return 'fail-row';
  return 'pass-row';
};

const bodyExpandRowClassNameFunction: BodyRowClassNameFunction = (item: Item, index: number): string => {
  return 'expand-row';
};

const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string, index: number): string => {
  if (column === 'score') return 'score-column';
  return '';
};

const headerItemClassNameFunction: HeaderItemClassNameFunction = (header: Header, index: number): string => {
  if (header.value === 'score') return 'score-column';
  return '';
};

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Class", value: "class" },
  { text: "Score", value: "score", sortable: true },
];

const items: Item[] = [
  {name: 'HC', class: 'class 1', score: 100},
  {name: 'Curry', class: 'class 2', score: 59},
  {name: 'James', class: 'class 3', score: 59},
  {name: 'Durant', class: 'class 3', score: 59},
];
</script>

<style>
.score-column {
  font-size: 20px;
}
.fail-row  {
  --easy-table-body-row-background-color: #f56c6c;
  --easy-table-body-row-font-color: #fff;
}
.pass-row  {
  --easy-table-body-row-background-color: #67c23a;
  --easy-table-body-row-font-color: #fff;
}
.expand-row {
  --easy-table-body-row-background-color: grey;
  --easy-table-body-row-font-color: #fff;
}
</style>

