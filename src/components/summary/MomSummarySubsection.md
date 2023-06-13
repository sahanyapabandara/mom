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
      active: true
    },
    {
      name: 'MomSummaryItem',
      link: '#/Components/Summary/MomSummaryItem',
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
  <mom-summary-subsection
    title="Subsection title (prop)"
    :items="[
      {
        label: 'Label 1',
        description: 'Description 1',
      },
      {
        label: 'Label 2',
        description: ['Description 2a', 'Description 2b'],
      },
    ]"
  />

  <mom-summary-subsection title="Subsection title (slot)">
    <mom-summary-item label="Label 3" description="Description 3" />

    <mom-summary-item label="Label 4" :description="['Description 4a', 'Description 4b']" />
  </mom-summary-subsection>
</mom-summary>
```
