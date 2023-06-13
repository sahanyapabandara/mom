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
      active: true
    },
    {
      name: 'MomPageHeader',
      link: '#/Components/Page/MomPageHeader',
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
<mom-page>
  <mom-page-header
    slot="header"
    title="Page title"
    subtitle="Page subtitle"
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
    allow-logout
    user-name="User Name"
    company-name="Company name"
    branch-name="Branch name"
    company-uen="202001234A-01-001"
    has-save-button
    last-saved-time="15 May 2021, 12:00pm"
  />

  <mom-layout-wrapper>
    <mom-card>
      <p class="mom-p">Main Content</p>
    </mom-card>
  </mom-layout-wrapper>

  <mom-page-footer slot="footer" last-updated-date="01 Jan 2021" />
</mom-page>
```
