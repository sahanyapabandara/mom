```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Layout',
      active: true
    },
    {
      name: 'MomLayoutWrapper',
      link: '#/Components/Layout/MomLayoutWrapper',
    },
    {
      name: 'MomHorizontalLine',
      link: '#/Components/Layout/MomHorizontalLine',
    },
  ]"
/>
```

> A divider is a thin line that creates visual separation for groups of content in lists and layouts.

## Examples

### Default divider

Middle dividers are centered in the middle of the layout, and are best used for separating sets of related content, such as tables or subsections.

```jsx noeditor
<mom-page-header
  title="Page title"
  subtitle="Page subtitle"
  user-name="User Name"
  company-name="Company Name"
  branch-name="Branch name"
  company-uen="199000123R-01-001"
  has-save-button
  last-saved-time="15 Aug 2019, 12:00pm"
/>
```

### Full-width divider

Full-width dividers span the entire length of the layout, providing more visual emphasis. They are used to create separate content areas or sections.

```jsx noeditor
<mom-card variant="action" title="Card title">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-card>
```

## Design considerations

Use dividers only when necessary. They break up content well, but also take up valuable screen space.

- Heavy use of dividers can also lead to visual noise, and can make the interface feel cluttered.
- Where possible, try to divide by elements and spacing, instead of resorting to using too many dividers.
- Less lines and dividers will always give the interface a cleaner, modern and more functional feel.

When creating lists without an anchoring element (e.g. icons or images), dividers should be used.

- Spacing in this case may not be enough to group and separate content, so dividers are necessary for greater visual clarity.
