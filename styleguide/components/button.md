```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Button',
      active: true
    },
    {
      name: 'MomButton',
      link: '#/Components/Button/MomButton',
    },
  ]"
/>
```

> Buttons are used to trigger immediate actions with a single tap.

Buttons are meant to look striking on a page and draw users' attention. Button labels and their fill colour should follow level AA of WCAG guidelines and have sufficient contrasts.

## Anatomy

<img src="./images/components/button/anatomy@2x.png" alt="Button anatomy" style="width:199px;">

<br/>

1. **Button label** – Describes the action of the button. In WINS Design, buttons should be in sentence case.
2. **Icon** _(optional)_ – Icons are used to clarify the intended action.
3. **Container** – To wrap the button label.

## Examples

### Primary button

Primary buttons execute primary actions. These are usually Call-to-Actions to help users achieve their goal. Primary buttons have a solid colour for the background. They should be placed in prominent positions. For example, all primary buttons are aligned to the bottom left side in each section of a form. <br/>

```jsx noeditor
<mom-button text="Button text" variant="primary" />
```

#### Colours

- **Background** – Orange 30 (default), Orange 40 (hover)
- **Label** – Cool grey 100

#### Use cases

- Continue button (main CTA on a page)
- Submit button for a form

### Secondary button

Secondary buttons provide an alternative action for users and have a lower level of emphasis. They have an outline with no fill.

```jsx noeditor
<mom-button text="Button text" variant="secondary" />
```

#### Colours

- **Background** – White
- **Label** – Orange 90 (default), Orange 100 (hover/active)
- **Border** – Orange 90 (default), Orange 100 (hover/active)

#### Use cases:

- Save draft button

### Tertiary button (Link style)

```jsx noeditor
<mom-link text="Button text" type="button" />
```

#### Colours

- **Link** – Blue 80 (default), Blue 90 (active)

#### Use cases:

- Edit button, download button

## Sizes

There are 2 types of button sizes: Small and Medium.

### M (default)

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Button text" size="m" />
  <mom-button text="Button text" size="m" variant="secondary" />
</div>
```

#### Typography

- **Label** – Button-02

### S

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Button text" size="s" />
  <mom-button text="Button text" size="s" variant="secondary" />
</div>
```

#### Typography

- **Label** – Button-03

#### Use case

- Save draft button

## Icons

### Button with left icon

```jsx noeditor
<mom-button text="Download" icon="download" icon-position="left" />
```

### Button with right icon

```jsx noeditor
<mom-button text="Next" icon="arrow-right" icon-position="right" />
```

### Button with icon only

```jsx noeditor
<mom-button text="Search" icon="search" hide-text />
```

## Status

### Default

Indicates that the button is active.

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Text label" />
  <mom-button text="Text label" variant="secondary" />
</div>
```

### Disabled

Indicates the button cannot be interacted with.

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Text label" disabled />
  <mom-button text="Text label" variant="secondary" disabled />
</div>
```

### Success

To be used in a success banner.

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Text label" status="success" />
  <mom-button text="Text label" variant="secondary" status="success" />
</div>
```

### Error

To be used in a error banner.

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Text label" status="error" />
  <mom-button text="Text label" variant="secondary" status="error" />
</div>
```

### Warning

To be used in a warning banner.

```jsx noeditor
<div class="d:f stack-x:32">
  <mom-button text="Text label" status="warning" />
  <mom-button text="Text label" variant="secondary" status="warning" />
</div>
```

## Spacing

Note: Both primary and secondary buttons have a 1px border.

### Default button

<img src="./images/components/button/spacing@2x.png" alt="Button spacing" style="width:366px;" />

### Small button

<img src="./images/components/button/spacing_small@2x.png" alt="Small button spacing" style="width:284px;" />

### Button with icon

<img src="./images/components/button/spacing_icon@2x.png" alt="Button with icon spacing" style="width:400px;" />

## When to use it

- To trigger immediate actions such as "Submit application" or "Download pdf".
- To trigger counterproductive actions such as "Cancel" or "Back".
- To change what/how data is displayed such as "Load more", "Show all", "Clear filter".

<table>
  <tbody>
    <tr>
        <th>Primary button</th>
        <td>
          - To call attention to the strongest call to action on a page.
          - Keep in mind that not every screen needs a primary button.</td>
    </tr>
    <tr>
        <th>Secondary button</th>
        <td>- Use a secondary button if it performs a alternative action to the primary button.</td>
    </tr>
    <tr>
        <th>Tertiary button (Link style)</th>
        <td>
          - When using many buttons would clutter up the interface such as to show a cluster of 3 or more possible actions.
          - To lead the user to a related page</td>
    </tr>
    <tr>
        <th>Disabled button</th>
        <td>
          - Use for an action that is currently not available.
          - The surrounding interface should make it clear why the button is disabled, and what needs to be done to enable it.</td>
    </tr>
    <tr>
        <th>Button with left icon</th>
        <td>- To visually represent the task.</td>
    </tr>
    <tr>
        <th>Button with right icon</th>
        <td>- To add directional cues to the button label.</td>
    </tr>
    <tr>
        <th>Button with icon only</th>
        <td>- To save space and the icon is universally recognisable and there is no need for button label.</td>
    </tr>
  </tbody>
</table>

## Design considerations

- Buttons are multi-state components. Make sure that each button state is clearly distiguishable from one another. Keep in mind states can overlapt (eg. it could be active and hover at the same time).
- Keep in mind **hierarchy** when using buttons. Use a single primary button to indicate that it is high emphasis and a secondary button or links for less important navigational elements.
- If there are too many buttons in a section, it can cause too much clutter. Therefore, we can style button to look like a [Link](/#/Components/Link) if we do not want users to be distracted.

### What to do when using buttons

- Buttons should be clear and predictable — users should be able to anticipate what will happen when they click a button.
- Buttons should always lead with a strong verb that encourages action. To provide enough context to users, use the [verb]+[noun] format on buttons, except in the case of common actions such as Save, Close, Cancel, or OK.
- Buttons should be scannable — avoid unnecessary words and articles such as _the_, _an_, or _a_.

### What **not** to do when using buttons

- Do not capitalize button labels. This makes the label more readable.
- Don't use more than one primary button per screen or section (not including the application header or in a modal dialog).
- Don't put two icons in one button.
- Do not vertically stack buttons.

## Related components

To embed an action into a line of text, use the [Link](#/Components/Link) component.
