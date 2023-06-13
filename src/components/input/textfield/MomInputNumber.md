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
    },
    {
      name: 'MomInputNumber',
      link: '#/Components/Input%20component/Text%20field/MomInputNumber',
      active: true
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
<canvas-input-number />
```

## Examples

#### Default

```jsx
<mom-input-number />
```

#### Number input with max input value

```jsx
<mom-input-number max="1000" />
```

#### Number input with non allow zero

```jsx
<mom-input-number :allow-zero="false" />
```
