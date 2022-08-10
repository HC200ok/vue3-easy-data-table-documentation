# Column width
> This is a new feature since version `1.2.10`

Now, you can set column width to a specfic value like this:

```vue
<script lang="ts" setup>
const headers: Header[] = [
  { text: "PLAYER", value: "player", width: 200}, // add width property
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "height"},
  { text: "WEIGHT (lbs)", value: "weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended",  width: 200}, // add width property
  { text: "COUNTRY", value: "country"},
  { text: "Operation", value: "operation"},
];
</script>
```

<ColumnWidth/>
