```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Alert',
    },
    {
      name: 'MomBanner',
      link: '#/Components/Alert/MomBanner',
      active: true
    },
    {
      name: 'MomNotification',
      link: '#/Components/Alert/MomNotification',
    },
    {
      name: 'MomDraftMessage',
      link: '#/Components/Alert/MomDraftMessage',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-banner />
```

## Examples

#### Default

```jsx
<mom-banner>
  <p class="mom-p">This is a default banner.</p>
</mom-banner>
```

#### Banner size

```jsx
<div>
  <mom-banner size="m">
    <p class="mom-p">This is a M size banner.</p>
  </mom-banner>

  <mom-banner size="l">
    <p class="mom-p">This is a L size banner.</p>
  </mom-banner>

  <mom-banner size="xl">
    <p class="mom-p">This is a XL size banner.</p>
  </mom-banner>

  <mom-banner size="full">
    <p class="mom-p">This is a full width banner.</p>
  </mom-banner>
</div>
```

#### Banner type

```jsx
<div>
  <mom-banner type="info">
    <p class="mom-p">This is an info banner.</p>
  </mom-banner>

  <mom-banner type="error">
    <p class="mom-p">This is an error banner.</p>
  </mom-banner>

  <mom-banner type="warning">
    <p class="mom-p">This is a warning banner.</p>
  </mom-banner>

  <mom-banner type="success">
    <p class="mom-p">This is a success banner.</p>
  </mom-banner>
</div>
```

#### Banner variant

```jsx
<mom-banner variant="page-banner" title="Page banner title" size="full">
  <p class="mom-p">This is a page banner.</p>
</mom-banner>
```
