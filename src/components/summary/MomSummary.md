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
      active: true
    },
    {
      name: 'MomSummarySubsection',
      link: '#/Components/Summary/MomSummarySubsection',
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
<div class="stack-y:48">
  <mom-summary
    title="Section title (prop)"
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

  <mom-summary title="Section title (slot)">
    <mom-summary-item
      label="Label"
      description="Description"
    />

    <mom-summary-item
      label="Label"
      :description="['Description 1', 'Description 2']"
    />
  </mom-summary>
</div>
```

#### Summary with subsections

```jsx
<div class="stack-y:48">
  <mom-summary
    title="Section title (prop)"
    use-subsection
    :items="[
    {
        items: [
          {
            label: 'Label 1',
            description: 'Description 1',
          },
          {
            label: 'Label 2',
            description: ['Description 2a', 'Description 2b'],
          },
        ]
      },
      {
        title: 'Subsection title 2',
        items: [
          {
            label: 'Label 3',
            description: 'Description 3',
          },
          {
            label: 'Label 4',
            description: ['Description 4a', 'Description 4b'],
          },
        ]
      },
    ]"
  />

  <mom-summary title="Section title (slot)">
    <mom-summary-subsection>
      <mom-summary-item label="Label 1" description="Description 1" />

      <mom-summary-item label="Label 2" :description="['Description 2a', 'Description 2b']" />
    </mom-summary-subsection>

    <mom-summary-subsection title="Subsection title 2">
      <mom-summary-item label="Label 3" description="Description 3" />

      <mom-summary-item label="Label 4" :description="['Description 4a', 'Description 4b']" />
    </mom-summary-subsection>
  </mom-summary>
</div>
```

#### Summary without edit link

```jsx
<mom-summary
  title="Section title"
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
  :show-edit="false"
/>
```
