<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    show-index
    :headers="headers"
    :items="items"
    :filter-options="filterOptions"
  >
    <template #header-name="header">
      <div class="filter-column">
        <img src="../images/eglass-filter.png" class="filter-icon" @click.stop="showNameFilter=!showNameFilter">
        {{ header.text }}
        <div class="filter-menu filter-name-menu" v-if="showNameFilter">
          <input v-model="nameCriteria" style="background-color: #fff; color: black"/>
        </div>
      </div>
    </template>
    <template #header-age="header">
      <div class="filter-column">
        <img src="../images/eglass-filter.png" class="filter-icon" @click.stop="showAgeFilter=!showAgeFilter">
        {{ header.text }}
        <div class="filter-menu filter-age-menu" v-if="showAgeFilter">
          <Slider v-model="ageCriteria" class="slider"/>
        </div>
      </div>
    </template>
    <template #header-favouriteSport="header">
      <div class="filter-column">
        <img src="../images/eglass-filter.png" class="filter-icon" @click.stop="showFavouriteSportFilter=!showFavouriteSportFilter">
        {{ header.text }}
        <div class="filter-menu filter-sport-menu" v-if="showFavouriteSportFilter">
          <select
            class="favouriteSport-selector"
            v-model="favouriteSportCriteria"
            name="favouriteSport"
          >
            <option value="swimming">
              swimming
            </option>
            <option value="basketball">
              basketball
            </option>
            <option value="running">
              running
            </option>
            <option value="football">
              football
            </option>
            <option value="all">
              all
            </option>
          </select>
        </div>
      </div>
    </template>
  </EasyDataTable>
</template>

<script lang="ts" setup>
import Slider from '@vueform/slider';
import { ref, computed } from "vue";
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import type { Header, Item, FilterOption } from "vue3-easy-data-table";
import { mockClientItems } from "../mock";

const ageCriteria = ref<[number, number]>([1, 15]);
const favouriteSportCriteria = ref('swimming');
const nameCriteria = ref('');

const filterOptions = computed((): FilterOption[] => {
  const filterOptionsArray: FilterOption[] = [];
  if (favouriteSportCriteria.value !== 'all') {
    filterOptionsArray.push({
      field: 'favouriteSport',
      comparison: '=',
      criteria: favouriteSportCriteria.value,
    });
  }
  filterOptionsArray.push({
    field: 'age',
    comparison: 'between',
    criteria: ageCriteria.value,
  });
  filterOptionsArray.push({
    field: 'name',
    criteria: nameCriteria.value,
    comparison: (value, criteria): boolean => (value != null && value.includes(`name-${criteria}`)),
  });
  return filterOptionsArray;
});

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

const showAgeFilter = ref(false);
const showFavouriteSportFilter = ref(false);
const showNameFilter = ref(false);
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style>
.filter-column {
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
}
.filter-icon {
  cursor: pointer;
  display: inline-block;
  width: 15px!important;
  height: 15px!important;
  margin-right: 4px;
}
.filter-menu {
  padding: 15px 30px;
  z-index: 1;
  position: absolute;
  top: 30px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
}
.filter-age-menu {
  height: 40px;
}
.slider {
  margin-top: 36px;
}
.favouriteSport-selector {
  width: 100%;
}
</style>
