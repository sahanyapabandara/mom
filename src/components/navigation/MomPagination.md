```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Navigation',
    },
    {
      name: 'MomBreadcrumb',
      link: '#/Components/Navigation/MomBreadcrumb',
    },
    {
      name: 'MomStepIndicator',
      link: '#/Components/Navigation/MomStepIndicator',
    },
    {
      name: 'MomPagination',
      link: '#/Components/Navigation/MomPagination',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-pagination />
```

## Examples

#### Default

```jsx
<mom-pagination total-items="100" items-per-page="10" />
```

#### Pagination with selected page

```jsx
<mom-pagination total-items="100" items-per-page="10" page="3" />
```
