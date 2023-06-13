```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Textarea',
      active: true
    },
    {
      name: 'MomInputTextarea',
      link: '#/Components/Input%20component/Textarea/MomInputTextarea',
    },
  ]"
/>
```

> A text area allows user to enter or edit multi-line long plain text within a defined area.

## Examples

### Default textarea

```jsx noeditor
<mom-form-group label="Label" id-for-input="textarea_demo">
  <mom-input-textarea id-for-input="textarea_demo" />
</mom-form-group>
```

### Textarea with characters count

```jsx noeditor
<mom-form-group label="Label" id-for-input="characters">
  <mom-input-textarea id-for-input="characters" maxlength="500" />
</mom-form-group>
```

## States

### Default

```jsx noeditor
<div class="wrap:m">
  <mom-input-textarea />
</div>
```

### Disabled

```jsx noeditor
<div class="wrap:m">
  <mom-input-textarea input-state="disabled" />
</div>
```

## Validations

### Error

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is an error message"
  input-state="error"
  id-for-input="textarea_error"
>
  <mom-input-textarea id-for-input="textarea_error" input-state="error" />
</mom-form-group>
```

### Warning

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is a warning message"
  input-state="warning"
  id-for-input="textarea_warning"
>
  <mom-input-textarea id-for-input="textarea_warning" input-state="warning" />
</mom-form-group>
```

## Spacing

### Default

<img src="./images/components/input/textarea/spacing@2x.png" alt="Textarea spacing" style="width: 766px;" />

### Characters count

<img src="./images/components/input/textarea/spacing_characters@2x.png" alt="Characters count spacing" style="width: 732px;" />

## When to use it

When the expected input is more than a sentence.

## Design considerations

Include the character count as a visual display to help users gauge how long their entry can be.

## Related components

If the user can only key in a single line of text, use [text field](#/Components/Input%20component/Text%20field).
