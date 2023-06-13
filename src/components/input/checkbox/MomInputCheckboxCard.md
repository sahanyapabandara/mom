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
    },
    {
      name: 'MomInputCheckboxCard',
      link: '#/Components/Input%20component/Checkbox/MomInputCheckboxCard',
      active: true,
    },
  ]"
/>
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-input-checkbox-card label="Checkbox label (prop)" value="1" />

  <mom-input-checkbox-card value="1">Checkbox label (slot)</mom-input-checkbox-card>
</div>
```

#### Selected checkbox card

```jsx
<mom-input-checkbox-card label="Checkbox label" value="1" checked />
```

#### Disabled checkbox card

```jsx
<mom-input-checkbox-card label="Checkbox label" value="1" disabled />
```

#### Checkbox card with desciption text and supporting text

```jsx
<div class="stack-y:24">
  <mom-input-checkbox-card
    value="1"
    label="Checkbox label (prop)"
    description="Description text (prop)"
    supporting-text="Supporting (prop)"
  />

  <mom-input-checkbox-card value="1">
    Checkbox label (slot)
    <span slot="description">Description text (slot)</span>
    <span slot="supportingText">Supporting (slot)</span>
  </mom-input-checkbox-card>
</div>
```
