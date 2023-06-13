```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Select%20field',
    },
    {
      name: 'MomInputSelect',
      link: '#/Components/Input%20component/Select%20field/MomInputSelect',
      active: true
    },
    {
      name: 'MomInputAutosuggest',
      link: '#/Components/Input%20component/Select%20field/MomInputAutosuggest',
    },
    {
      name: 'MomInputAutosuggestDynamic',
      link: '#/Components/Input%20component/Select%20field/MomInputAutosuggestDynamic',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-input-select />
```

## Examples

#### Default

```jsx
<mom-input-select
  :options="[
    {
      label: 'Option one',
      description: 'Description',
      value: '1',
    },
    {
      label: 'Option two',
      description: 'Description',
      value: '2',
    },
    {
      label: 'Option three',
      description: 'Description',
      value: '3',
    },
    {
      label: 'Option four',
      description: 'Description',
      value: '4',
    },
    {
      label: 'Option five',
      value: '5',
    },
    {
      label: 'Option six',
      value: '6',
    },
     {
      label: 'Option seven',
      value: '7',
    },
    {
      label: 'Option eight',
      value: '8',
    },
  ]"
/>
```

#### Select input sizes

```jsx
<div class="stack-y:24">
  <mom-input-select
    size="xs"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
    size="xs1"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
    size="s"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
    size="m"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
    size="l"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
    size="xl"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
    size="full"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />
</div>
```

#### Select input with placeholder

```jsx
<mom-input-select
  placeholder="Placeholder"
  :options="[
    {
      label: 'Option one',
      value: '1',
    },
    {
      label: 'Option two',
      value: '2',
    },
  ]"
/>
```

#### Select input with input states

```jsx
<div class="stack-y:24">
  <mom-input-select
    input-state="disabled"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
      },
    ]"
  />

  <mom-input-select
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
    ]"
  />

  <mom-input-select
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
    ]"
  />
</div>
```

#### Select input with categories

```jsx
<mom-input-select
  :options="[
    {
      title: 'Group A',
      options: [
        {
          label: 'Option one',
          description: 'Description one',
          value: '1',
        },
        {
          label: 'Option two',
          value: '2',
        },
      ]
    },
    {
      title: 'Group B',
      options: [
        {
          label: 'Option three',
          description: 'Description three',
          value: '3',
        },
        {
          label: 'Option four',
          value: '4',
        },
      ]
    },
  ]"
  use-category
/>
```
