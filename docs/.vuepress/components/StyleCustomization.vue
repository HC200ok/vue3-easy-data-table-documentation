<template>
  <div>
    <EasyDataTable
      v-model:items-selected="itemsSelected"
      v-model:server-options="serverOptions"
      :server-items-length="serverItemsLength"
      :headers="headers"
      :items="items"
      buttons-pagination
      alternating
      table-class-name="customize-table"
      :loading="loading"
      theme-color="#1d90ff"
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

const itemsSelected: Item[] = ref([]);

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

<style>
.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>

