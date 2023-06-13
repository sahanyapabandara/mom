```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Summary',
    },
    {
      name: 'MomSummary',
      link: '#/Components/Summary/MomSummary',
    },
    {
      name: 'MomSummarySubsection',
      link: '#/Components/Summary/MomSummarySubsection',
    },
    {
      name: 'MomSummaryItem',
      link: '#/Components/Summary/MomSummaryItem',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-summary />
```

## Examples

#### Default

```jsx
<mom-summary title="Section title">
  <mom-summary-item label="Label 1" description="Description 1" />

  <mom-summary-item label="Label 2" description="Description 2" />
</mom-summary>
```

#### Summary item with list content

```jsx
<mom-summary title="Section title">
  <mom-summary-item
    label="Label 1"
    :description="['Description 1a', 'Description 1b']"
  />

  <mom-summary-item
    label="Label 2"
    :description="['Description 2a', 'Description 2b']"
  />
</mom-summary>
```

#### Summary item with slot content

```jsx
<mom-summary title="Section title">
  <mom-summary-item label="Label (paragraph)">
    <p class="mom-p">Paragraph</p>
  </mom-summary-item>

  <mom-summary-item label="Label (list item)">
    <ul class="mom-ul">
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </mom-summary-item>

  <mom-summary-item label="Label (table)" description-type="others">
    <mom-table>
      <mom-table-thead slot="header">
        <mom-table-tr row-type="header">
          <mom-table-th>Column Header 1</mom-table-th>
          <mom-table-th>Column Header 2</mom-table-th>
        </mom-table-tr>
      </mom-table-thead>
      <mom-table-tbody slot="body">
        <mom-table-tr>
          <mom-table-td>Row 1 Column 1</mom-table-td>
          <mom-table-td>Row 1 Column 2</mom-table-td>
        </mom-table-tr>
        <mom-table-tr>
          <mom-table-td>Row 2 Column 1</mom-table-td>
          <mom-table-td>Row 2 Column 2</mom-table-td>
        </mom-table-tr>
      </mom-table-tbody>
    </mom-table>
  </mom-summary-item>

  <mom-summary-item label="Label (thumbnails)" description-type="others">
    <mom-image-modal
      :images="[
        {
          url: 'https://media.aintitcool.com/media/_versions/2019/dannie/detpika_large.jpg',
          filename: 'filename 1.jpg',
        },
        {
          url: 'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
          filename: 'filename 2.jpg',
        },
      ]"
    />
  </mom-summary-item>
</mom-summary>
```

#### Summary item with bullet

```jsx
<mom-summary title="Section title">
  <mom-summary-item label="Label 1" description="Description 1" show-bullet />

  <mom-summary-item label="Label 2" description="Description 2" show-bullet />
</mom-summary>
```
