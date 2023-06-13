```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Link',
    },
    {
      name: 'MomLink',
      link: '#/Components/Link/MomLink',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-link />
```

## Examples

#### Default

```jsx
<div class="stack-y:24">
  <mom-link href="javascript:void(0);" text="Link text (prop)" />
  <br />
  <mom-link href="javascript:void(0);">Link text (slot)</mom-link>
</div>
```

#### Use as a button

Set `type` to `button` to use the component as a button.

```jsx
<mom-link text="Button text" type="button" />
```

#### Link size

```jsx
<div class="stack-y:24">
  <mom-link text="Link text" size="m" />
  <br />
  <mom-link text="Link text" size="s" />
  <br />
  <mom-link text="Link text" size="l" />
</div>
```

#### Link with icon

```jsx
<div class="stack-y:24">
  <mom-link text="Back" icon="chevron-left" icon-position="left" />
  <br />
  <mom-link text="Next" icon="chevron-right" icon-position="right" />
  <br />
  <mom-link text="Search" icon="search" hide-text />
  <br />
  <mom-link text="Back" icon="chevron-left" icon-position="left" size="s" />
  <br />
  <mom-link text="Next" icon="chevron-right" icon-position="right" size="s" />
  <br />
  <mom-link text="Search" icon="search" hide-text size="s" />
</div>
```

#### Disabled link

```jsx
<mom-link text="Link text" disabled />
```

#### Dark mode link

```jsx
<div class="c:white bgc:black stack-y:24">
  <mom-link text="Link text" dark-mode />
  <br />
  <mom-link text="Link text" dark-mode disabled />
</div>
```

#### Underline link

```jsx
<div class="stack-y:24">
  <mom-link text="Link text" underline />
  <br />
  <mom-link text="Link text" underline disabled />
</div>
```

#### Underline dark mode link

```jsx
<div class="c:white bgc:black stack-y:24">
  <mom-link text="Link text" underline dark-mode />
  <br />
  <mom-link text="Link text" underline dark-mode disabled />
</div>
```
