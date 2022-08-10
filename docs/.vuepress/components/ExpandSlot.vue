<template>
  <EasyDataTable
    alternating
    v-model:items-selected="itemsSelected"
    show-index
    buttons-pagination
    :headers="headers"
    :items="items"
    :loading="loading"
  >
    <template #expand="item">
      <div style="padding: 15px">
        {{item.player}} won championships in {{item.championships.join(',')}}.
      </div>
    </template>
    <template #loading>
      <img
        src="./Basketball.gif"
        style="width: 50px;height: 50px;"
      >
    </template>
    <template #item-player="{ player, avator, page }">
    <div class="player-wrapper">
      <img class="avator" :src="avator" alt="">
      <a target="_blank" :href="page">{{ player }}</a>
    </div>
    </template>
    <template #item-team="{ teamName, teamUrl }">
      <a target="_blank" :href="teamUrl">{{ teamName }}</a>
    </template>
    <template #item-indicator.weight="item">
      {{ item.indicator.weight }} (lbs)
    </template>
    <template #item-operation="item">
      <div class="operation-wrapper">
        <img
          src="../images/delete.png"
          class="operation-icon"
          @click="deleteItem(item)"
        />
        <img
          src="../images/edit.png"
          class="operation-icon"
          @click="editItem(item)"
        />
      </div>
    </template>
  </EasyDataTable>

  <div class="edit-item" v-if="isEditing">
    height:<input type="text" v-model="editingItem.height" />
    <br />
    weight:<input type="text" v-model="editingItem.weight" />
    <br />
    <button @click="submitEdit">ok</button>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { ref, reactive } from "vue";
import { Header, Item } from "vue3-easy-data-table";

const itemsSelected: Item[] = ref([]);

const headers: Header[] = [
  { text: "PLAYER", value: "player" },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended"},
  { text: "COUNTRY", value: "country"},
  { text: "Operation", value: "operation"},
];

const items: Item[] = ref([]);

const isEditing = ref(false);

const editingItem = reactive({
  height: "",
  weight: "",
  id: 0,
});

const loading = ref(true);
setTimeout(() => {
  loading.value = false;
  items.value = [
    { "championships": [2017, 2018, 2019, 2022], "id": 1, "player": "Stephen Curry", "page": "https://www.nba.com/player/201939/stephen-curry", "avator": "https://bafkreih3oswhrhrvxwhebuqqnlqtklnth5pbc2q3iv6446icpltt6tymvy.ipfs.dweb.link/?filename=Stephen.png", "teamName": "GSW", "teamUrl": "https://www.nba.com/team/1610612744/warriors", "number": 30, "position": 'G', indicator: {"height": '6-2', "weight": 185}, "lastAttended": "Davidson", "country": "USA"},
    { "championships": [2012, 2013, 2016, 2020], "id": 2, "player": "Lebron James",  "page": "https://www.nba.com/player/2544/lebron-james", "avator": "https://bafkreigphmpdonfxpcb7lwrzv754t2xp2cw3segdpsj44rpurzwnuowhsq.ipfs.dweb.link/?filename=lebron.png", "teamName": "LAL", "teamUrl": "https://www.nba.com/team/1610612747/lakers", "number": 6, "position": 'F', indicator: {"height": '6-9', "weight": 250}, "lastAttended": "St. Vincent-St. Mary HS (OH)", "country": "USA"},
    { "championships": [2017, 2018], "id": 3, "player": "Kevin Durant", "page": "https://www.nba.com/player/201142/kevin-durant", "avator": "https://bafkreihvjvturzol7kfdafrnpxvilj2rti5bwyee7wbvtxogrx34uzjfz4.ipfs.dweb.link/?filename=Kevin.png", "teamName": "BKN", "teamUrl": "https://www.nba.com/team/1610612751/nets", "number": 7, "position": 'F', indicator: {"height": '6-10', "weight": 240}, "lastAttended": "Texas-Austin", "country": "USA"},
    { "championships": [2021], "id": 4, "player": "Giannis Antetokounmpo", "page": "https://www.nba.com/player/203507/giannis-antetokounmpo", "avator": "https://bafkreie26rcr5ppdpqrclr3kpk7p7hqyypjo3o2g43yk35ly4e5dmwxigm.ipfs.dweb.link/?filename=Giannis.png", "teamName": "MIL", "teamUrl": "https://www.nba.com/team/1610612749/bucks", "number": 34, "position": 'F', indicator: {"height": '6-11', "weight": 242}, "lastAttended": "Filathlitikos", "country": "Greece"},
  ]
}, 2000);

const deleteItem = (val: Item) => {
  items.value = items.value.filter((item) => item.id !== val.id);
};

const editItem = (val: Item) => {
  isEditing.value = true;
  const { indicator, id } = val;
  editingItem.height = indicator.height;
  editingItem.weight = indicator.weight;
  editingItem.id = id;
};

const submitEdit = () => {
  isEditing.value = false;
  const item = items.value.find((item) => item.id === editingItem.id);
  item.indicator.height = editingItem.height;
  item.indicator.weight = editingItem.weight;
};
</script>

<style>
.operation-wrapper .operation-icon {
  width: 20px;
  cursor: pointer;
}
.player-wrapper {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-items: center;
}
.avator {
  margin-right: 10px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
}
</style>
