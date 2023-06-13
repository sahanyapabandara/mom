```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Card',
    },
    {
      name: 'MomCard',
      link: '#/Components/Card/MomCard',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-card />
```

## Examples

#### Default

```jsx
<mom-card title="Card title" subtitle="Card subtitle">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-card>
```

#### Card with tooltip

```jsx
<div>
  <mom-card title="Card title" tooltip="Tooltip text (prop)">
    <p class="mom-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </mom-card>

  <mom-card title="Card title">
    <p class="mom-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <mom-tooltip slot="tooltip" icon-size="m" tooltip-text="Tooltip text (slot)" />
  </mom-card>
</div>
```

#### Action card

```jsx
<div>
  <mom-card title="Card title" variant="action">
    <p class="mom-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </mom-card>
  <mom-card title="Card title" variant="action" secondary-button-text="Cancel">
    <p class="mom-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </mom-card>
</div>
```

#### Summary card

```jsx
<mom-card title="Card title" variant="summary">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-card>
```

#### Summary card with action button

```jsx
<mom-card title="Card title" variant="summary-action">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-card>
```

#### Requirement card

```jsx
<mom-grid-container>
  <mom-grid-column size="6">
    <mom-card variant="requirement" title="Card title">
      <p class="mom-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </mom-card>
  </mom-grid-column>

  <mom-grid-column size="6">
    <mom-card variant="requirement" title="Card title" subtitle="Card subtitle">
      <p class="mom-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </mom-card>
  </mom-grid-column>
</mom-grid-container>
```
