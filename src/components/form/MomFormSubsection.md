```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Form',
    },
    {
      name: 'MomFormGroup',
      link: '#/Components/Form/MomFormGroup',
    },
    {
      name: 'MomFormLabel',
      link: '#/Components/Form/MomFormLabel',
    },
    {
      name: 'MomFormSubsection',
      link: '#/Components/Form/MomFormSubsection',
      active: true
    },
    {
      name: 'MomFormFlexWrapper',
      link: '#/Components/Form/MomFormFlexWrapper',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-form-group />
```

## Examples

#### Default

```jsx
<mom-form-subsection>
  <mom-form-group label="Label" id-for-input="subsection">
    <mom-input-text id-for-input="subsection" />
  </mom-form-group>
</mom-form-subsection>
```
