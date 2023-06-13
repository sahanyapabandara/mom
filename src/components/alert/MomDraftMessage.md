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
    },
    {
      name: 'MomNotification',
      link: '#/Components/Alert/MomNotification',
    },
    {
      name: 'MomDraftMessage',
      link: '#/Components/Alert/MomDraftMessage',
      active: true,
    },
  ]"
/>
```

## Canvas

Draft message appear on the left bottom of the screen, and usually has a time out of 10 seconds.

```jsx noeditor
<canvas-draft-message />
```

## Examples

#### Default

```jsx
<mom-draft-message timeout="0">
  <p class="mom-p">This is a draft message.</p>
</mom-draft-message>
```

#### Notification type

```jsx
<div class="stack-y:24">
  <mom-draft-message type="delete" timeout="0">
    <p class="mom-p">This is a delete draft message.</p>
  </mom-draft-message>
  <mom-draft-message type="undo" timeout="0">
    <p class="mom-p">This is an undo draft message.</p>
  </mom-draft-message>
</div>
```
