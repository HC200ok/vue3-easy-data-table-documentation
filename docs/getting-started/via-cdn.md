# Via CDN

```html
<link href="https://unpkg.com/vue3-easy-data-table/dist/style.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/vue@3.2.1/dist/vue.global.js"></script>
<script src="https://unpkg.com/vue3-easy-data-table"></script>

<div id="app">
  <easy-data-table
    :headers="headers"
    :items="items"
  />
</div>
```

## Options api

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-cdn-d52z48?file=/index.html)

```js
<script>
  const App = {
    components: {
      EasyDataTable: window['vue3-easy-data-table'],
    },
    data () {
      return {
        headers: [
          { text: "PLAYER", value: "player" },
          { text: "TEAM", value: "team"},
          { text: "NUMBER", value: "number"},
          { text: "POSITION", value: "position"},
          { text: "HEIGHT", value: "indicator.height"},
          { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
          { text: "LAST ATTENDED", value: "lastAttended", width: 200},
          { text: "COUNTRY", value: "country"},
        ],
        items: [
          { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
          { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
          { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
          { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
        ],
      }
    },
  };
  Vue.createApp(App).mount('#app');
</script>
```

## Composition api

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/via-cdn-composition-api-xsr38j)

```js
<script>
  const { createApp, ref } = Vue;

  const App = {
    components: { EasyDataTable: window["vue3-easy-data-table"] },
    setup() {
      const headers = ref([
        { text: "PLAYER", value: "player" },
        { text: "TEAM", value: "team"},
        { text: "NUMBER", value: "number"},
        { text: "POSITION", value: "position"},
        { text: "HEIGHT", value: "indicator.height"},
        { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
        { text: "LAST ATTENDED", value: "lastAttended", width: 200},
        { text: "COUNTRY", value: "country"},
      ]);
      const items = ref([
        { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
        { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
        { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
        { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
      ]);
      return {
        headers,
        items,
      };
    }
  };
  createApp(App).mount("#app");
</script>
```

<Basic/>
