```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Grid%20System',
      active: true
    },
    {
      name: 'MomGridContainer',
      link: '#/Components/Grid%20System/MomGridContainer',
    },
    {
      name: 'MomGridColumn',
      link: '#/Components/Grid%20System/MomGridColumn',
    },
  ]"
/>
```

> Grids organize content in a uniformed and responsive way. They give designs visual hierarchy.

MOM Design System adopts a 12-column grid. This enables content to be divided into halves, thirds, fourths or sixths. Content is placed in evenly spaced vertical columns. Spatial rules on the grid creates a consistent look.

Using grids closely with the 8-pt spacing system will form aesthetically pleasing and clean layouts.

## Anatomy

<img src="./images/components/gridsystem/anatomy@2x.png" alt="Grids anatomy" style="width:1000px;" />

1. **Columns** – Columns are equal, vertical sections of a grid, determined by percentages. The more columns there are, the more flexible the content can adapt to different screen sizes. Columns displayed are determined by a breakpoint range.

2. **Gutters** – Gutters are the spaces between columns. There are fixed values of 0px(none), 8px(S), 16px(M),and 24px(L). Wider gutters are more suitable for larger containers to give more white space.

## Breakpoint

<table>
  <thead>
    <tr>
      <td></td>
      <th>Default <br/>(&lt;320px)</th>
      <th>Extra small <br/>(320px-519px)</th>
      <th>Small <br/>(520px-719px)</th>
      <th>Medium <br/>(720px-919px)</th>
      <th>Large <br/>(920px-1119px)</th>
      <th>Extra large <br/>(&gt;1120px)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <th>Prop name</th>
        <td>Size</td>
        <td>SizeXs</td>
        <td>SizeSm</td>
        <td>SizeMd</td>
        <td>SizeLg</td>
        <td>SizeXl</td>
    </tr>
  </tbody>
</table>

## Design considerations

### What to do when using grids

- Grids are:

  1. **Responsive** – They scale to accommodate different screen sizes. Use columns to build a fluid grid.

  2. **Consistent** – Adhere to the 12-column grid and gutter dimensions for a consistent user experience.

  3. **Simple** – Layouts should be simple and clean.

- Use whitespace effectively to create space and breathing room between elements. For example, using whitespace around a landing page can bring out a call-to-action. In comparison, too much whitespace would not be as suitable in a summary page.

- Consider your constraints. Once they have been established, there can be flexibility in creating pleasing designs.

### What **not** to do when using grids

- Don't make gutters too large, as there needs to be space for content. The width of a margin should not be equal or larger than the width of a column. Use the sizes defined above.

- Don't step outside the grid. This can break visual hierarchy and impair user experience.
