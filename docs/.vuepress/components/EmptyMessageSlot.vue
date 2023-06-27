<template>
  <div>
    <EasyDataTable
      :headers="headers"
      :items="items"
      buttons-pagination
    >
      <template #empty-message>
        <a href="https://google.com">nothing here</a>
      </template>
    </EasyDataTable>

  </div>
</template>

<script lang="ts" setup>
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { mockServerItems } from "../mock";
import { ref, computed, watch } from "vue";

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

const items = ref<Item[]>([]);
</script>

