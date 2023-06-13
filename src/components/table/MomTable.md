```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Table',
    },
    {
      name: 'MomTable',
      link: '#/Components/Table/MomTable',
      active: true
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
      name: 'MomTableTfoot',
      link: '#/Components/Table/MomTableTfoot',
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

## Canvas

```jsx noeditor
<canvas-table />
```

## Examples

#### Simple usage

```jsx
<div>
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

  <mom-table>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1 (prop)" />
        <mom-table-th>Column header 2 (slot)</mom-table-th>
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1 (prop)" />
        <mom-table-td>Row 1 column 2 (slot)</mom-table-td>
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1(prop)" />
        <mom-table-td>Row 2 column 2 (slot)</mom-table-td>
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Table with footer

```jsx
<div>
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

  <mom-table>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1 (prop)" />
        <mom-table-th>Column header 2 (slot)</mom-table-th>
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1 (prop)" />
        <mom-table-td>Row 1 column 2 (slot)</mom-table-td>
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1 (prop)" />
        <mom-table-td>Row 2 column 2 (slot)</mom-table-td>
      </mom-table-tr>
    </mom-table-tbody>
    <mom-table-tfoot slot="footer">
      <mom-table-tr row-type="footer">
        <mom-table-td text="Column footer 1 (prop)" />
        <mom-table-td>Column footer 2 (slot)</mom-table-td>
      </mom-table-tr>
    </mom-table-tfoot>
  </mom-table>
</div>
```

#### Empty table

```jsx
<div>
  <mom-table
    :header="{
      col1: 'Column header 1',
      col2: 'Column header 2',
    }"
    :body="[
    ]"
  />

  <mom-table>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr is-placeholder>
        <mom-table-td colspan="2" text="No records found." />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Full width table

```jsx
<div>
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

  <mom-table full-width>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Vertical align center table

```jsx
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
        <mom-table-td text="Row 1 column 2 line 1<br/>Row 1 column 2 line 2" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2 line 1<br/>Row 2 column 2 line 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Table with sortable columns

```jsx
<div>
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

  <mom-table sort-key="col1" sort-order="asc">
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" column-key="col1" sortable />
        <mom-table-th text="Column header 2" column-key="col2" sortable />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Selectable table

```jsx
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
      {
        value: '3',
        col1: 'Row 3 Column 1',
        col2: 'Row 3 Column 2',
        disabled: true
      }
    ]"
    value="2"
    select-mode="single"
    input-name="radio"
  />

  <mom-table :value="['2']" select-mode="multiple" input-name="checkbox">
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr value="1">
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr value="2">
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
      <mom-table-tr value="3" disabled>
        <mom-table-td text="Row 3 column 1" />
        <mom-table-td text="Row 3 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Selectable table with input states

```jsx
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
    input-name="radio-error"
    input-state="error"
  />

  <mom-table select-mode="multiple" input-name="checkbox-warning" input-state="warning">>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr value="1">
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr value="2">
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Expandable table

```jsx
<div>
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
      {
        id: 'row3',
        col1: 'Row 3 column 1',
        col2: 'Row 3 column 2',
        disabled: true,
      },
      {
        id: 'row4',
        col1: 'Row 4 column 1',
        col2: 'Row 4 column 2',
        locked: true,
      },
    ]"
    select-mode="expandable"
  >
    <p slot="row1" class="mom-p-s">Row 1 expanded content</p>

    <p slot="row2" class="mom-p-s">Row 2 expanded content</p>
  </mom-table>

  <mom-table select-mode="expandable">
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr row-id="row1">
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr is-single-column style="display: none">
        <mom-table-td colspan="100%">
          <p class="mom-p-s">Expanded content</p>
        </mom-table-td>
      </mom-table-tr>
      <mom-table-tr row-id="row2">
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
      <mom-table-tr is-single-column style="display: none">
        <mom-table-td colspan="100%">
          <p class="mom-p-s">Expanded content</p>
        </mom-table-td>
      </mom-table-tr>
      <mom-table-tr row-id="row3" disabled>
        <mom-table-td text="Row 3 column 1" />
        <mom-table-td text="Row 3 column 2" />
      </mom-table-tr>
      <mom-table-tr row-id="row3" locked>
        <mom-table-td text="Row 4 column 1" />
        <mom-table-td text="Row 4 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Clickable table

```jsx
<div>
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
      {
        id: 'row3',
        col1: 'Row 3 column 1',
        col2: 'Row 3 column 2',
        disabled: true,
      },
      {
        id: 'row4',
        col1: 'Row 4 column 1',
        col2: 'Row 4 column 2',
        locked: true,
      },
    ]"
    clickable
  />

  <mom-table clickable>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr row-id="row1">
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr row-id="row2">
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
      <mom-table-tr row-id="row3" disabled>
        <mom-table-td text="Row 3 column 1" />
        <mom-table-td text="Row 3 column 2" />
      </mom-table-tr>
      <mom-table-tr row-id="row3" locked>
        <mom-table-td text="Row 4 column 1" />
        <mom-table-td text="Row 4 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Disabled table

