<template>
  <div>
    <EasyDataTable
      :rows-per-page="5"
      :rows-items="[5, 10, 15]"
      :headers="headers"
      :items="items"
      buttons-pagination
      alternating
    >
    </EasyDataTable>
  </div>
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

const items: Item[] = mockClientItems(200);
</script>

