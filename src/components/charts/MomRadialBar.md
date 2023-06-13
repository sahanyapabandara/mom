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
    },
    {
      name: 'MomRadialBar',
      link: '#/Components/Charts/MomRadialBar',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-radial-bar />
```

## Examples

#### Radial Bar

```jsx
<mom-radial-bar
  type="firm"
  value="20"
  max="60"
  name="MELTEM ASIA PACIFIC"
  :link="{
    text: 'View Workforce Profile',
    href: 'javascript:void(0);',
  }"
/>
```
