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
    },
    {
      name: 'MomInputAutosuggest',
      link: '#/Components/Input%20component/Select%20field/MomInputAutosuggest',
      active: true
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
<canvas-input-autosuggest />
```

## Examples

#### Default

```jsx
<mom-input-autosuggest
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

#### Autosuggest input with free text option

```jsx
<mom-input-autosuggest
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
      value: '3',
    },
    {
      label: 'Option four',
      value: '4',
    },
  ]"
  allow-free-text
/>
```

#### Autosuggest input size

```jsx
<div class="stack-y:24">
  <mom-input-autosuggest
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
    size="xs"
  />

  <mom-input-autosuggest
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
    size="xs1"
  />

  <mom-input-autosuggest
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
    size="s"
  />

  <mom-input-autosuggest
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
    size="m"
  />

  <mom-input-autosuggest
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
    size="l"
  />

  <mom-input-autosuggest
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
    size="xl"
  />

  <mom-input-autosuggest
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
    size="full"
  />
</div>
```

#### Autosuggest input with placeholder

```jsx
<mom-input-autosuggest
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
  placeholder="Placeholder"
/>
```

#### Autosuggest input with state

```jsx
<div class="stack-y:24">
  <mom-input-autosuggest
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
    input-state="disabled"
  />

  <mom-input-autosuggest
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
    input-state="error"
  />

  <mom-input-autosuggest
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
    input-state="warning"
  />
</div>
```

#### Autosuggest input hide icon

```jsx
<div class="stack-y:24">
  <mom-input-autosuggest
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
    hide-icon
  />
  <mom-input-autosuggest
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
    placeholder="Placeholder"
    hide-icon
  />
</div>
```

#### Autosuggest input with categories

```jsx
<mom-input-autosuggest
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
