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
      active: true
    },
    {
      name: 'MomDescriptionList',
      link: '#/Components/Description%20List/MomDescriptionList',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-description-item />
```

## Examples

#### Default

```jsx
<div>
  <mom-description-item term="Term" details="Details (prop)" />

  <mom-description-item term="Term">
    <p class="mom-p">Details (slot)</p>
  </mom-description-item>
</div>
```

#### Description item term width

```jsx
<div>
  <mom-description-item term="Term" details="Details" term-width="s" />

  <mom-description-item term="Term" details="Details" term-width="m" />

  <mom-description-item term="Term" details="Details" term-width="l" />
</div>
```

#### Horizontal description item

```jsx
<mom-description-item term="Term" details="Details" variant="horizontal" />
```

#### Vertical description item

```jsx
<mom-description-item term="Term" details="Details" variant="vertical" />
```

#### Table style description item

```jsx
<mom-description-item term="Term" details="Details" variant="table" />
```

#### Description item with tooltip

```jsx
<div>
  <mom-description-item term="Term" details="Details" tooltip="Tooltip text (prop)" />

  <mom-description-item term="Term" details="Details" variant="horizontal">
    <mom-tooltip slot="tooltip" tooltip-text="Tooltip text (slot)" />
  </mom-description-item>

  <mom-description-item term="Term" details="Details" variant="vertical">
    <mom-tooltip slot="tooltip" tooltip-text="Tooltip text (slot)" />
  </mom-description-item>

  <mom-description-item
    term="Term"
    details="Details"
    variant="table"
    tooltip="Tooltip text (prop)"
  />
</div>
```

#### Description item with bold text

```jsx
<div>
  <mom-description-item term="Term" details="Details" bold-text />
  <mom-description-item term="Term" details="Details" variant="horizontal" bold-text />
  <mom-description-item term="Term" details="Details" variant="vertical" bold-text />
  <mom-description-item term="Term" details="Details" variant="table" bold-text />
</div>
```

#### Description item with top border

```jsx
<div>
  <mom-description-item term="Term" details="Details" top-border />
  <mom-description-item term="Term" details="Details" variant="horizontal" top-border />
  <mom-description-item term="Term" details="Details" variant="vertical" top-border />
  <mom-description-item term="Term" details="Details" variant="table" top-border />
</div>
```

#### Description item with bottom border

```jsx
<div>
  <mom-description-item term="Term" details="Details" bottom-border />
  <mom-description-item term="Term" details="Details" variant="horizontal" bottom-border />
  <mom-description-item term="Term" details="Details" variant="vertical" bottom-border />
  <mom-description-item term="Term" details="Details" variant="table" bottom-border />
</div>
```
