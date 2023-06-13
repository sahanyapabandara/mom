```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Tooltip',
    },
    {
      name: 'MomTooltip',
      link: '#/Components/Tooltip/MomTooltip',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-tooltip />
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-tooltip tooltip-text="Tooltip content (prop)" />
  <br />
  <mom-tooltip>
    <p class="mom-p-s">Tooltip content (slot)</p>
  </mom-tooltip>
</div>
```

#### Tooltip icon size

```jsx
<div class="stack-y:24">
  <mom-tooltip tooltip-text="Tooltip content" icon-size="s" />
  <br />
  <mom-tooltip tooltip-text="Tooltip content" icon-size="m" />
</div>
```

#### Tooltip with toggle text

```jsx
<div class="stack-y:24">
  <mom-tooltip tooltip-text="Tooltip content (prop)" toggle-text="Show tooltip (prop)" />
  <br />
  <mom-tooltip>
    <p slot="toggle" class="mom-p">
      Show tooltip (slot)
    </p>
    <p class="mom-p-s">Tooltip content (slot)</p>
  </mom-tooltip>
</div>
```

#### Tooltip with scrollablecontent

```jsx
<mom-tooltip>
  <p class="mom-p-s">Tooltip content line 1</p>
  <p class="mom-p-s">Tooltip content line 2</p>
  <p class="mom-p-s">Tooltip content line 3</p>
  <p class="mom-p-s">Tooltip content line 4</p>
  <p class="mom-p-s">Tooltip content line 5</p>
  <p class="mom-p-s">Tooltip content line 6</p>
  <p class="mom-p-s">Tooltip content line 7</p>
  <p class="mom-p-s">Tooltip content line 8</p>
  <p class="mom-p-s">Tooltip content line 9</p>
  <p class="mom-p-s">Tooltip content line 10</p>
</mom-tooltip>
```
