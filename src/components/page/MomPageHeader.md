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
      active: true
    },
    {
      name: 'MomPageFooter',
      link: '#/Components/Page/MomPageFooter',
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
<mom-page-header title="Page title" />
```

#### Page header with breadcrumb

```jsx
<mom-page-header
  title="Page title"
  :breadcrumb="[
    {
      text: '<em>myMOM</em> Portal',
      href: 'javascript:void(0);',
    },
    {
      text: 'Quick Menu',
      href: 'javascript:void(0);',
    },
  ]"
/>
```

#### Page header with user info

```jsx
<mom-page-header
  title="Page title"
  user-name="User Name"
  company-name="Company name"
  branch-name="Branch name"
  company-uen="202001234A-01-001"
  allow-logout
/>
```

#### Page header with subtitle

```jsx
<mom-page-header title="Page title" subtitle="Page subtitle" />
```

#### Page header with save draft button

```jsx
<mom-page-header title="Page title" has-save-button last-saved-time="15 May 2021, 12:00pm" />
```

#### Page header with languages option

```jsx
<mom-page-header
  title="Page title"
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
