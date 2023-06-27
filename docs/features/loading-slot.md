# Loading slot
### You can use `loading` slot to customize loading effect:

```vue
<EasyDataTable
  :headers="headers"
  :items="items"
>
  <template #loading>
    <img
      src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
      style="width: 100px; height: 80px;"
    />
  </template>
</EasyDataTable>
```

Attention: this is a new feature since version `1.1.4` 

## Example

<LoadingSlot/>


### You can use `empty-message` to customize empty message:

```vue
<EasyDataTable
  :headers="headers"
  :items="items"
>
  <template #empty-message>
    <a href="https://google.com">nothing here</a>
  </template>
</EasyDataTable>
```

## Example

<emptyMessageSlot/>

> :warning: `loading slot` feature is based on the [`slots`](https://vuejs.org/guide/components/slots.html) feature of vue.js. So before using the `loading slot` feature in vue3-easy-data-table, Please make sure you have known how to use the [`slots`](https://vuejs.org/guide/components/slots.html) feature of vue.js. 