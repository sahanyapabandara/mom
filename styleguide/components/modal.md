```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Modal',
      active: true
    },
    {
      name: 'MomModal',
      link: '#/Components/Modal/MomModal',
    },
  ]"
/>
```

> A modal is a persistent card that displays messages and a call-to-action in a layer above the page. Since a modal stop users from continuing, these messages are usually more important than the ones we display in page-level warnings or alerts.

## Examples

### Default modal

```jsx noeditor
<mom-modal toggle-type="button" toggle-text="Show modal" title="Modal title">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-modal>
```

### Modal with link type button

```jsx noeditor
<mom-modal toggle-type="link" toggle-text="Show modal" title="Modal title">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-modal>
```

### Modal with footer (to include actions)

```jsx noeditor
<mom-modal toggle-type="button" toggle-text="Show modal" title="Modal title">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>
  <mom-form-group label="Label" size="m">
    <mom-input-text size="m" />
  </mom-form-group>
  <div slot="footer">
    <mom-button text="Submit" />
  </div>
</mom-modal>
```

## Sizes

By default, the maximum width of a modal is 600px.

### Modal with no max width

```jsx noeditor
<mom-modal toggle-type="button" toggle-text="Show modal" title="Modal title" max-width="none">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-modal>
```

### Modal with no max width (Image carousel with bullet thumbnails and descriptions)

```jsx noeditor
<mom-modal toggle-type="button" toggle-text="Show modal" max-width="none">
  <div class="m-x:20 tablet(m-x:12) m-b:24">
    <h3 class="mom-h3">Modal title</h3>
    <p class="mom-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
  <div class="nm-x:24 tablet(nm-x:32)">
    <mom-image-carousel
      thumbnail-type="bullet"
      width="808"
      height="400"
      :images="[
        {
          url: 'https://via.placeholder.com/720x400.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          url: 'https://via.placeholder.com/720x400.png',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ]"
    />
  </div>
</mom-modal>
```

## Spacing

<img src="./images/components/modal/spacing_modal@2x.png" alt="Modal spacing" style="width:660px;">

<img src="./images/components/modal/spacing_modal_footer@2x.png" alt="Modal with footer spacing" style="width:660px;">

## When to use it

- To introduce users to how things work, especially for first-time use.
- When we want the user to focus on a message or content.
- When we need the user's confirmation to proceed with an action after the user has initiated it.
- When we need the user to perform more task without making the user lose context of the current page and jumping pages back and forth.

## Design considerations

- Because a modal interrupts the experience and requires a click to dismiss, it’s important for users to feel that the intrusion is warranted.
- Content behind a modal should not be scrollable or clickable.
- Modals should have a title, content and optionally a button or link.
- Modals always have an equal amount of space at the top and bottom.
- Modals grow according to how much content is within, but once the modal reaches full height of the browser, the content area will begin to scroll.
