```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Text%20field',
      active: true
    },
    {
      name: 'MomInputText',
      link: '#/Components/Input%20component/Text%20field/MomInputText',
    },
    {
      name: 'MomInputNumber',
      link: '#/Components/Input%20component/Text%20field/MomInputNumber',
    },
    {
      name: 'MomInputEmail',
      link: '#/Components/Input%20component/Text%20field/MomInputEmail',
    },
    {
      name: 'MomInputPhone',
      link: '#/Components/Input%20component/Text%20field/MomInputPhone',
    },
    {
      name: 'MomInputNricFin',
      link: '#/Components/Input%20component/Text%20field/MomInputNricFin',
    },
    {
      name: 'MomInputWp',
      link: '#/Components/Input%20component/Text%20field/MomInputWp',
    },
  ]"
/>
```

> A text input allows users to enter or edit single line plain text within a defined area.

## Examples

### Default text field

```jsx noeditor
<mom-form-group label="Label" id-for-input="text_input">
  <mom-input-text id-for-input="text_input" />
</mom-form-group>
```

### With placeholder

```jsx noeditor
<mom-form-group label="Label" id-for-input="text_placeholder">
  <mom-input-text id-for-input="text_placeholder" placeholder="Placeholder" />
</mom-form-group>
```

### With prefix

```jsx noeditor
<mom-form-group label="Label" id-for-input="text_prefix">
  <mom-input-text id-for-input="text_prefix" prefix="SGD" size="s" />
</mom-form-group>
```

### With suffix

```jsx noeditor
<mom-form-group label="Label" id-for-input="text_suffix">
  <mom-input-text id-for-input="text_suffix" suffix="years" size="s" />
</mom-form-group>
```

## Sizes

#### XS (64px)

```jsx noeditor
<mom-input-text size="xs" />
```

#### XS1 (96px)

```jsx noeditor
<mom-input-text size="xs1" />
```

#### S (160px)

```jsx noeditor
<mom-input-text size="s" />
```

#### M (320px)

```jsx noeditor
<mom-input-text size="m" />
```

#### L (480px)

```jsx noeditor
<mom-input-text size="l" />
```

#### XL (720px)

```jsx noeditor
<mom-input-text size="xl" />
```

#### Full (100%)

```jsx noeditor
<mom-input-text size="full" />
```

## Patterns

### Alphanumeric

```jsx noeditor
<mom-form-group label="Alphanumeric" id-for-input="text_alphanumeric">
  <mom-input-text
    id-for-input="text_alphanumeric"
    pattern="alphanumeric"
    placeholder="Allow A-Z, a-z and 0-9 only"
  />
</mom-form-group>
```

### Alphabets

```jsx noeditor
<mom-form-group label="Alphabets" id-for-input="text_alphabets">
  <mom-input-text
    id-for-input="text_alphabets"
    pattern="alphabets"
    placeholder="Allow A-Z and a-z only"
  />
</mom-form-group>
```

### Digits

```jsx noeditor
<mom-form-group label="Digits" id-for-input="text_digits">
  <mom-input-text id-for-input="text_digits" pattern="digits" placeholder="Allow 0-9 only" />
</mom-form-group>
```

### Wpno

```jsx noeditor
<mom-form-group label="Work Permit Number" id-for-input="text_wpno">
  <mom-input-text
    id-for-input="text_wpno"
    pattern="wpno"
    maxlength="10"
    placeholder="Allow 0-9 and - only"
  />
</mom-form-group>
```

### Name

```jsx noeditor
<mom-form-group label="Name" id-for-input="text_name">
  <mom-input-text
    id-for-input="text_name"
    pattern="name"
    placeholder="Allow A-Z, a-z, @, (, ), -, /, ' only"
  />
</mom-form-group>
```

## Variants

### Number input

```jsx noeditor
<mom-form-group label="Number" id-for-input="text_number">
  <mom-input-number id-for-input="text_number" size="s" />
</mom-form-group>
```

