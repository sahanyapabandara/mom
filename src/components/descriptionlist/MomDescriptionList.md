```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Description%20List',
    },
    {
      name: 'MomDescriptionItem',
      link: '#/Components/Description%20List/MomDescriptionItem',
    },
    {
      name: 'MomDescriptionList',
      link: '#/Components/Description%20List/MomDescriptionList',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-description-list />
```

## Examples

#### Default (responsive)

```jsx
<div class="stack-y:48">
  <mom-description-list
    :items="[
      {
        term: 'Term 1',
        details: 'Details 1',
      },
      {
        term: 'Term 2',
        details: 'Details 2',
      },
    ]"
    term-width="s"
  />

  <mom-description-list
    :items="[
      {
        term: 'Term 1',
        details: 'Details 1',
      },
      {
        term: 'Term 2',
        details: 'Details 2',
      },
    ]"
    term-width="m"
  />

  <mom-description-list
    :items="[
      {
        term: 'Term 1',
        details: 'Details 1',
      },
      {
        term: 'Term 2',
        details: 'Details 2',
      },
    ]"
    term-width="l"
  />

  <mom-description-list
    :items="[
      {
        term: 'Term 1',
        details: 'Details 1',
      },
      {
        term: 'Term 2',
        details: 'Details 2',
      },
      {
        term: 'Term 3',
        details: 'Details 3',
      },
    ]"
    divider
  />
</div>
```

#### Horizontal description list

```jsx
<mom-description-list
  :items="[
    {
      term: 'Term 1',
      details: 'Details 1',
    },
    {
      term: 'Term 2',
      details: 'Details 2',
    },
    {
      term: 'Term 3',
      details: 'Details 3',
    },
  ]"
  variant="horizontal"
/>
```

#### Vertical description list

```jsx
<mom-description-list
  :items="[
    {
      term: 'Term 1',
      details: 'Details 1',
    },
    {
      term: 'Term 2',
      details: 'Details 2',
    },
    {
      term: 'Term 3',
      details: 'Details 3',
    },
  ]"
  variant="vertical"
/>
```

#### Table style description list

```jsx
<mom-description-list
  :items="[
    {
      term: 'Term 1',
      details: 'Details 1',
    },
    {
      term: 'Term 2',
      details: 'Details 2',
    },
    {
      term: 'Term 3',
      details: 'Details 3',
      boldText: true,
      topBorder: true
    },
  ]"
  variant="table"
/>
```

#### Description list with tooltip

```jsx
<div class="stack-y:48">
  <mom-description-list
    :items="[
      {
        term: 'Term 1',
        details: 'Details 1',
        tooltip: 'Tooltip'
      },
      {
        term: 'Term 2',
        details: 'Details 2',
      },
    ]"
  />

  <mom-description-list
    variant="table"
    :items="[
      {
        term: 'Term 1',
        details: 'Details 1',
        tooltip: 'Tooltip'
      },
      {
        term: 'Term 2',
        details: 'Details 2',
      },
    ]"
  />
</div>
```
