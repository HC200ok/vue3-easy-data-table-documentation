<template>
  <EasyDataTable
    v-model:items-selected="itemsSelected"
    show-index
    :headers="headers"
    :items="items"
  >
  </EasyDataTable>
</template>

<script lang="ts" setup>
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { Header, Item } from "vue3-easy-data-table";
import { ref, computed } from "vue";

const itemsSelected: Item[] = ref([]);

const headers: Header[] = [
  { text: "PLAYER", value: "player", fixed: true, width: 200 },
  { text: "TEAM", value: "team", fixed: true, width: 100},
  { text: "NUMBER", value: "number", width: 200},
  { text: "POSITION", value: "position", width: 200},
  { text: "HEIGHT", value: "height", width: 200},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true, width: 200},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country", width: 200},
];

const items: Item[] = [
  { "player": "Stephen Curry", "team": "GSW", "number": 30, "position": 'G', "height": '6-2', "weight": 185, "lastAttended": "Davidson", "country": "USA"},
  { "player": "Lebron James", "team": "LAL", "number": 6, "position": 'F', "height": '6-9', "weight": 250, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA"},
  { "player": "Kevin Durant", "team": "BKN", "number": 7, "position": 'F', "height": '6-10', "weight": 240, "lastAttended": "Texas-Austin", "country": "USA"},
  { "player": "Giannis Antetokounmpo", "team": "MIL", "number": 34, "position": 'F', "height": '6-11', "weight": 242, "lastAttended": "Filathlitikos", "country": "Greece"},
];
</script>

