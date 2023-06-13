```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Status',
    },
    {
      name: 'MomStatus',
      link: '#/Components/Status/MomStatus',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-status />
```

## Examples

#### Default status

```jsx
<mom-status text="Status text" />
```

#### Status size

```jsx
<div class="stack-y:24">
  <mom-status text="Status text" size="s" />
  <mom-status text="Status text" size="m" />
  <mom-status text="Status text" size="l" />
</div>
```

#### Status color

```jsx
<div class="stack-y:24">
  <mom-status text="Status text" color="green" />
  <mom-status text="Status text" color="red" />
  <mom-status text="Status text" color="orange" />
  <mom-status text="Status text" color="blue" />
  <mom-status text="Status text" color="purple" />
  <mom-status text="Status text" color="grey" />
</div>
```

#### Status with icon

```jsx
<div class="stack-y:24">
  <mom-status text="Status text" icon="success" size="s" color="green" />
  <mom-status text="Status text" icon="question" size="m" color="grey" />
  <mom-status text="Status text" icon="error" size="l" color="red" />
</div>
```

#### Status with uppercase text

```jsx
<mom-status text="Status text" uppercase />
```
