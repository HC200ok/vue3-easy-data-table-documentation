<template>
  <div>
    serverOptions: {{ serverOptions }}
    <br /><br />
    <EasyDataTable
      v-model:server-options="serverOptions"
      :server-items-length="serverItemsLength"
      :loading="loading"
      :headers="headers"
      :items="items"
      multi-sort
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
  { text: "PLAYER", value: "player" },
  { text: "firstName", value: "firstName"},
  { text: "NUMBER", value: "number", sortable: true},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];

const items = ref<Item[]>([]);

const serverItemsLength = ref(0);
const serverOptions = ref<ServerOptions>({
  page: 1,
  rowsPerPage: 5,
  sortBy: ['indicator.weight', 'number'],
  sortType: ['desc', 'asc'],
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
  items.value = [
    { player: "Stephen Curry", firstName: "GSW", number: 1, position: 'G', indicator: {"height": '6-2', "weight": 1}, lastAttended: "Davidson", country: "USA"},
    { player: "Kevin Durant", firstName: "BKN", number: 1, position: 'F', indicator: {"height": '6-10', "weight": 1}, lastAttended: "Texas-Austin", country: "USA"},
    { player: "Lebron James", firstName: "LAL", number: 1, position: 'F', indicator: {"height": '6-9', "weight": 1}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
    { player: "Giannis Antetokounmpo", firstName: "MIL", number: 1, position: 'F', indicator: {"height": '6-11', "weight": 1}, lastAttended: "Filathlitikos", country: "Greece"},
    { player: "HC", firstName: "MIL", number: 1, position: 'F', indicator: {"height": '6-11', "weight": 1}, lastAttended: "Filathlitikos", country: "Greece"},
  ];
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

