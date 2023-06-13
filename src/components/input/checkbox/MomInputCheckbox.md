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
      active: true
    },
    {
      name: 'MomInputCheckboxButton',
      link: '#/Components/Input%20component/Checkbox/MomInputCheckboxButton',
    },
    {
      name: 'MomInputCheckboxCard',
      link: '#/Components/Input%20component/Checkbox/MomInputCheckboxCard',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-input-checkbox />
```

## Examples

#### Default

```jsx
<mom-input-checkbox
  name="input-checkbox1"
  :value="['2']"
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
```

#### Disabled checkbox group

```jsx
<mom-input-checkbox
  name="input-checkbox2"
  :value="['2']"
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

#### Checkbox group with single option disabled

```jsx
<mom-input-checkbox
  name="input-checkbox3"
  :value="['2']"
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

#### Checkbox group with input state

```jsx
<div class="stack-y:48">
  <mom-input-checkbox
    name="input-checkbox4"
    :value="['2']"
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

  <mom-input-checkbox
    name="input-checkbox5"
    :value="['2']"
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

#### Horizontal style checkbox group

```jsx
<mom-input-checkbox
  name="input-checkbox6"
  :value="['2']"
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

### Card style checkbox group

```jsx
<mom-input-checkbox
  name="input-checkbox7"
  :value="['2']"
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
