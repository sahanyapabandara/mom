```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Icon',
      active: true
    },
    {
      name: 'MomIcon',
      link: '#/Components/Icon/MomIcon',
    },
  ]"
/>
```

<br/>

> Icons are symbols that represent an element. They should be simple, functional and distinct.

Icons should provide clarity and reduce cognitive load on users.

When adding new icons, consider how they relate to context, and ensure they are easily recognisable. Their size, colour and style also should correspond to the layout and should be visually cohesive.

Final icons **always include a padding**. This is to ensure they have equal dimensions. For example, a search icon can be 19x18, but its size after applying a padding is 24x24.

All icons currently use a 1.5px stroke, regardless of size.

## List of icons

Below is a non-exhaustive set of icons used in WINS.

### Navigation icons

```jsx noeditor
<mom-grid-container class="wrap:m">
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="home" class="m-r:8" />
      <p>home</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="log-out" class="m-r:8" />
      <p>log-out</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="profile" class="m-r:8" />
      <p>profile</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="globe" class="m-r:8" />
      <p>globe</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="close" class="m-r:8" />
      <p>close</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="arrow-up" class="m-r:8" />
      <p>arrow-up</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="arrow-down" class="m-r:8" />
      <p>arrow-down</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="arrow-left" class="m-r:8" />
      <p>arrow-left</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="arrow-right" class="m-r:8" />
      <p>arrow-right</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="chevron-up" class="m-r:8" />
      <p>chevron-up</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="chevron-down" class="m-r:8" />
      <p>chevron-down</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="chevron-left" class="m-r:8" />
      <p>chevron-left</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="chevron-right" class="m-r:8" />
      <p>chevron-right</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="chevron-first" class="m-r:8" />
      <p>chevron-first</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="chevron-last" class="m-r:8" />
      <p>chevron-last</p>
    </div>
  </mom-grid-column>
</mom-grid-container>
```

### Action icons

```jsx noeditor
<mom-grid-container class="wrap:m">
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="search" class="m-r:8" />
      <p>search</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="edit" class="m-r:8" />
      <p>edit</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="print" class="m-r:8" />
      <p>print</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="save" class="m-r:8" />
      <p>save</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="delete" class="m-r:8" />
      <p>delete</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="open-in-new" class="m-r:8" />
      <p>open-in-new</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="calendar" class="m-r:8" />
      <p>calendar</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="time" class="m-r:8" />
      <p>time</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="add" class="m-r:8" />
      <p>add</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="remove" class="m-r:8" />
      <p>remove</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="terminate" class="m-r:8" />
      <p>terminate</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="undo" class="m-r:8" />
      <p>undo</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="refresh" class="m-r:8" />
      <p>refresh</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="sort" class="m-r:8" />
      <p>sort</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="sort-up" class="m-r:8" />
      <p>sort-up</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="sort-down" class="m-r:8" />
      <p>sort-down</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="download" class="m-r:8" />
      <p>download</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="upload" class="m-r:8" />
      <p>upload</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="document-upload" class="m-r:8" />
      <p>document-upload</p>
    </div>
  </mom-grid-column>
</mom-grid-container>
```

### Selection control icons

```jsx noeditor
<mom-grid-container class="wrap:m">
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="checkbox" class="m-r:8" />
      <p>checkbox</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="checkbox-checked" class="m-r:8" />
      <p>checkbox-checked</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="radio-button" class="m-r:8" />
      <p>radio-button</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="radio-button-checked" class="m-r:8" />
      <p>radio-button-checked</p>
    </div>
  </mom-grid-column>
</mom-grid-container>
```

### Status icons

```jsx noeditor
<mom-grid-container class="wrap:m">
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="error" class="m-r:8" />
      <p>error</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="warning" class="m-r:8" />
      <p>warning</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="info" class="m-r:8" />
      <p>info</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="success" class="m-r:8" />
      <p>success</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="invalid" class="m-r:8" />
      <p>invalid</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="question" class="m-r:8" />
      <p>question</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="incomplete" class="m-r:8" />
      <p>incomplete</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="lightbulb" class="m-r:8" />
      <p>lightbulb</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="internet-lost" class="m-r:8" />
      <p>internet-lost</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="dot" class="m-r:8" />
      <p>dot</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="pending" class="m-r:8" />
      <p>pending</p>
    </div>
  </mom-grid-column>
</mom-grid-container>
```

### File type icons

```jsx noeditor
<mom-grid-container class="wrap:m">
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="pdf" class="m-r:8" />
      <p>pdf</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="docx" class="m-r:8" />
      <p>docx</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="xlsx" class="m-r:8" />
      <p>xlsx</p>
    </div>
  </mom-grid-column>
  <mom-grid-column size="12" size-sm="6" size-lg="4">
    <div class="d:f">
      <mom-icon icon="pptx" class="m-r:8" />
      <p>pptx</p>
    </div>
  </mom-grid-column>
</mom-grid-container>
```

## Sizes

Currently, icons can be scaled to **5 sizes**:

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
      <td class="rsg--td-30">
        Width: 20px
        <br />
        Height: 20px
      </td>
      <td class="rsg--td-30">
        <mom-icon icon="home" size="s" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">M</td>
      <td class="rsg--td-30">
        Width: 24px
        <br />
        Height: 24px
      </td>
      <td class="rsg--td-30">
        <mom-icon icon="home" size="m" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">L</td>
      <td class="rsg--td-30">
        Width: 28px
        <br />
        Height: 28px
      </td>
      <td class="rsg--td-30">
        <mom-icon icon="home" size="l" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">XL</td>
      <td class="rsg--td-30">
        Width: 32px (mobile) / 36px (tablet &amp; desktop)
        <br />
        Height: 32px (mobile) / 36px (tablet &amp; desktop)
      </td>
      <td class="rsg--td-30">
        <mom-icon icon="home" size="xl" />
      </td>
    </tr>
    <tr>
      <td class="rsg--td-30">2XL</td>
      <td class="rsg--td-30">
        Width: 36px (mobile) / 40px (tablet &amp; desktop)
        <br />
        Height: 36px (mobile) / 40px (tablet &amp; desktop)
      </td>
      <td class="rsg--td-30">
        <mom-icon icon="home" size="2xl" />
      </td>
    </tr>
  </tbody>
</table>
```

## When to use it

- To visually represent the task (e.g. edit).
- To add visual cues to the text (e.g. next, continue).
- To add visual interest.

## Design considerations

- Context is important when creating icons. Knowing where the icons would be placed, when and how the user would use it will determine its size and styles.
- Icons must be pixel perfect — they should always be aligned to a pixel grid.
- Use basic geometric shapes to design new icons.

### What to do when using icons

- Icons can be ambiguous to some users. Pair icons together with labels for those that are not universally understood.
- Icon design should be simple and minimal.

### What not to do when using icons

- Don't use more than one colour in an icon.
- Don't make a design overly complex.
