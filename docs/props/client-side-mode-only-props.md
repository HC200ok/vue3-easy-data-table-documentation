# Client side mode props 

only available in client-side mode

| Name | Required | Type | Default | Description |
| -------- | ----------- | ---- | -------- | ------- |
| filter-options | false | FilterOption[] | null | Filter options, click [here](https://hc200ok.github.io/vue3-easy-data-table-doc/features/filtering.html) for more information.|
| search-field | false | string \| string[] | '' | Specific field(s) in which you search for information. **Notice that the value of search field should be a value of header item, not text of header item**. If you don't pass a specific field, the component will search in all fields.|
| search-value | false | string | '' | Search value |
| sort-by | false | string \| string[] | '' | A specific field for sorting or multiple fields for sorting |
SortType ('asc' \| 'desc') \| SortType[]| sort-type | false |  | 'asc' | Order by 'asc' or 'desc' when sorting|