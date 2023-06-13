```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Image',
      active: true
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
    },
  ]"
/>
```

> Image helps to preview images in different modes.
>
> - Simple image
> - Image carousel
> - Image modal

## Examples

### Image

```jsx noeditor
<mom-image source="https://via.placeholder.com/600x600.png" />
```

### Image carousel

#### Default image carousel

```jsx noeditor
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

#### Image carousel with descriptions

```jsx noeditor
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

#### Image carousel with full width image and zoomable

```jsx noeditor
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
  zoomable
/>
```

### Image modal

#### Image modal with single image

```jsx noeditor
<mom-image-modal
  :images="[
    {
      url: 'https://via.placeholder.com/400x400.png',
      filename: 'filename 1.jpg',
    },
  ]"
/>
```

#### Image modal with multiple images

```jsx noeditor
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

## Spacing

### Default image carousel

<img src="./images/components/image/spacing_carousel@2x.png" alt="Image carousel spacing" style="width:611px;" />

### Image carousel with full width image

<img src="./images/components/image/spacing_carousel_full@2x.png" alt="Full width image carousel spacing" style="width:611px;" />

### Image carousel thumbnails

<img src="./images/components/image/spacing_thumbnails@2x.png" alt="Image carousel thumbnails spacing" style="width:611px;" />

## When to use it

<table>
  <tbody>
    <tr>
        <th>Image</th>
        <td>
            - `<mom-image>` is an image tag with authentication.
            - To show a single image.
        </td>
    </tr>
    <tr>
        <th>Image carousel with full width image and zoomable</th>
        <td>
            - Used together with the [Upload](#/Components/Upload) component in Personal particulars (Passport) and Education qualification form field section whereby the user might need to upload supporting documents (jpg or png).
            - The supporting documents contain information needed for form filling.
            - To show a preview of the uploaded documents near to the related form field.
            - To help the user to fill in or compare what was entered in the form fields by refering the uploaded images.
            - To allow the user to zoom in/out and pan the uploaded images.
        </td>
    </tr>
    <tr>
        <th>Image carousel with descriptions</th>
        <td>
            To add a short description about the image.
        </td>
    </tr>
    <tr>
        <th>Image modal</th>
        <td>Used in [Summary template](#/Templates/MomSummaryPage) to allow users to view what they have uploaded.
        </td>
    </tr>
  </tbody>
</table>

## Design considerations

- Try to use the same image dimension for all the images in the carousel.
- Always export images at twice the dimension and append the suffix "@2x" to cater for retina display. Eg: filename@2x.jpg

### Default image carousel

The width and height of the preview image is always limited to a container of **448px X 544px** unless specified.

### Image carousel with full width image

The width and height of the preview image is always limited to a container of **544px X 544px** unless specified.

## Related components

- [Upload](#/Components/Upload)
