```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Image',
    },
    {
      name: 'MomImage',
      link: '#/Components/Image/MomImage',
    },
    {
      name: 'MomImageCarousel',
      link: '#/Components/Image/MomImageCarousel',
    },
    {
      name: 'MomImageModal',
      link: '#/Components/Image/MomImageModal',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-image-modal />
```

## Examples

#### Default

```jsx
<mom-image-modal
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
      filename: 'filename 1.jpg',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
      filename: 'filename 2.jpg',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
      filename: 'filename 3.jpg',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
      filename: 'filename 4.jpg',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
      filename: 'filename 5.jpg',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
      filename: 'filename 6.jpg',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
      filename: 'filename 7.jpg',
    },
  ]"
/>
```

#### Single image

```jsx
<mom-image-modal
  :images="[
    {
      url: 'https://via.placeholder.com/400x400.png',
      filename: 'filename 1.jpg',
    },
  ]"
/>
```
