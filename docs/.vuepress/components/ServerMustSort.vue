<template>
  <div>
    Rest api example: {{ restApiUrl }}
    <br /><br />
    <EasyDataTable
      v-model:server-options="serverOptions"
      :server-items-length="serverItemsLength"
      :loading="loading"
      :headers="headers"
      :items="items"
      buttons-pagination
      must-sort
    >
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

const serverItemsLength = ref(0);
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: 'age',
  sortType: 'desc',
});

const restApiUrl = computed(() => {
  const { page, rowsPerPage, sortBy, sortType } = serverOptions.value;
  console.log(sortBy);
  console.log(sortType);
  if (sortBy && sortType) {
    return `http://localhost:8080/api?page=${page}&limit=${rowsPerPage}&sortBy=${sortBy}&sortType=${sortType}`;
  } else {
    return `http://localhost:8080/api?page=${page}&limit=${rowsPerPage}`;
  }
});

const loading = ref(false);

const loadFromServer = async () => {
  loading.value = true;
  const {
    serverCurrentPageItems,
    serverTotalItemsLength,
  } = await mockServerItems(serverOptions.value);
  items.value = serverCurrentPageItems;
  serverItemsLength.value = serverTotalItemsLength;
  loading.value = false;
};

// first load when created
loadFromServer();

watch(
  serverOptions,
  (value) => {
    loadFromServer();
  },
  { deep: true }
);
</script>

