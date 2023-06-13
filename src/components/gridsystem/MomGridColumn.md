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
    },
    {
      name: 'MomGridColumn',
      link: '#/Components/Grid%20System/MomGridColumn',
      active: true
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

```jsx
<mom-grid-container>
  <mom-grid-column size="12">
    <div class="grid-demo">12</div>
  </mom-grid-column>

  <mom-grid-column size="6">
    <div class="grid-demo">6</div>
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

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
  </mom-grid-column>

  <mom-grid-column size="2">
    <div class="grid-demo">2</div>
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
</mom-grid-container>
```

#### Column size for different breakpoint

```jsx
<mom-grid-container>
  <mom-grid-column size="12" size-sm="6" size-md="4" size-lg="3" size-xl="2">
    <div class="grid-demo">
      Size: 12
      <br />
      Size sm: 6<br />
      Size md: 4<br />
      Size lg: 3<br />
      Size xl: 2<br />
    </div>
  </mom-grid-column>

  <mom-grid-column size="12" size-sm="6" size-md="4" size-lg="3" size-xl="2">
    <div class="grid-demo">
      Size: 12
      <br />
      Size sm: 6<br />
      Size md: 4<br />
      Size lg: 3<br />
      Size xl: 2<br />
    </div>
  </mom-grid-column>

  <mom-grid-column size="12" size-sm="6" size-md="4" size-lg="3" size-xl="2">
    <div class="grid-demo">
      Size: 12
      <br />
      Size sm: 6<br />
      Size md: 4<br />
      Size lg: 3<br />
      Size xl: 2<br />
    </div>
  </mom-grid-column>

  <mom-grid-column size="12" size-sm="6" size-md="4" size-lg="3" size-xl="2">
    <div class="grid-demo">
      Size: 12
      <br />
      Size sm: 6<br />
      Size md: 4<br />
      Size lg: 3<br />
      Size xl: 2<br />
    </div>
  </mom-grid-column>

  <mom-grid-column size="12" size-sm="6" size-md="4" size-lg="3" size-xl="2">
    <div class="grid-demo">
      Size: 12
      <br />
      Size sm: 6<br />
      Size md: 4<br />
      Size lg: 3<br />
      Size xl: 2<br />
    </div>
  </mom-grid-column>

  <mom-grid-column size="12" size-sm="6" size-md="4" size-lg="3" size-xl="2">
    <div class="grid-demo">
      Size: 12
      <br />
      Size sm: 6<br />
      Size md: 4<br />
      Size lg: 3<br />
      Size xl: 2<br />
    </div>
  </mom-grid-column>
</mom-grid-container>
```
