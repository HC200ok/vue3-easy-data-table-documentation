<template>
  <div>
    <EasyDataTable
      show-index
      buttons-pagination
      :headers="headers"
      :items="items"
    >
      <template #email="{ email }">
        <a :href="email">{{ email }}</a>
      </template>
      <template #id="item">
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
      Address:<input type="text" v-model="editingItem.address" />
      <br />
      Email:<input type="text" v-model="editingItem.email" />
      <br />
      <button @click="submitEdit">ok</button>
    </div>
  </div>
</template>

<script lang="ts">
import 'vue3-easy-data-table/dist/style.css';
import EasyDataTable from 'vue3-easy-data-table';
import { defineComponent, ref, reactive } from "vue";
import { mockClientItems, mockItems } from "../mock";
import { Header, Item } from "vue3-easy-data-table";

export default defineComponent({
  components: {EasyDataTable},
  setup() {
    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Address", value: "address" },
      { text: "Email", value: "email" },
      { text: "Age", value: "age", sortable: true },
      { text: "Rank", value: "rank" },
      { text: "Operation", value: "id" },
    ];

    const items: Item[] = ref(mockItems);
    const isEditing = ref(false);

    const addressEditing = ref("");
    const emailEditing = ref("");
    const idEditing = ref(0);

    const editingItem = reactive({
      address: "",
      email: "",
      id: 0,
    });

    const deleteItem = (val: Item) => {
      items.value = items.value.filter((item) => item.id !== val.id);
    };

    const editItem = (val: Item) => {
      isEditing.value = true;
      const { address, email, id } = val;
      editingItem.address = address;
      editingItem.email = email;
      editingItem.id = id;
    };

    const submitEdit = () => {
      isEditing.value = false;
      const item = items.value.find((item) => item.id === editingItem.id);
      item.address = editingItem.address;
      item.email = editingItem.email;
    };

    return {
      submitEdit,
      headers,
      items,
      deleteItem,
      editItem,
      editingItem,
      isEditing,
    };
  },
});
</script>

<style>
.operation-wrapper .operation-icon {
  width: 20px;
  cursor: pointer;
}
</style>
