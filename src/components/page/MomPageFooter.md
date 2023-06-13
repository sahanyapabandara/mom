```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Page',
    },
    {
      name: 'MomPage',
      link: '#/Components/Page/MomPage',
    },
    {
      name: 'MomPageHeader',
      link: '#/Components/Page/MomPageHeader',
    },
    {
      name: 'MomPageFooter',
      link: '#/Components/Page/MomPageFooter',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-page />
```

## Examples

#### Default

```jsx
<mom-page-footer />
```

#### Page footer with last updated date

```jsx
<mom-page-footer last-updated-date="01 Jan 2021" />
```
