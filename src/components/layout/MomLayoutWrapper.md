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
      active: true
    },
    {
      name: 'MomHorizontalLine',
      link: '#/Components/Layout/MomHorizontalLine',
    },
  ]"
/>
```

## Examples

#### Default

`MomLayoutWrapper` wraps all its content to the max width of 1120px and sets the default padding for its content.

```jsx
<mom-layout-wrapper>
  <mom-card>
    <p class="mom-p">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat aperiam error itaque
      quia dicta iste amet distinctio quis, aut necessitatibus cupiditate ducimus officiis
      aspernatur, est impedit repellendus quam commodi ipsam et! Rerum quod ullam vero ad, nam animi
      vitae!
    </p>
  </mom-card>
</mom-layout-wrapper>
```
