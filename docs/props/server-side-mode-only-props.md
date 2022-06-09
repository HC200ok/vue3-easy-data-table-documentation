# Server side mode props 

only available in server-side mode

| Name | Required | Type | Default | Description |
| -------- | ----------- | ---- | -------- | ------- |
| v-model:server-options | true | ServerOptions: <br>{<br> page?: number,<br> rowsPerPage?: number,<br> sortBy?: string,<br> sortType?: 'asc' \| 'desc',<br>} | null | An object which can be used as values of parameters in a pagination REST API such as:<br>`http://localhost:8080/api?page=${ServerOptions.page}&limit=${ServerOptions.rowsPerPage}&sortBy=${ServerOptions.sortBy}&sortType=${ServerOptions.sortType}`|
| server-items-length | true | number | undefined | Total amount of items available on server |