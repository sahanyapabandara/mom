```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Button',
    },
    {
      name: 'MomButton',
      link: '#/Components/Button/MomButton',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-button />
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-button text="Button text (prop)" />
  <br />
  <mom-button>Button text (slot)</mom-button>
</div>
```

#### Use as a link

`href` attribute is required when `MomButton` is used as a link

```jsx
<mom-button text="Link text" type="link" href="#" />
```

#### Button variant

```jsx
<div class="stack-y:24">
  <mom-button text="Button text" variant="primary" />
  <br />
  <mom-button text="Button text" variant="secondary" />
</div>
```

#### Button size

```jsx
<div class="stack-y:24">
  <mom-button text="Button text" size="m" />
  <br />
  <mom-button text="Button text" size="s" />
</div>
```

### Button status

```jsx
<div class="stack-y:24">
  <mom-button text="Button text" variant="primary" status="success" />
  <br />
  <mom-button text="Button text" variant="secondary" status="success" />
  <br />
  <mom-button text="Button text" variant="primary" status="error" />
  <br />
  <mom-button text="Button text" variant="secondary" status="error" />
  <br />
  <mom-button text="Button text" variant="primary" status="warning" />
  <br />
  <mom-button text="Button text" variant="secondary" status="warning" />
</div>
```

#### Button with icon

```jsx
<div class="stack-y:24">
  <mom-button text="Back" icon="chevron-left" icon-position="left" />
  <br />
  <mom-button text="Next" icon="chevron-right" icon-position="right" />
  <br />
  <mom-button text="Search" icon="search" hide-text />
  <br />
  <mom-button text="Back" icon="chevron-left" icon-position="left" size="s" />
  <br />
  <mom-button text="Next" icon="chevron-right" icon-position="right" size="s" />
  <br />
  <mom-button text="Search" icon="search" size="s" hide-text />
</div>
```

#### Disabled button

```jsx
<div class="stack-y:24">
  <mom-button text="Button text" variant="primary" disabled />
  <br />
  <mom-button text="Button text" variant="secondary" disabled />
</div>
```
