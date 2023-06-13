```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Grid%20System',
    },
    {
      name: 'MomGridContainer',
      link: '#/Components/Grid%20System/MomGridContainer',
      active: true
    },
    {
      name: 'MomGridColumn',
      link: '#/Components/Grid%20System/MomGridColumn',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-grid-system />
```

## Examples

#### Default

Grid column width will auto adjust depends on the column content.

```jsx
<mom-grid-container>
  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>

  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>

  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>
</mom-grid-container>
```

```jsx
<mom-grid-container>
  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>

  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>

  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>

  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>

  <mom-grid-column>
    <div class="grid-demo">Auto</div>
  </mom-grid-column>
</mom-grid-container>
```

#### Column size

```jsx
<mom-grid-container>
  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="1">
    <div class="grid-demo">1</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="3">
    <div class="grid-demo">3</div>
  </mom-grid-column>

  <mom-grid-column size="3">
    <div class="grid-demo">3</div>
  </mom-grid-column>

  <mom-grid-column size="3">
    <div class="grid-demo">3</div>
  </mom-grid-column>

  <mom-grid-column size="3">
    <div class="grid-demo">3</div>
  </mom-grid-column>

  <mom-grid-column size="4">
    <div class="grid-demo">4</div>
  </mom-grid-column>

  <mom-grid-column size="4">
    <div class="grid-demo">4</div>
  </mom-grid-column>

  <mom-grid-column size="4">
    <div class="grid-demo">4</div>
  </mom-grid-column>

  <mom-grid-column size="6">
    <div class="grid-demo">6</div>
  </mom-grid-column>

  <mom-grid-column size="6">
    <div class="grid-demo">6</div>
  </mom-grid-column>

  <mom-grid-column size="12">
    <div class="grid-demo">12</div>
  </mom-grid-column>
</mom-grid-container>
```

#### Gutter size

```jsx
<div>
  <mom-grid-container gutter-size="l">
    <mom-grid-column>
      <div class="grid-demo">Gutter size: L</div>
    </mom-grid-column>

    <mom-grid-column>
      <div class="grid-demo">Gutter size: L</div>
    </mom-grid-column>
  </mom-grid-container>

  <mom-grid-container gutter-size="m">
    <mom-grid-column>
      <div class="grid-demo">Gutter size: M</div>
    </mom-grid-column>

    <mom-grid-column>
      <div class="grid-demo">Gutter size: M</div>
    </mom-grid-column>
  </mom-grid-container>

  <mom-grid-container gutter-size="s">
    <mom-grid-column>
      <div class="grid-demo">Gutter size: S</div>
    </mom-grid-column>

    <mom-grid-column>
      <div class="grid-demo">Gutter size: S</div>
    </mom-grid-column>
  </mom-grid-container>

  <mom-grid-container gutter-size="none">
    <mom-grid-column>
      <div class="grid-demo">Gutter size: none</div>
    </mom-grid-column>

    <mom-grid-column>
      <div class="grid-demo">Gutter size: none</div>
    </mom-grid-column>
  </mom-grid-container>
</div>
```
