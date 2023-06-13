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
      active: true
    },
    {
      name: 'MomStepIndicator',
      link: '#/Components/Navigation/MomStepIndicator',
    },
    {
      name: 'MomPagination',
      link: '#/Components/Navigation/MomPagination',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-breadcrumb />
```

## Examples

#### Default

```jsx
<mom-breadcrumb
  :links="[
    {
      text: '<em>myMOM</em> Portal',
      href: 'javascript:void(0);',
    },
    {
      text: 'Quick Menu',
      href: 'javascript:void(0);',
    },
  ]"
/>
```
