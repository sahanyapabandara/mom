```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Select%20field',
      active: true
    },
    {
      name: 'MomInputSelect',
      link: '#/Components/Input%20component/Select%20field/MomInputSelect',
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

> Select lets the user choose one option from a list in a dropodown menu.

## Examples

### Select input

```jsx noeditor
<mom-form-group label="Label" id-for-input="select_input">
  <mom-input-select
    id-for-input="select_input"
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
      {
        label: 'Option four',
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
</mom-form-group>
```

### Autosuggest input

Autosuggest is a combination of text field and select. It uses search or keyword mapping to return a trimmed-down list of relevant items from a predefined list whenever a user types in the text field.

```jsx noeditor
<mom-form-group label="Label" id-for-input="autosuggest_input">
  <mom-input-autosuggest
    id-for-input="autosuggest_input"
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
      {
        label: 'Option four',
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
</mom-form-group>
```

### Autosuggest dynamic input

```jsx noeditor
<mom-form-group label="Label" id-for-input="autosuggestdynamic_input">
  <mom-input-autosuggest-dynamic
    id-for-input="autosuggestdynamic_input"
    endpoint="/data/sample-data-options.json"
  />
</mom-form-group>
```

### With option description

```jsx noeditor
<mom-form-group label="Label" id-for-input="description">
  <mom-input-select
    id-for-input="select_description"
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
    ]"
  />
</mom-form-group>
```

### With placeholder

```jsx noeditor
<mom-form-group label="Label" id-for-input="select_placeholder">
  <mom-input-select
   id-for-input="select_placeholder"
    placeholder="Select one option"
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
</mom-form-group>
```

### With disabled options

```jsx noeditor
<mom-form-group label="Label" id-for-input="select_disabledoptions">
  <mom-input-select
    id-for-input="select_disabledoptions"
    :options="[
      {
        label: 'Option one',
        value: '1',
      },
      {
        label: 'Option two',
        value: '2',
        disabled: true,
      },
      {
        label: 'Option three',
        value: '3',
      },
    ]"
  />
</mom-form-group>
```

### With free text input option

```jsx noeditor
<mom-form-group label="Label" id-for-input="autosuggest_freetext">
  <mom-input-autosuggest
    id-for-input="autosuggest_freetext"
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
    allow-free-text
  />
</mom-form-group>
```

## Sizes

### XS (64px)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### XS1 (96px)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### S (160px)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### M (320px)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### L (480px)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### XL (720px)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### Full (100%)

```jsx noeditor
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

## States

### Default

```jsx noeditor
<mom-input-select
  label="Label"
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

### Disabled

```jsx noeditor
<mom-input-select
  label="Label"
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
    {
      label: 'Option three',
      value: '3',
    },
  ]"
/>
```

### Selected

```jsx noeditor
<mom-input-select
  label="Label"
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
/>
```

## Validations

### Error

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is an error message"
  input-state="error"
  id-for-input="select_error"
>
  <mom-input-select
    id-for-input="select_error"
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
</mom-form-group>
```

### Warning

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is a warning message"
  input-state="warning"
  id-for-input="select_warning"
>
  <mom-input-select
    id-for-input="select_warning"
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
</mom-form-group>
```

## Spacing

### Select input

<img src="./images/components/input/select/spacing_select@2x.png" alt="Select field spacing" style="width: 527px;" />

### Autosuggest input

<img src="./images/components/input/select/spacing_autosuggest@2x.png" alt="Autosuggest field spacing" style="width: 527px;" />

### Dropdown

<img src="./images/components/input/select/spacing_dropdown@2x.png" alt="Dropdown spacing" style="width: 579px;" />
<img src="./images/components/input/select/spacing_dropdown_freetext@2x.png" alt="Free text spacing" style="width: 532px;" />

## When to use it

- When a user needs to choose from a predefined list of options – ideally, between 6 and 15.
- The options are **familiar** to users (e.g. choosing race, religion or marital status).
- The user **does not need to compare the options** before making a selection.
  Use inline select if using the default would clutter the screen.
  As a filter or navigation item, where choosing an option from the select menu results in an action.

<table>
    <tbody>
        <tr>
            <th>With option description</th>
            <td>When we need to provide the option with more context or description.</td>
        </tr>
        <tr>
            <th>With disabled options</th>
            <td>When we don't expect the user to select a particular or some options.</td>
        </tr>
        <tr>
            <th>Autosuggest & Dynamic autosuggest</th>
            <td>To allow the user to search instead of scrolling through a large list of options, making it easier and faster to select an option.</td>
        </tr>
        <tr>
            <th>Filter</th>
            <td>To sort or filter content on a screen.</td>
        </tr>
    </tbody>
</table>

## Design considerations

Although Select saves screen space, it hides the options and creates issues when users do not know what option values to expect.

## Related components

If the list of options are small (less than 5), you can consider using [Radio button](#/Components/Input%20component/Radio%20button).