### Email input

```jsx noeditor
<mom-form-group label="Email" id-for-input="text_email">
  <mom-input-email id-for-input="text_email" size="m" />
</mom-form-group>
```

### Phone number input

With prefix for context and restricted to 8 digit characters only.

```jsx noeditor
<mom-form-group label="Singapore mobile number" id-for-input="text_phone">
  <mom-input-phone id-for-input="text_phone" size="s" />
</mom-form-group>
```

### NRIC/FIN input

```jsx noeditor
<mom-form-group label="NRIC/FIN" id-for-input="text_nricfin">
  <mom-input-nric-fin id-for-input="text_nricfin" size="s" />
</mom-form-group>
```

### Work permit number input

```jsx noeditor
<mom-form-group label="Work permit number" id-for-input="text_wp">
  <mom-input-wp id-for-input="text_wp" size="s" />
</mom-form-group>
```

## States

### Default

```jsx noeditor
<mom-input-text />
```

### Disabled

```jsx noeditor
<mom-input-text input-state="disabled" />
```

## Validations

### Error

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is a error message"
  input-state="error"
  id-for-input="text_error"
>
  <mom-input-text id-for-input="text_error" input-state="error" />
</mom-form-group>
```

### Warning

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is a warning message"
  input-state="warning"
  id-for-input="text_warning"
>
  <mom-input-text id-for-input="text_warning" input-state="warning" />
</mom-form-group>
```

## Spacing

### Default

<img src="./images/components/input/text/spacing@2x.png" alt="Text field spacing" style="width: 527px;" />

### Prefix

<img src="./images/components/input/text/spacing_prefix@2x.png" alt="Prefix spacing" style="width: 480px;" />

### Suffix

<img src="./images/components/input/text/spacing_suffix@2x.png" alt="Suffix spacing" style="width: 480px;" />

## When to use it

<table>
  <tbody>
    <tr>
      <th>Default</th>
      <td>When the expected input is a single line of text, as opposed to a paragraph.</td>
    </tr>
    <tr>
      <th>With Placeholder text</th>
      <td>Unlike Hint text, it is used to add **short** guiding information or **an example** of what to enter that does not need to be persistent, such as *DD MMM YYYY* in Date input field or *Start typing to search…* in Autosuggest field.</td>
    </tr>
    <tr>
      <th>With Prefix</th>
      <td>To provide more context on what the form field is asking, such as "SGD" for salary field.</td>
    </tr>
    <tr>
      <th>Number input</th>
      <td>When the expected input is a number.</td>
    </tr>
    <tr>
      <th>Email input</th>
      <td>When the expected input is a standard email address.</td>
    </tr>
    <tr>
      <th>Phone input</th>
      <td>When the expected input is a Singapore phone number.</td>
    </tr>
  </tbody>
</table>

## Design considerations

### Field length

The length of a field provides a clue about the information that should be entered. It should reflect the length of the intended input.

That means a form can end up having many fields with different lengths which can look messy. To avoid this:

- Fields that don't expect information of a particular length can all be kept uniform.
- Avoid sizing the fields of only slightly different lengths. Use the **predefined sizes**.

### Required vs. optional indicators

Sometimes it’s important for a user to know if a field is required or optional.

- Don’t mix both required and optional labels in the same flow.
- **Call out the minority**, not the majority. For example, if there are 5 required and 1 optional field in a form, call out the optional one.
- In some cases, it isn’t necessary to call out either. For example, in a login form, it is self-explanatory that username and password fields are required, so we don’t need required indicators.

### Placeholder text & hint text

- Use placeholder text sparingly as it might mislead users to think the field is already filled in. **A blank input field** acts as a strong affordance to enter data. Users look to the unfilled boxes to determine what they need to act on.
- Hint text should be avoided unless absolutely necessary as the label should give a clear idea on what to enter. Repeated use of hint text will lead to too much clutter.

## Related components

[Form group](#/Components/Form)
