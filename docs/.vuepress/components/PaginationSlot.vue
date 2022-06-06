<template>
  <EasyDataTable :headers="headers" :items="items" :rows-per-page="10" :rows-items="[10, 15, 20]">
    <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
      <button :disabled="isFirstPage" @click="prevPage">prev page</button>
      <button :disabled="isLastPage" @click="nextPage">next page</button>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { Header, Item } from "vue3-easy-data-table";
import { mockClientItems } from "../mock";

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];
const items = mockClientItems();
</script>

