# Loading slot
You can customize loading effect like this:

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