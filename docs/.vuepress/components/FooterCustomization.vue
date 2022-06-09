<template>
  <div>
    <EasyDataTable
      ref="dataTable"
      :headers="headers"
      :items="items"
      :rows-per-page="10"
      :show-footer="false"
    >
    </EasyDataTable>

    <div class="customize-footer">
      <div class="customize-index">
        Now displaying: {{currentPageFirstIndex}} ~ {{currentPageLastIndex}} of {{totalItemsLength}}
      </div>
      <div class="customize-buttons">
        <span
          v-for="paginationNumber in maxPaginationNumber"
          class="customize-button"
          :class="{'active': paginationNumber === currentPaginationNumber}"
          @click="updatePage(paginationNumber)"
        >
          {{paginationNumber}}
        </span>
      </div>
      <div class="customize-pagination">
        <button class="prev-page" @click="prevPage" :disabled="isFirstPage">prev page</button>
        <button class="next-page" @click="nextPage" :disabled="isLastPage">next page</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Header, Item, ServerOptions } from "vue3-easy-data-table";
import { computed, onMounted, ref, watch } from 'vue';
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { mockClientItems, mockServerItems } from "../mock";

const items = ref<Item[]>(mockClientItems(200));
const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Address", value: "address" },
  { text: "Height", value: "height", sortable: true },
  { text: "Weight", value: "weight", sortable: true },
  { text: "Age", value: "age", sortable: true },
  { text: "Favourite sport", value: "favouriteSport" },
  { text: "Favourite fruits", value: "favouriteFruits" },
];

// $ref dataTable
const dataTable = ref();

// index related
const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex);
const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex);
const totalItemsLength = computed(() => dataTable.value?.totalItemsLength);

// paginations related
const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber);
const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber);

const isFirstPage = computed(() => dataTable.value?.isFirstPage);
const isLastPage = computed(() => dataTable.value?.isLastPage);

const nextPage = () => {
  dataTable.value.nextPage();
};
const prevPage = () => {
  dataTable.value.prevPage();
};
const updatePage = (paginationNumber: number) => {
  dataTable.value.updatePage(paginationNumber);
};
</script>

<style scoped>
.customize-footer {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.customize-footer div {
  margin: 5px;
}
.customize-button {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  padding: 3px;
  line-height: 20px;
}
.customize-button.active {
  color: #fff;
  background-color: #3db07f;
}
.customize-pagination button {
  margin: 0 5px;
  cursor: pointer;
}
</style>
