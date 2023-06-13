```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Table',
      active: true
    },
    {
      name: 'MomTable',
      link: '#/Components/Table/MomTable',
    },
    {
      name: 'MomTableThead',
      link: '#/Components/Table/MomTableThead',
    },
    {
      name: 'MomTableTbody',
      link: '#/Components/Table/MomTableTbody',
    },
    {
      name: 'MomTableTr',
      link: '#/Components/Table/MomTableTr',
    },
    {
      name: 'MomTableTh',
      link: '#/Components/Table/MomTableTh',
    },
    {
      name: 'MomTableTd',
      link: '#/Components/Table/MomTableTd',
    },
  ]"
/>
```

> Table organises and displays information in rows and columns.

## Examples

### Default table

Table width adjusts according to the content inside the table. It becomes scrollable when the width exceeds the parent container's width.

```jsx noeditor
<mom-table
  :header="{
    col1: 'Column header 1',
    col2: 'Column header 2',
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
    }
  ]"
/>
```

### Table with footer

```jsx noeditor
<mom-table
  :header="{
    col1: 'Column header 1',
    col2: 'Column header 2',
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
    }
  ]"
  :footer="{
    col1: 'Column footer 1',
    col2: 'Column footer 2',
  }"
/>
```

## Features

### Full width table

Table occupies full width irregardless of the width of the content, stretching from left to right edges of the parent container.

```jsx noeditor
<mom-table
  :header="{
    col1: 'Column header 1',
    col2: 'Column header 2',
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
    }
  ]"
  full-width
/>
```

### Table with custom min-width

```jsx noeditor
<mom-table
  :header="{
    col1: { value: 'Column header 1 (250px)', minWidth: 250 },
    col2: { value: 'Column header 2 (500px)', minWidth: 500 },
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
    }
  ]"
/>
```

### Vertical align center table (body only)

```jsx noeditor
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2 line 1 <br />Row 1 column 2 line 2',
      },
      {
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2 line 1 <br />Row 2 column 2 line 2',
      }
    ]"
    vertical-align="middle"
  />
  <mom-table vertical-align="middle">
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td><mom-input-text size="m" /></mom-table-td>
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td><mom-input-text size="m" /></mom-table-td>
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>

</div>
```

### Table with sticky first column

```jsx noeditor
<mom-table
  :header="{
    col1: { value: 'Column header 1', minWidth: 250 },
    col2: { value: 'Column header 2', minWidth: 250 },
    col3: { value: 'Column header 3', minWidth: 250 },
    col4: { value: 'Column header 4', minWidth: 250 },
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
      col3: 'Row 1 column 3',
      col4: 'Row 1 column 4',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
      col3: 'Row 2 column 3',
      col4: 'Row 2 column 4',
    }
  ]"
  first-column-sticky
/>
```

### Table with sticky last column

```jsx noeditor
<mom-table
  :header="{
    col1: { value: 'Column header 1', minWidth: 250 },
    col2: { value: 'Column header 2', minWidth: 250 },
    col3: { value: 'Column header 3', minWidth: 250 },
    col4: { value: 'Column header 4', minWidth: 250 },
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
      col3: 'Row 1 column 3',
      col4: 'Row 1 column 4',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
      col3: 'Row 2 column 3',
      col4: 'Row 2 column 4',
    }
  ]"
  last-column-sticky
/>
```

### Table with sortable columns

```jsx noeditor
<mom-table
  :header="{
    col1: { value: 'Column header 1', sortable: true },
    col2: { value: 'Column header 2', sortable: true },
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
    },
  ]"
  sort-key="col1"
  sort-order="asc"
/>

```

### Clickable table

```jsx noeditor
<mom-table
  :header="{
    col1: 'Column header 1',
    col2: 'Column header 2',
  }"
  :body="[
    {
      id: 'row1',
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
    },
    {
      id: 'row2',
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
    },
  ]"
  clickable
/>
```

### Selectable table

```jsx noeditor
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    select-mode="single"
    input-name="radio"
  />
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    select-mode="multiple"
    input-name="checkbox"
  />
</div>
```

### Table with pagination

Use a fullwidth table when enable pagination feature for the table.

```jsx noeditor
<mom-table
  :header="{
    col1: 'Column header 1',
    col2: 'Column header 2',
    col3: 'Column header 3',
  }"
  :body="[
    {
      col1: 'Row 1 column 1',
      col2: 'Row 1 column 2',
      col3: 'Row 1 column 3',
    },
    {
      col1: 'Row 2 column 1',
      col2: 'Row 2 column 2',
      col3: 'Row 2 column 3',
    },
    {
      col1: 'Row 3 column 1',
      col2: 'Row 3 column 2',
      col3: 'Row 3 column 3',
    },
    {
      col1: 'Row 4 column 1',
      col2: 'Row 4 column 2',
      col3: 'Row 4 column 3',
    },
    {
      col1: 'Row 5 column 1',
      col2: 'Row 5 column 2',
      col3: 'Row 5 column 3',
    },
    {
      col1: 'Row 6 column 1',
      col2: 'Row 6 column 2',
      col3: 'Row 6 column 3',
    },
  ]"
  full-width
  pagination
  rows-per-page="2"
/>
```

## States

### Default

```jsx noeditor
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    select-mode="single"
    input-name="radio-default"
  />
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    select-mode="multiple"
    input-name="checkbox-default"
  />
</div>
```

### Disabled

