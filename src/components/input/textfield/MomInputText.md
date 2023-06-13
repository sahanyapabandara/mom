```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Text%20field',
    },
    {
      name: 'MomInputText',
      link: '#/Components/Input%20component/Text%20field/MomInputText',
      active: true
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

## Canvas

```jsx noeditor
<canvas-input-text />
```

## Examples

#### Default

```jsx
<mom-input-text />
```

#### Password input field

```jsx
<mom-input-text is-password />
```

#### Text input size

```jsx
<div class="stack-y:24">
  <mom-input-text size="xs" />

  <mom-input-text size="xs1" />

  <mom-input-text size="s" />

  <mom-input-text size="m" />

  <mom-input-text size="l" />

  <mom-input-text size="xl" />

  <mom-input-text size="full" />
</div>
```

#### Text input with placeholder

```jsx
<mom-input-text placeholder="Placeholder" />
```

#### Text input with prefix and suffix

```jsx
<div class="stack-y:24">
  <mom-input-text prefix="SGD" />

  <mom-input-text suffix="years" />
</div>
```

#### Text input with input state

```jsx
<div class="stack-y:24">
  <mom-input-text input-state="disabled" />

  <mom-input-text input-state="error" />

  <mom-input-text input-state="warning" />
</div>
```

#### Text input with loading state

```jsx
<mom-input-text is-loading />
```

#### Text input with maxlength

```jsx
<mom-input-text maxlength="50" />
```

#### Centered-aligned text input

```jsx
<mom-input-text text-alignment="center" />
```

#### Uppercase text input

```jsx
<mom-input-text text-transform="uppercase" />
```

#### Lowercase text input

```jsx
<mom-input-text text-transform="lowercase" />
```
