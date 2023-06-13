```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Date%20field',
    },
    {
      name: 'MomInputDate',
      link: '#/Components/Input%20component/Date%20field/MomInputDate',
      active: true
    },
    {
      name: 'MomInputDateMonth',
      link: '#/Components/Input%20component/Date%20field/MomInputDateMonth',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-input-date />
```

## Examples

#### Default

```jsx
<mom-input-date />
```

#### Date input with custom placeholder

```jsx
<mom-input-date placeholder="DD MMM YYYY" />
```

#### Date input with minDate or maxDate

```jsx
<div class="stack-y:24">
  <mom-input-date minDate="today" />

  <mom-input-date maxDate="today" />
</div>
```

#### Date input with input state

```jsx
<div class="stack-y:24">
  <mom-input-date input-state="disabled" />

  <mom-input-date input-state="error" />

  <mom-input-date input-state="warning" />
</div>
```
