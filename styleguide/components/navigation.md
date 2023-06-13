```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Navigation',
      active: true
    },
    {
      name: 'MomBreadcrumb',
      link: '#/Components/Navigation/MomBreadcrumb',
    },
    {
      name: 'MomStepIndicator',
      link: '#/Components/Navigation/MomStepIndicator',
    },
    {
      name: 'MomPagination',
      link: '#/Components/Navigation/MomPagination',
    },
  ]"
/>
```

> There are 3 types of navigation components.
>
> - Breadcrumb
> - Step indicator
> - Pagination

## Examples

### Breadcrumb

The breadcrumb is a secondary navigation pattern that shows a user's location on a page within a website.

```jsx noeditor
<mom-breadcrumb
  :links="[
    {
      text: 'Dashboard',
      href: '#'
    },
    {
      text: 'Navigation',
      href: '#'
    }
  ]"
/>
```

### Step indicator

Step indicator is a visual representation of a user's progress through a set of steps.

```jsx noeditor
<mom-step-indicator
  current-step="2"
  :steps="[
    {
      label: 'Step one',
      action: null
    },
    {
      label: 'Step two',
      action: null
    },
    {
      label: 'Step three',
    },
    {
      label: 'Step four',
    },
  ]"
/>
```

### Pagination

Pagination is a group of button-like styled links that are arranged as a horizontal list.

```jsx noeditor
<mom-pagination total-items="100" items-per-page="10" />
```

## Spacing

### Breadcrumb

<img src="./images/components/navigation/spacing_breadcrumb@2x.png" alt="Breadcrumb spacing" style="width:215px;" />

### Step indicator

<img src="./images/components/navigation/spacing_stepindicator@2x.png" alt="Step indicator spacing" style="width:657px;" />

### Pagination

<img src="./images/components/navigation/spacing_pagination@2x.png" alt="Pagination spacing" style="width:425px;" />

### Pagination buttons

<img src="./images/components/navigation/spacing_pagination_buttons@2x.png" alt="Pagination buttons spacing" style="width:376px;" />

## When to use it

<table>
  <tbody>
    <tr>
      <th>Breadcrumb</th>
      <td>
        - To show the page’s hierarchy and show the user where they are within that heirarchy.
        - Enable users to move quickly up to a parent level or previous step.
      </td>
    </tr>
    <tr>
      <th>Step indicator</th>
      <td>To guide the user through a number of steps sequentially in order to complete a form.</td>
    </tr>
    <tr>
      <th>Pagination</th>
      <td>To split up content or data into several pages, with a control for navigating to the next or previous page.</td>
    </tr>
  </tbody>
</table>

## Design considerations

<table>
  <tbody>
    <tr>
      <th>Breadcrumb</th>
      <td>Do not display the current page title in the breadcrumb as it is repetitive.</td>
    </tr>
    <tr>
      <th>Step indicator</th>
      <td>
        - Display the steps in order from left to right.
        - Keep the user informed of where they currently are within the process.
        - Avoid having more than one Step indicator on the same page.
        - Ideally, keep the steps short (3 - 5 steps).
      </td>
    </tr>
    <tr>
      <th>Pagination</th>
      <td>How much data to display will vary depending on the content</td>
    </tr>
  </tbody>
</table>