```jsx
<div>
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
    select-mode="single"
    disabled
  />

  <mom-table select-mode="multiple" disabled>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Table with pagination

```jsx
<div>
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

  <mom-table full-width pagination total-rows="6" rows-per-page="2">
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" />
        <mom-table-th text="Column header 2" />
        <mom-table-th text="Column header 3" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
        <mom-table-td text="Row 1 column 3" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
        <mom-table-td text="Row 2 column 3" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Table column min width

```jsx
<div>
  <mom-table
    :header="{
      col1: { value: 'Column header 1', minWidth: 250 },
      col2: { value: 'Column header 2', minWidth: 250 },
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

  <mom-table>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" min-width="250" />
        <mom-table-th text="Column header 2" min-width="250" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Table with sticky column

```jsx
<div>
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

  <mom-table last-column-sticky>
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" min-width="250" />
        <mom-table-th text="Column header 2" min-width="250" />
        <mom-table-th text="Column header 3" min-width="250" />
        <mom-table-th text="Column header 4" min-width="250" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
        <mom-table-td text="Row 1 column 3" />
        <mom-table-td text="Row 1 column 4" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
        <mom-table-td text="Row 2 column 3" />
        <mom-table-td text="Row 2 column 4" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```

#### Table column type

```jsx
<mom-table
  :header="{
    col1: { value: 'Text column', type: 'text', sortable: true },
    col2: { value: 'Date column', type: 'date', sortable: true },
    col3: { value: 'Date time column', type: 'datetime', sortable: true },
    col4: { value: 'Link column', type: 'link' },
    col5: { value: 'Button column', type: 'button' },
    col6: { value: 'Status column', type: 'status', sortable: true },
  }"
  :body="[
    {
      col1: 'Row 1 text',
      col2: 1565539312345,
      col3: 1565539312345,
      col4: { value: '<em>MyMOM</em> Portal', href:'javascript:void(0);', target:'_blank' },
      col5: { value: 'Edit', icon: 'edit' },
      col6: { value: 'Approved', color: 'green', icon: 'success' },
    },
    {
      col1: 'Row 2 text',
      col2: 1565539312345,
      col3: 1565539312345,
      col4: { value: '<em>MyMOM</em> Portal', href:'javascript:void(0);', target:'_blank'},
      col5: { value: 'Edit', icon: 'edit' },
      col6: { value: 'Approved', color: 'green', icon: 'success' },
    },
    {
      col1: 'Row 3 text',
      col2: 1565539312345,
      col3: 1565539312345,
      col4: { value: '<em>MyMOM</em> Portal', href:'javascript:void(0);', target:'_blank'},
      col5: { value: 'Edit', icon: 'edit' },
      col6: { value: 'Approved', color: 'green', icon: 'success' },
    }
  ]"
/>
```

#### Table column with header tooltip

```jsx
<div>
  <mom-table
    :header="{
      col1: { value: 'Column header 1', tooltip: 'Header tooltip', sortable: true },
      col2: { value: 'Column header 2', tooltip: 'Header tooltip' },
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

  <mom-table sort-key="col1" sort-order="asc">
    <mom-table-thead slot="header">
      <mom-table-tr row-type="header">
        <mom-table-th text="Column header 1" tooltip="Header tooltip" column-key="col1" sortable />
        <mom-table-th text="Column header 2" tooltip="Header tooltip" />
      </mom-table-tr>
    </mom-table-thead>
    <mom-table-tbody slot="body">
      <mom-table-tr>
        <mom-table-td text="Row 1 column 1" />
        <mom-table-td text="Row 1 column 2" />
      </mom-table-tr>
      <mom-table-tr>
        <mom-table-td text="Row 2 column 1" />
        <mom-table-td text="Row 2 column 2" />
      </mom-table-tr>
    </mom-table-tbody>
  </mom-table>
</div>
```
