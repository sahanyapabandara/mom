```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Layout',
    },
    {
      name: 'MomLayoutWrapper',
      link: '#/Components/Layout/MomLayoutWrapper',
    },
    {
      name: 'MomHorizontalLine',
      link: '#/Components/Layout/MomHorizontalLine',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-horizontal-line />
```

## Examples

#### Default

```jsx
<mom-card>
  <mom-horizontal-line />
</mom-card>
```

#### Full width line

```jsx
<mom-card>
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>

  <mom-horizontal-line is-full-width />

  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>
</mom-card>
```

#### Last line in section

Last line in a section has bigger margin top

```jsx
<mom-card>
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>

  <mom-horizontal-line is-full-width is-last-line />

  <mom-button text="Continue" />
</mom-card>
```
