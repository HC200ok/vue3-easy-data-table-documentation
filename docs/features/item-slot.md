
# Item slot
By using You can customize only certain columns like this:
```js
  <EasyDataTable :headers="headers" :items="items">
    <template #email="{ email }">
      <a :href="email">{{ email }}</a>
    </template>
  </EasyDataTable>
```
Notice that the `<name>` of `#<name>` should be a value of header item.

<vue-example file="ItemSlot" />

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/item-slot-65tc9v?file=/src/App.vue)

<ItemSlot/>

