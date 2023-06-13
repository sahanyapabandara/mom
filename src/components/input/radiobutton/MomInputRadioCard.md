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
    },
    {
      name: 'MomInputRadioCard',
      link: '#/Components/Input%20component/Radio%20button/MomInputRadioCard',
      active: true
    },
  ]"
/>
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-input-radio-card label="Radio button label (prop)" value="1" />
  <mom-input-radio-card value="1">Radio button label (slot)</mom-input-radio-card>
</div>
```

#### Selected radio card

```jsx
<mom-input-radio-card label="Radio button label" value="1" checked />
```

#### Disabled radio card

```jsx
<mom-input-radio-card label="Radio button label" value="1" disabled />
```

#### Radio card with desciption text and supporting text

```jsx
<div class="stack-y:24">
  <mom-input-radio-card
    value="1"
    label="Radio button label"
    description="(Description text prop)"
    supporting-text="Supporting text prop"
  />

  <mom-input-radio-card value="1">
    Radio button label
    <span slot="description">(Description text slot)</span>
    <span slot="supportingText">Supporting text slot</span>
  </mom-input-radio-card>
</div>
```
