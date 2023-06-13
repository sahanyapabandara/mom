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
      active: true
    },
    {
      name: 'MomImageModal',
      link: '#/Components/Image/MomImageModal',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-image-carousel />
```

## Examples

#### Default

```jsx
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
    },
  ]"
/>
```

#### Image carousel with custom width and height

```jsx
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
    },
  ]"
  width="400"
  height="400"
/>
```

#### Image carousel with full width image

```jsx
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
    },
  ]"
  image-size="full"
/>
```

#### Image carousel with bullet thumbnails

```jsx
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
    },
  ]"
  thumbnail-type="bullet"
/>
```

#### Image carousel with no thumbnails

```jsx
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
    },
  ]"
  thumbnail-type="none"
/>
```

#### Image carousel with descriptions

```js
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
      description: 'Image 200 x 200',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
      description: 'Image 200 x 400',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
      description: 'Image 400 x 400',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
      description: 'Image 600 x 400',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
      description: 'Image 600 x 600',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
      description: 'Image 800 x 900',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
      description: 'Image 700 x 200',
    },
  ]"
/>
```

#### Zoomable image carousel

```jsx
<mom-image-carousel
  :images="[
    {
      url: 'https://via.placeholder.com/200x200.png',
    },
    {
      url: 'https://via.placeholder.com/200x400.png',
    },
    {
      url: 'https://via.placeholder.com/400x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x400.png',
    },
    {
      url: 'https://via.placeholder.com/600x600.png',
    },
    {
      url: 'https://via.placeholder.com/800x900.png',
    },
    {
      url: 'https://via.placeholder.com/700x200.png',
    },
  ]"
  zoomable
/>
```
