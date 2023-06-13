```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Textarea',
    },
    {
      name: 'MomInputTextarea',
      link: '#/Components/Input%20component/Textarea/MomInputTextarea',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-input-textarea />
```

## Examples

#### Default textarea

```jsx
<mom-input-textarea />
```

#### Textarea with placeholder

```jsx
<mom-input-textarea placeholder="Placeholder" />
```

#### Textarea with input state

```jsx
<div class="stack-y:24">
  <mom-input-textarea input-state="disabled" />

  <mom-input-textarea input-state="error" />

  <mom-input-textarea input-state="warning" />
</div>
```

#### Textarea with max characters

```jsx
<mom-input-textarea maxlength="50" />
```

#### Textarea with resize disabled

```jsx
<mom-input-textarea :resize="false" />
```
