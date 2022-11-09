# Class name customization

> This is a new feature since version `1.3.11`


Customize class name by using props:

| Name | Required | Type | Default | Description |
| -------- | ----------- | ---- | -------- | ------- |
| table-class-name | false | string | '' | String assigning class names for table |
| header-class-name | false | string | '' | String assigning class names for table header |
| header-item-class-name | false | (item: Header, index: number) => string `or` string | '' | Function that returns custom class names for a header item, or a string assigning class names for every header item |
| body-row-class-name | false | (item: Item, index: number) => string `or` string | '' | Function that returns custom class names for a body row, or a string assigning class names for every body row |
| body-expand-row-class-name | false | (item: Item, index: number) => string `or` string | '' | Function that returns custom class names for a body expanding row, or a string assigning class names for every body expanding row |
| body-item-class-name | false | (item: string, index: number) => string `or` string | '' | Function that returns custom class names for a body row item, or a string assigning class names for every body row item|

```vue
<template>
  <div>
    <EasyDataTable
      :headers="headers"
      :items="items"
      :header-item-class-name="headerItemClassNameFunction"
      :body-row-class-name="bodyRowClassNameFunction"
      :body-expand-row-class-name="bodyExpandRowClassNameFunction"
      :body-item-class-name="bodyItemClassNameFunction"
      no-hover
    >
      <template #expand="item">
        {{ item.name }} in {{ item.class }} got {{ item.score }}
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
import { Header, Item, BodyRowClassNameFunction, HeaderItemClassNameFunction, BodyItemClassNameFunction} from "vue3-easy-data-table";

const bodyRowClassNameFunction: BodyRowClassNameFunction = (item: Item, index: number): string => {
  if (item.score < 60) return 'fail-row';
  return 'pass-row';
};

const bodyExpandRowClassNameFunction: BodyRowClassNameFunction = (item: Item, index: number): string => {
  return 'expand-row';
};

const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string, index: number): string => {
  if (column === 'score') return 'score-column';
  return '';
};

const headerItemClassNameFunction: HeaderItemClassNameFunction = (header: Header, index: number): string => {
  if (header.value === 'score') return 'score-column';
  return '';
};

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Class", value: "class" },
  { text: "Score", value: "score", sortable: true },
];

const items: Item[] = [
  {name: 'HC', class: 'class 1', score: 100},
  {name: 'Curry', class: 'class 2', score: 59},
  {name: 'James', class: 'class 3', score: 59},
  {name: 'Durant', class: 'class 3', score: 59},
];
</script>

<style>
.score-column {
  font-size: 20px;
}
.fail-row  {
  --easy-table-body-row-background-color: #f56c6c;
  --easy-table-body-row-font-color: #fff;
}
.pass-row  {
  --easy-table-body-row-background-color: #67c23a;
  --easy-table-body-row-font-color: #fff;
}
.expand-row {
  --easy-table-body-row-background-color: grey;
  --easy-table-body-row-font-color: #fff;
}
</style>

```

<ClassNameCustomization/>