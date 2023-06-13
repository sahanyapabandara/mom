```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Upload',
    },
    {
      name: 'MomUpload',
      link: '#/Components/Upload/MomUpload',
      active: true
    },
    {
      name: 'MomUpload2',
      link: '#/Components/Upload/MomUpload2',
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-upload />
```

## Examples

#### Default

```jsx
<mom-upload url="https://httpbin.org/post" />
```

#### File upload with user defined text

```jsx
<mom-upload url="https://httpbin.org/post" main-text="Upload files." sub-text="Pdf only." />
```

#### File upload with input state

```jsx
<div>
  <mom-upload url="https://httpbin.org/post" input-state="disabled" />

  <mom-upload url="https://httpbin.org/post" input-state="error" />

  <mom-upload url="https://httpbin.org/post" input-state="warning" />
</div>
```

#### File upload with uploaded files list

```jsx
<mom-upload
  url="https://httpbin.org/post"
  :value="[
    {
      id: '1',
      name: 'Test File 1.jpg',
      progress: 100,
      size: 102400,
      type: 'image/jpeg',
      uploadCompleted: true
    },
    {
      id: '2',
      name: 'Test File 2.jpg',
      progress: 0,
      size: 51200,
      type: 'image/jpeg',
      uploadCompleted: false
    },
    {
      id: '3',
      name: 'Test File 3.jpg',
      progress: 50,
      size: 102400,
      type: 'image/jpeg',
      uploadCompleted: false
    }
  ]"
/>
```
