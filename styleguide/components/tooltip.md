```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Tooltip',
      active: true
    },
    {
      name: 'MomTooltip',
      link: '#/Components/Tooltip/MomTooltip',
    },
  ]"
/>
```

> Tooltip displays more information, help or a definition when the user hovers over the information icon.

Since the additional information is hidden, it should be brief, contextual and useful. The use of interactive elements, such as buttons or links, is discouraged. Tooltip content should be kept to 1-3 lines.

## Anatomy

<img src="./images/components/tooltip/anatomy@2x.png" alt="Tooltip anatomy" style="width:396px;">

<br/>

1. **Trigger element** – Usually tooltip icon/trigger text. Tooltip container will be displayed when this is hovered on.
2. **Tooltip container** – Tooltip container that hovers above page level elements. They use Shadow-m.
3. **Tooltip content** – Brief additional message/explanation.

## Examples

Tooltip containers have a fixed width of 360px, text exceeding that will flow to the next line.

<img src="./images/components/tooltip/tooltip@2x.png" alt="Default tooltip" style="width:396px;">

#### Colours

- **Background** – Cool grey 70
- **Text** – White
- **Icon** – Blue 60

#### Typography

- **Text** – Body-03

## Icon size

### S size icon (default)

```jsx noeditor
<mom-tooltip tooltip-text="Tooltip content" icon-size="s" />
```

#### Use cases

- Form label
- Description list

### M size icon

```jsx noeditor
<mom-tooltip tooltip-text="Tooltip content" icon-size="m" />
```

#### Use cases

- Card title

## Tooltip content position

The default placement of the tooltip container is above the tooltip icon/trigger element, this is to avoid the tooltip popout from blocking the content below.

However, the tooltip container may be position below tooltip icon/trigger element if the spacing above is not sufficient to contain the whole tooltip.

### Top

<img src="./images/components/tooltip/tooltip_top@2x.png" alt="Tooltip with content above" style="width:396px;">

### Bottom

<img src="./images/components/tooltip/tooltip_bottom@2x.png" alt="Tooltip with content below" style="width:396px;">

## Spacing

<img src="./images/components/tooltip/spacing@2x.png" alt="Tooltip spacing" style="width:398px;">

## When to use it

Use tooltips to identify or add a small amount of explanation to an element. Typically, tooltips are used to:

- Help users understand the meaning or purpose of icons that are not universally understood.
- Show the full version of truncated text.
- Display the alt text for an image.

## When not to use it

- When you need to add more than a single line of extra information, consider using inline dialogs instead.
- There should be max amt characters. If more room or interactive elements are needed, consider using modal instead.
- Don't use tooltips for information that is essential to complete a task.

## Design considerations

- Write in short and simple language, but be complete with sufficient examples to facilitate understanding.
- Some users rely on keyboards to navigate. Support both mouse and keyboard triggers, for inclusive and accessible design.
- Be consistent when using tooltips. Pair them with visual cues, such as an information icon.
