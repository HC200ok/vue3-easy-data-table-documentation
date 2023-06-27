<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    show-index
    :headers="headers"
    :items="items"
  >
    <template #customize-headers>
      <thead class="customize-headers">
        <tr>
          <th colspan="2" rowspan="2"></th>
          <th colspan="7">info</th>
        </tr>
        <tr>
          <th>name</th>
          <th>address</th>
          <th>height</th>
          <th>weight</th>
          <th>age</th>
          <th>favouriteSport</th>
          <th>favouriteFruits</th>
        </tr>
      </thead>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import type { Header, Item, FilterOption } from "vue3-easy-data-table";
import { mockClientItems } from "../mock";

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
const itemsSelected = ref<Item[]>([items.value[14]]);
</script>

<style>
.customize-headers tr th{
  color: black;
  border: none;
  border-right: 1px solid #445269;
  border-bottom: 1px solid #445269;
}
.header-icon {
  display: inline-block;
  width: 20px!important;
  height: 20px!important;
}
</style>
