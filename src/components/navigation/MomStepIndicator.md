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
      active: true
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
<canvas-step-indicator />
```

## Examples

#### Default

```jsx
<mom-step-indicator
  :steps="[
    {
      label: 'Step one',
    },
    {
      label: 'Step two',
    },
    {
      label: 'Step three',
    },
    {
      label: 'Step four',
    },
  ]"
/>
```

#### Step indicator with current step

```jsx
<mom-step-indicator
  current-step="2"
  :steps="[
    {
      label: 'Step one',
    },
    {
      label: 'Step two',
    },
    {
      label: 'Step three',
    },
    {
      label: 'Step four',
    },
  ]"
/>
```
