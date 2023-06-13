```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Form',
    },
    {
      name: 'MomFormGroup',
      link: '#/Components/Form/MomFormGroup',
    },
    {
      name: 'MomFormLabel',
      link: '#/Components/Form/MomFormLabel',
      active: true
    },
    {
      name: 'MomFormSubsection',
      link: '#/Components/Form/MomFormSubsection',
    },
    {
      name: 'MomFormFlexWrapper',
      link: '#/Components/Form/MomFormFlexWrapper',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-form-group />
```

## Examples

#### Default

The `id-for-input` attribute is required when `MomFormLabel` is used together with an input

```jsx
<div class="stack-y:24">
  <mom-form-label id-for-input="label1" text="Label text (prop)" />

  <mom-form-label id-for-input="label2">Label text (slot)</mom-form-label>
</div>
```

#### Use component as fieldset legend

Use as a `legend` for grouped inputs

```jsx
<mom-form-label type="legend" text="Legend text" />
```

#### Label font size

```jsx
<div class="stack-y:24">
  <mom-form-label text="Label text" size="s" />

  <mom-form-label text="Label text" size="m" />
</div>
```

#### Label with tooltip

```jsx
<div class="stack-y:24">
  <mom-form-label text="Label text" tooltip="Tooltip text (prop)" />

  <mom-form-label size="m">
    <span>Label text</span><!--
    --><mom-tooltip slot="tooltip" tooltip-text="Tooltip text (slot)" iconSize="m" />
  </mom-form-label>
</div>
```

#### Label with bullet

```jsx
<div class="stack-y:24">
  <mom-form-label text="Label text" size="s" show-bullet />

  <mom-form-label text="Label text" size="m" show-bullet />
</div>
```

#### Label with optional text

```jsx
<div class="stack-y:24">
  <mom-form-label text="Label text" size="s" optional />

  <mom-form-label text="Label text" size="m" optional />
</div>
```
