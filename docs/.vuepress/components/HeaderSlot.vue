<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    show-index
    :headers="headers"
    :items="items"
  >
    <template #header-name="header">
      <div class="customize-header">
        <img src="../images/name.png" class="header-icon">
        {{ header.text }}
      </div>
    </template>
    <template #header-address="header">
      <div class="customize-header">
        <img src="../images/address.png" class="header-icon">
        {{ header.text }}
      </div>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
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
.customize-header {
  display: flex;
  justify-items: center;
  align-items: center;
}
.header-icon {
  display: inline-block;
  width: 20px!important;
  height: 20px!important;
}
</style>
