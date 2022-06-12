# Client side mode props 

only available in client-side mode

| Name | Required | Type | Default | Description |
| -------- | ----------- | ---- | -------- | ------- |
| search-field | false | string | '' | A specific field in which you search for information. **Notice that the value of search field should be a value of header item, not text of header item**. If you don't pass a specific field, the component will search in all fields.|
| search-value | false | string | '' | Search value |
| sort-by | false | string | '' | A specific field for sorting |
| sort-type | false | SortType ('asc' \| 'desc')| 'asc' | Order by 'asc' or 'desc' when sorting|