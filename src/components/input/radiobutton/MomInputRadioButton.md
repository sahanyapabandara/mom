```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Radio%20button',
    },
    {
      name: 'MomInputRadio',
      link: '#/Components/Input%20component/Radio%20button/MomInputRadio',
    },
    {
      name: 'MomInputRadioButton',
      link: '#/Components/Input%20component/Radio%20button/MomInputRadioButton',
      active: true
    },
    {
      name: 'MomInputRadioCard',
      link: '#/Components/Input%20component/Radio%20button/MomInputRadioCard',
    },
  ]"
/>
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-input-radio-button label="Radio button label (prop)" value="1" />

  <mom-input-radio-button value="1">Radio button label (slot)</mom-input-radio-button>
</div>
```

#### Selected radio button

```jsx
<mom-input-radio-button value="1" label="Radio button label" checked />
```

#### Disabled radio button

```jsx
<mom-input-radio-button value="1" label="Radio button label" disabled />
```

#### Radio button with description text

```jsx
<div class="stack-y:24">
  <mom-input-radio-button
    value="1"
    label="Radio button label (prop)"
    description="Description text (prop)"
  />

  <mom-input-radio-button value="1">
    Radio button label (slot)
    <span slot="description">Description text (slot)</span>
  </mom-input-radio-button>
</div>
```
