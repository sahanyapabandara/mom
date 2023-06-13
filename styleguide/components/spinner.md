```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Spinner',
      active: true
    },
    {
      name: 'MomSpinner',
      link: '#/Components/Spinner/MomSpinner',
    },
    {
      name: 'MomOverlaySpinner',
      link: '#/Components/Spinner/MomOverlaySpinner',
    },
  ]"
/>
```

> Spinner is a type of progress indicator in a circular form that informs the user that some activity is happening and the waiting time is unknown.

## Examples

### Default spinner

```jsx noeditor
<mom-spinner />
```

### Overlay spinner

```jsx noeditor
<div style="background-color:rgba(0,0,0,0.8); height: 400px;" class="d:f ai:c jc:c">
  <mom-spinner size="l" />
</div>
```

## Sizes

```jsx noeditor
<table class="rsg--table-28">
  <thead class="rsg--thead-29">
    <tr>
      <th class="rsg--th-31 rsg--td-30">Value</th>
      <th class="rsg--th-31 rsg--td-30">Size</th>
      <th class="rsg--th-31 rsg--td-30">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="rsg--td-30">S</td>
      <td class="rsg--td-30">20px</td>
      <td class="rsg--td-30">
        <mom-spinner size="s" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">M</td>
      <td class="rsg--td-30">24px</td>
      <td class="rsg--td-30">
        <mom-spinner size="m" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">L</td>
      <td class="rsg--td-30">28px</td>
      <td class="rsg--td-30">
        <mom-spinner size="l" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">XL</td>
      <td class="rsg--td-30">32px (mobile) / 36px (tablet &amp; desktop)</td>
      <td class="rsg--td-30">
        <mom-spinner size="xl" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">2XL</td>
      <td class="rsg--td-30">36px (mobile) / 40px (tablet &amp; desktop)</td>
      <td class="rsg--td-30">
        <mom-spinner size="2xl" />
      </td>
    </tr>
  </tbody>
</table>
```

## When to use it

When it is anticipated that an unquantifiable activity is happening, such as waiting for a screen to load its content or retrieving data from server.

<table>
  <tbody>
    <tr>
        <th>Default</th>
        <td>When placed above or below existing content, it draws attention to where new content will appear.</td>
    </tr>
    <tr>
        <th>Overlay spinner</th>
        <td>The spinner is centered on the screen and it indicates the initial loading of screen content.</td>
    </tr>
  </tbody>
</table>

## Design considerations

Hide the spinner once the activity is completed.
