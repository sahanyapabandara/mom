```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Language',
    },
    {
      name: 'MomLanguage',
      link: '#/Components/Language/MomLanguage',
      active: true
    },
    {
      name: 'MomLanguageDropdown',
      link: '#/Components/Language/MomLanguageDropdown',
    },
    {
      name: 'MomLanguageSelector',
      link: '#/Components/Language/MomLanguageSelector',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-language />
```

## Examples

#### Default

```jsx
<mom-language
  :languages="[
    {
      text: 'English',
      code: 'en',
    },
    {
      text: 'Chinese',
      code: 'cn'
    },
    {
      text: 'Malay',
      code: 'my'
    },
    {
      text: 'Tamil',
      code: 'ta'
    }
  ]"
  current-language="en"
/>
```
