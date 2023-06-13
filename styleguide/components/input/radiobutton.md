```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Radio%20button',
      active: true
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
    },
  ]"
/>
```

> Allows the user to select only one option from a list.

## Examples

### Default radio buttons

```jsx noeditor
<mom-form-group type="fieldset" label="Legend">
  <mom-input-radio
    name="input-radio-default"
    :options="[
      {
        label: 'Radio button label 1',
        value: '1'
      },
      {
        label: 'Radio button label 2',
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

### Horizontal style

```jsx noeditor
<mom-form-group type="fieldset" label="Legend">
  <mom-input-radio
    name="input-radio-horizontal"
    variant="horizontal"
    :options="[
      {
        label: 'Yes',
        value: '1'
      },
      {
        label: 'No',
        value: '2'
      },
    ]"
  />
</mom-form-group>
```

#### Colours

- **Icon** – Cool grey 30 (default), Blue 40 (checked), Blue 60 (hover)
- **Label** – Cool grey 100

### Card style

```jsx noeditor
<mom-form-group type="fieldset" label="Legend">
  <mom-input-radio
    name="input-radio-card"
    variant="card"
    :options="[
      {
        label: 'Radio button label 1',
        description: 'Description text 1',
        supportingText: '$50',
        value: '1',
      },
      {
        label: 'Radio button label 2',
        supportingText: '$100',
        value: '2',
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

### Default

```jsx noeditor
<div class="stack-y:48">
  <mom-input-radio
    name="input-radio-state"
    value="1"
    :options="[
      {
        label: 'Radio button label 1',
        value: '1'
      },
      {
        label: 'Radio button label 2',
        value: '2'
      },
    ]"
  />
  <mom-input-radio
    name="input-radio-card-state"
    variant="card"
    value="1"
    :options="[
      {
        label: 'Radio button label one',
        description: 'Description text 1',
        value: '1'
      },
      {
        label: 'Radio button label two',
        value: '2'
      },
    ]"
  />
</div>
```

### Disabled

```jsx noeditor
<div class="stack-y:48">
  <mom-input-radio
    name="input-radio-disabled"
    value="1"
    :options="[
      {
        label: 'Radio button label one',
        value: '1'
      },
      {
        label: 'Radio button label two',
        value: '2'
      },
    ]"
    disabled
  />
  <mom-input-radio
    name="input-radio-card-disabled"
    variant="card"
    value="1"
    :options="[
      {
        label: 'Radio button label 1',
        description: 'Description text 1',
        supportingText: '$100',
        value: '1'
      },
      {
        label: 'Radio button label 2',
        supportingText: '$100',
        value: '2'
      },
    ]"
    disabled
  />
</div>
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
    <mom-input-radio
      name="input-radio-error"
      input-state="error"
      :options="[
        {
          label: 'Radio button label 1',
          value: '1',
        },
        {
          label: 'Radio button label 2',
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
    <mom-input-radio
      name="input-radio-card-error"
      variant="card"
      input-state="error"
      :options="[
        {
          label: 'Radio button label 1',
          description: 'Description text 1',
          supportingText: "$50",
          value: '1',
        },
        {
          label: 'Radio button label 2',
          supportingText: "$100",
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
    <mom-input-radio
      name="input-radio-warning"
      input-state="warning"
      :options="[
        {
          label: 'Radio button label 1',
          value: '1',
        },
        {
          label: 'Radio button label 2',
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
    <mom-input-radio
      name="input-radio-card-warning"
      variant="card"
      input-state="warning"
      :options="[
        {
          label: 'Radio button label 1',
          description: 'Description text 1',
          value: '1',
        },
        {
          label: 'Radio button label 2',
          value: '2',
        },
      ]"
    />
  </mom-form-group>
</div>
```

## Spacing

### Vertical style

<img src="./images/components/input/radiobutton/spacing_vertical@2x.png" alt="Radio buttons spacing" style="width:732px;" />

### Horizontal style

<img src="./images/components/input/radiobutton/spacing_horizontal@2x.png" alt="Horizontal radio buttons spacing" style="width:745px;" />

### Radio cards

<img src="./images/components/input/radiobutton/spacing_card@2x.png" alt="Radio cards spacing" style="width:752px;" />

## When to use it

- When we want users to choose **only one option** from a list.
- There are between two and five options.
- The options are unfamiliar to the user, and there is little or no chance that he can predict them.
- When displaying the options **improves the ease of scanning what’s available**, without causing too much clutter on the screen.

<table>
  <tbody>
    <tr>
      <th>Horizontal style</th>
      <td>When the options are 'Yes' and 'No'.</td>
    </tr>
    <tr>
      <th>Card style</th>
      <td>When we want to display other information or description related to the options.</td>
    </tr>
  </tbody>
</table>

## Design considerations

- Should be unselected by default.
- If none of the options are valid, add another option to reflect this choice, such as "None" or "Does not apply".
- Do not use radio button as a button to perform an action.
- Lay out options **vertically**, except if the options are "Yes" and "No". Horizontal alignment is not scalable and harder to read when the labels are long.

## Related components

- If the user can select one or more options from a list, use [Checkbox](#/Components/Checkbox).
- If the list of options are large (more than five) and familiar to the user, use [Select](#/Components/Select).
