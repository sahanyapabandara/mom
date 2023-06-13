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
      active: true
    },
    {
      name: 'MomInputRadioButton',
      link: '#/Components/Input%20component/Radio%20button/MomInputRadioButton',
    },
    {
      name: 'MomInputRadioCard',
      link: '#/Components/Input%20component/Radio%20button/MomInputRadioCard',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-input-radio />
```

## Examples

#### Default

```jsx
<mom-input-radio
  name="input-radio1"
  value="2"
  :options="[
    {
      label: 'Option one',
      value: '1'
    },
    {
      label: 'Option two',
      value: '2'
    },
    {
      label: 'Option three',
      value: '3'
    },
  ]"
/>
```

#### Disabled radio group

```jsx
<mom-input-radio
  name="input-radio2"
  value="2"
  :options="[
    {
      label: 'Option one',
      value: '1',
    },
    {
      label: 'Option two',
      value: '2',
    },
    {
      label: 'Option three',
      value: '3',
    },
  ]"
  disabled
/>
```

#### Radio group with single option disabled

```jsx
<mom-input-radio
  name="input-radio3"
  value="2"
  :options="[
    {
      label: 'Option one',
      value: '1',
    },
    {
      label: 'Option two',
      value: '2',
    },
    {
      label: 'Option three',
      value: '3',
      disabled: true
    },
  ]"
/>
```

#### Radio group with input state

```jsx
<div class="stack-y:48">
  <mom-input-radio
    name="input-radio4"
    value="2"
    input-state="error"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
      {
        label: 'Option three',
        value: '3',
      },
    ]"
  />

  <mom-input-radio
    name="input-radio5"
    value="2"
    input-state="warning"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
      {
        label: 'Option three',
        value: '3',
      },
    ]"
  />
</div>
```

#### Horizontal style radio group

```jsx
<mom-input-radio
  name="input-radio6"
  value="2"
  variant="horizontal"
  :options="[
    {
      label: 'Option one',
      value: '1'
    },
    {
      label: 'Option two',
      value: '2'
    },
    {
      label: 'Option three',
      value: '3'
    },
  ]"
/>
```

### Card style radio group

```jsx
<mom-input-radio
  name="input-radio7"
  value="2"
  variant="card"
  :options="[
    {
      label: 'Option one',
      value: '1',
      description: 'Description',
      supportingText: 'Supporting text',
    },
    {
      label: 'Option two',
      value: '2',
      description: 'Description',
    },
    {
      label: 'Option three',
      value: '3',
      supportingText: 'Supporting text',
    },
  ]"
/>
```
