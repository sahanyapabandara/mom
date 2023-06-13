```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Upload',
      active: true
    },
    {
      name: 'MomUpload',
      link: '#/Components/Upload/MomUpload',
    },
    {
      name: 'MomUpload2',
      link: '#/Components/Upload/MomUpload2',
    },
  ]"
/>
```

> Upload allows the user to select and upload files for submission.

## Examples

### Default uploader

```jsx noeditor
<mom-form-group label="Upload file">
  <mom-upload url="https://httpbin.org/post" />
</mom-form-group>
```

### Uploader with file list

```jsx noeditor
<mom-form-group label="Upload file">
  <mom-upload
    url="https://httpbin.org/post"
    :value="[
      {
        id: '1',
        name: 'file_1.jpg',
        progress: 100,
        size: 102400,
        type: 'image/jpeg',
        uploadCompleted: true
      },
      {
        id: '2',
        name: 'file_2.jpg',
        progress: 100,
        size: 153600,
        type: 'image/jpeg',
        uploadCompleted: true
      },
      {
        id: '3',
        name: 'file_3.jpg',
        progress: 50,
        size: 153600,
        type: 'image/jpeg',
        uploadCompleted: false
      },
    ]"
  />
</mom-form-group>
```

## States

### Disabled

```jsx noeditor
<mom-form-group label="Upload file">
  <mom-upload url="https://httpbin.org/post" input-state="disabled" />
</mom-form-group>
```

## Validations

### Error

```jsx noeditor
<mom-form-group label="Upload file" message-text="This is a error message" input-state="error">
  <mom-upload url="https://httpbin.org/post" input-state="error" />
</mom-form-group>
```

### Warning

```jsx noeditor
<mom-form-group label="Upload file" message-text="This is a warning message" input-state="warning">
  <mom-upload url="https://httpbin.org/post" input-state="warning" />
</mom-form-group>
```

## Spacing

### Uploader

<img src="./images/components/upload/spacing@2x.png" alt="File upload spacing" style="width:500px;">

### Dropzone

<img src="./images/components/upload/spacing_dropzone@2x.png" alt="Dropzone spacing" style="width:518px;">

### File list

<img src="./images/components/upload/spacing_filelist@2x.png" alt="File list spacing" style="width:518px;">

## When to use it

When we need the user to upload files.

<table>
  <tbody>
    <tr>
        <th>Upload with image preview</th>
        <td>To help the user to fill in or check what was entered in the form fields with the Image preview on the right</td>
    </tr>
  </tbody>
</table>

## Related components

[Image carousel with full width image](#/Components/Image)