```jsx noeditor
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    select-mode="single"
    input-name="radio-disabled"
    disabled
  />
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    select-mode="multiple"
    input-name="checkbox-disabled"
    disabled
  />
</div>
```

### Disabled row

```jsx noeditor
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
        disabled: true,
      },
    ]"
    select-mode="single"
    input-name="radio-disabled-row"
  />
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
        disabled: true,
      },
    ]"
    select-mode="multiple"
    input-name="checkbox-disabled-row"
  />
</div>
```

### Selected

```jsx noeditor
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    value="2"
    select-mode="single"
    input-name="radio-selected"
  />
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
      {
        value: '1',
        col1: 'Row 1 column 1',
        col2: 'Row 1 column 2',
      },
      {
        value: '2',
        col1: 'Row 2 column 1',
        col2: 'Row 2 column 2',
      },
    ]"
    :value="['2']"
    select-mode="multiple"
    input-name="checkbox-selected"
  />
</div>
```

## Validations

### Error

```jsx noeditor
<div>
  <mom-form-group
    label="Label"
    message-text="This is a error message"
    input-state="error"
    id-for-input="radio_error"
  >
    <mom-table
      id-for-input="radio_error"
      :header="{
        col1: 'Column header 1',
        col2: 'Column header 2',
      }"
      :body="[
        {
          value: '1',
          col1: 'Row 1 column 1',
          col2: 'Row 1 column 2',
        },
        {
          value: '2',
          col1: 'Row 2 column 1',
          col2: 'Row 2 column 2',
        },
      ]"
      select-mode="single"
      input-name="radio-error"
      input-state="error"
    />
  </mom-form-group>
  <mom-form-group
    label="Label"
    message-text="This is a error message"
    input-state="error"
    id-for-input="checkbox_error"
  >
    <mom-table
      id-for-input="checkbox_error"
      :header="{
        col1: 'Column header 1',
        col2: 'Column header 2',
      }"
      :body="[
        {
          value: '1',
          col1: 'Row 1 column 1',
          col2: 'Row 1 column 2',
        },
        {
          value: '2',
          col1: 'Row 2 column 1',
          col2: 'Row 2 column 2',
        },
      ]"
      select-mode="multiple"
      input-name="checkbox-error"
      input-state="error"
    />
  </mom-form-group>
</div>
```

### Warning

```jsx noeditor
<div>
  <mom-form-group
    label="Label"
    message-text="This is a warning message"
    input-state="warning"
    id-for-input="radio_warning"
  >
    <mom-table
      id-for-input="radio_warning"
      :header="{
        col1: 'Column header 1',
        col2: 'Column header 2',
      }"
      :body="[
        {
          value: '1',
          col1: 'Row 1 column 1',
          col2: 'Row 1 column 2',
        },
        {
          value: '2',
          col1: 'Row 2 column 1',
          col2: 'Row 2 column 2',
        },
      ]"
      select-mode="single"
      input-name="radio-warning"
      input-state="warning"
    />
  </mom-form-group>
  <mom-form-group
    label="Label"
    message-text="This is a warning message"
    input-state="warning"
    id-for-input="checkbox_warning"
  >
    <mom-table
      id-for-input="checkbox_warning"
      :header="{
        col1: 'Column header 1',
        col2: 'Column header 2',
      }"
      :body="[
        {
          value: '1',
          col1: 'Row 1 column 1',
          col2: 'Row 1 column 2',
        },
        {
          value: '2',
          col1: 'Row 2 column 1',
          col2: 'Row 2 column 2',
        },
      ]"
      select-mode="multiple"
      input-name="checkbox-warning"
      input-state="warning"
    />
  </mom-form-group>
</div>
```

## Spacing

#### Table

<img src="./images/components/table/spacing@2x.png" alt="Table spacing" style="width:400px;">

<br/>

<img src="./images/components/table/spacing_radio@2x.png" alt="Table with radio button spacing" style="width:415px;">

<br/>

<img src="./images/components/table/spacing_checkbox@2x.png" alt="Table with checkbox spacing" style="width:415px;">

#### Table with pagination

<img src="./images/components/table/spacing_pagination@2x.png" alt="Table with pagination spacing" style="width:724px;">

## When to use it

When we are organising content to help users view, compare, understand and act on it.

<table>
  <tbody>
    <tr>
      <th>Full width</th>
      <td>When the table is the only item in the page/card.</td>
    </tr>
    <tr>
      <th>Sticky first column or last column</th>
      <td>When the table has many columns causing its width to exceed the width of the page and the content of the first or last column need to be in view at all times.</td>
    </tr>
    <tr>
      <th>Sortable columns</th>
      <td>When we need to sort a column alphabetically in ascending or descending order.</td>
    </tr>
    <tr>
      <th>Clickable row</th>
      <td>When the table has only one action, by clicking on the individual row, user will be brought to the another page.</td>
    </tr>
    <tr>
      <th>Selectable table</th>
      <td>When the user need to select a row or multiple rows.</td>
    </tr>
    <tr>
      <th>Vertical align middle (body only)</th>
      <td>When the content inside a row need to be visually centered vertically.</td>
    </tr>
    <tr>
      <th>Pagination</th>
      <td>When we want to split table with many rows into several pages, with a control for navigating to the next or previous page. The number of rows displayed will vary depending on the table content.</td>
    </tr>
  </tbody>
</table>

## Design considerations

Always **left align text** and **right align numbers**. Do not center align text as centered content becomes more difficult to scan as the table becomes more dense.

## Related components

To display pricing table, use [Description list table style](#/Components/Description%20List)
