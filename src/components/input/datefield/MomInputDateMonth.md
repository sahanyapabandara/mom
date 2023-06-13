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
    },
    {
      name: 'MomInputDateMonth',
      link: '#/Components/Input%20component/Date%20field/MomInputDateMonth',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-input-date-month />
```

## Examples

#### Default

```jsx
<mom-input-date-month />
```

#### Date month input with custom placeholder

```jsx
<mom-input-date-month placeholder="MMM YYYY" />
```

#### Date month input with minDate and maxDate

```jsx
<div class="stack-y:24">
  <mom-input-date-month minDate="today" />

  <mom-input-date-month maxDate="today" />
</div>
```

#### Date month input with input state

```jsx
<div class="stack-y:24">
  <mom-input-date-month input-state="disabled" />

  <mom-input-date-month input-state="error" />

  <mom-input-date-month input-state="warning" />
</div>
```
