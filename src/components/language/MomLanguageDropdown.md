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
      active: true
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
<canvas-language-dropdown />
```

## Examples

#### Default

```jsx
<mom-language-dropdown
  :languages="[
    {
      text: 'English',
      code: 'en',
    },
    {
      text: 'Chinese',
      code: 'cn',
    },
    {
      text: 'Malay',
      code: 'my',
    },
    {
      text: 'Tamil',
      code: 'ta',
    }
  ]"
  current-language="en"
/>
```
