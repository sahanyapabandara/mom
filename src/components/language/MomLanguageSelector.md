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
    },
    {
      name: 'MomLanguageDropdown',
      link: '#/Components/Language/MomLanguageDropdown',
    },
    {
      name: 'MomLanguageSelector',
      link: '#/Components/Language/MomLanguageSelector',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-language-selector />
```

## Examples

#### Default

```jsx
<mom-language-selector
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

/>
```
