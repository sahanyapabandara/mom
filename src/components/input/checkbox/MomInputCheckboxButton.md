```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Checkbox',
    },
    {
      name: 'MomInputCheckbox',
      link: '#/Components/Input%20component/Checkbox/MomInputCheckbox',
    },
    {
      name: 'MomInputCheckboxButton',
      link: '#/Components/Input%20component/Checkbox/MomInputCheckboxButton',
      active: true
    },
    {
      name: 'MomInputCheckboxCard',
      link: '#/Components/Input%20component/Checkbox/MomInputCheckboxCard',
    },
  ]"
/>
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-input-checkbox-button label="Checkbox label (prop)" value="1" />

  <mom-input-checkbox-button value="1">Checkbox label (slot)</mom-input-checkbox-button>
</div>
```

#### Selected checkbox button

```jsx
<mom-input-checkbox-button label="Checkbox label" value="1" checked />
```

#### Disabled checkbox button

```jsx
<mom-input-checkbox-button label="Checkbox label" value="1" disabled />
```

#### Checkbox button with description text

```jsx
<div class="stack-y:24">
  <mom-input-checkbox-button
    value="1"
    label="Checkbox label (prop)"
    description="Description text (prop)"
  ></mom-input-checkbox-button>

  <mom-input-checkbox-button value="1">
    Checkbox label (slot)
    <span slot="description">Description text (slot)</span>
  </mom-input-checkbox-button>
</div>
```
