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
    },
    {
      name: 'MomFormFlexWrapper',
      link: '#/Components/Form/MomFormFlexWrapper',
      active: true
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
<mom-form-flex-wrapper>
  <mom-form-group label="Label" size="s" id-for-input="flexwrapper1">
    <mom-input-text id-for-input="flexwrapper1" />
  </mom-form-group>

  <mom-form-group label="Label" size="s" id-for-input="flexwrapper2">
    <mom-input-text id-for-input="flexwrapper2" />
  </mom-form-group>
</mom-form-flex-wrapper>
```
