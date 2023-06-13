```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Checkbox',
      active: true
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
    },
  ]"
/>
```

> A checkbox is used to select or deselect one or more options.

## Examples

### Default checkbox group

```jsx noeditor
<mom-form-group type="fieldset" label="Legend">
  <mom-input-checkbox
    name="input-checkbox-default"
    :options="[
      {
        label: 'Checkbox label 1',
        value: '1'
      },
      {
        label: 'Checkbox label 2',
        value: '2'
      },
    ]"
  />
</mom-form-group>
```

#### Colours

- **Icon** – Cool grey 30 (default), Blue 40 (checked), Blue 60 (hover)
- **Label** – Cool grey 100
- **Description** – Cool grey 70

### Single checkbox

```jsx noeditor
<mom-input-checkbox-button name="input-checkbox-single" value="1" label="Checkbox label" />
```

### Card style

```jsx noeditor
<mom-form-group type="fieldset" label="Legend">
  <mom-input-checkbox
    name="input-checkbox-card"
    variant="card"
    :options="[
      {
        label: 'Checkbox label 1',
        description: 'Description text 1',
        supportingText: '$50',
        value: '1'
      },
      {
        label: 'Checkbox label 2',
        value: '2'
      },
    ]"
  />
</mom-form-group>
```

#### Colours

- **Icon** – Cool grey 30 (default), Blue 40 (checked), Blue 60 (hover)
- **Background** – White
- **Border** – Cool grey 20 (default), Cool grey 50 (checked), Blue 20 (hover)
- **Label** – Cool grey 100
- **Description** – Cool grey 70
- **Supporting text** – Cool grey 100

## States

#### Default

```jsx noeditor
<mom-input-checkbox
  name="input-checkbox-state"
  :value="['1']"
  :options="[
    {
      label: 'Checkbox label 1',
      value: '1',
    },
    {
      label: 'Checkbox label 2',
      value: '2',
    },
  ]"
/>
```

#### Disabled

```jsx noeditor
<mom-input-checkbox
  name="input-checkbox-state-disabled"
  :value="['1']"
  :options="[
    {
      label: 'Checkbox label 1',
      value: '1',
    },
    {
      label: 'Checkbox label 2',
      value: '2',
    },
  ]"
  disabled
/>
```

## Validations

### Error

```jsx noeditor
<div class="stack-y:48">
  <mom-form-group
    label="Legend"
    type="fieldset"
    message-text="This is a error message"
    input-state="error"
  >
    <mom-input-checkbox
      name="input-checkbox-error"
      input-state="error"
      :options="[
        {
          label: 'Checkbox label 1',
          value: '1',
        },
        {
          label: 'Checkbox label 2',
          value: '2',
        },
      ]"
    />
  </mom-form-group>
  <mom-form-group
    label="Legend"
    type="fieldset"
    message-text="This is a error message"
    input-state="error"
  >
    <mom-input-checkbox
      name="input-checkbox-card-error"
      variant="card"
      input-state="error"
      :options="[
        {
          label: 'Checkbox label 1',
          description: 'Description text 1',
          supportingText: '$50',
          value: '1',
        },
        {
          label: 'Checkbox label 2',
          supportingText: '$100',
          value: '2',
        },
      ]"
    />
  </mom-form-group>
</div>
```

### Warning

```jsx noeditor
<div class="stack-y:48">
  <mom-form-group
    label="Legend"
    type="fieldset"
    message-text="This is a warning message"
    input-state="warning"
  >
    <mom-input-checkbox
      name="input-checkbox-warning"
      input-state="warning"
      :options="[
        {
          label: 'Checkbox label 1',
          value: '1',
        },
        {
          label: 'Checkbox label 2',
          value: '2',
        },
      ]"
    />
  </mom-form-group>
  <mom-form-group
    label="Legend"
    type="fieldset"
    message-text="This is a warning message"
    input-state="warning"
  >
    <mom-input-checkbox
      name="input-checkbox-card-warning"
      variant="card"
      input-state="warning"
      :options="[
        {
          label: 'Checkbox label 1',
          description: 'Description text 1',
          supportingText: '$50',
          value: '1',
        },
        {
          label: 'Checkbox label 2',
          supportingText: '$100',
          value: '2',
        },
      ]"
    />
  </mom-form-group>
</div>
```

## Spacing

### Vertical style

<img src="./images/components/input/checkbox/spacing_vertical@2x.png" alt="Checkboxes spacing" style="width:732px;" />

### Horizontal style

<img src="./images/components/input/checkbox/spacing_horizontal@2x.png" alt="Horizontal checkboxes spacing" style="width:745px;" />

### Checkbox cards

<img src="./images/components/input/checkbox/spacing_card@2x.png" alt="Checkbox cards spacing" style="width:752px;" />

## When to use it

- Use a single checkbox for 'Yes' or 'No' options.
- Use a group of checkboxes to allow the user to **select or deselect one or more options**.
- When we want the options to be visible to the user. Otherwise, use multiselect.

## Design considerations

- Should be unselected by default.
- Don't use checkboxes for 'On' and 'Off' options. Use toggle switch instead.
- Lay out the options **vertically**.
- If implementing “None of the above” as an option, ensure that all other checkboxes are cleared when the option is selected.

## Related components

If the user can only select one option from a list, use [Radio button](#/Components/Radio%20button).
