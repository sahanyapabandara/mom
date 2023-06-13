```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Charts',
    },
    {
      name: 'MomHorizontalBar',
      link: '#/Components/Charts/MomHorizontalBar',
      active: true
    },
    {
      name: 'MomRadialBar',
      link: '#/Components/Charts/MomRadialBar',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-horizontal-bar />
```

## Examples

#### Horizontal Bar

```jsx
<mom-horizontal-bar
  success-point="50"
  :items="[
    {
      type: 'individual',
      value: 20,
    },
    {
      type: 'firm',
      value: 10,
    },
  ]"
/>
```
