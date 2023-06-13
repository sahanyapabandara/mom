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
      active: true,
    },
    {
      name: 'MomDraftMessage',
      link: '#/Components/Alert/MomDraftMessage',
    },
  ]"
/>
```

## Canvas

Notification appear on the top middle of the screen, and usually has a time out of 10 seconds.

```jsx noeditor
<canvas-notification />
```

## Examples

#### Default

```jsx
<mom-notification timeout="0">
  <p class="mom-p">This is a notification.</p>
</mom-notification>
```

#### Notification size

```jsx
<div class="stack-y:24">
  <mom-notification size="m" timeout="0">
    <p class="mom-p">This is a M size notification.</p>
  </mom-notification>
  <mom-notification size="l" timeout="0">
    <p class="mom-p">This is a L size notification.</p>
  </mom-notification>
</div>
```

#### Notification type

```jsx
<div class="stack-y:24">
  <mom-notification type="info" timeout="0">
    <p class="mom-p">This is an info notification.</p>
  </mom-notification>
  <mom-notification type="error" timeout="0">
    <p class="mom-p">This is an error notification.</p>
  </mom-notification>
  <mom-notification type="warning" timeout="0">
    <p class="mom-p">This is a warning notification.</p>
  </mom-notification>
  <mom-notification type="success" timeout="0">
    <p class="mom-p">This is a success notification.</p>
  </mom-notification>
  <mom-notification type="internet-lost" timeout="0">
    <p class="mom-p">This is an internet-lost notification.</p>
  </mom-notification>
</div>
```
