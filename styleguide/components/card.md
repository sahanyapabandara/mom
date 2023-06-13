```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Card',
      active: true
    },
    {
      name: 'MomCard',
      link: '#/Components/Card/MomCard',
    },
  ]"
/>
```

<br/>

> Cards are used to apply containers that hold related content together.

Card layouts can vary to support different contents. They should be easy to scan and interact with. Elements inside a card such as paragraphs, banners and buttons should clearly indicate hierarchy.

Cards use Shadow-s and have a border radius of 8px.

## Examples

### Default card

Cards can be used to display a paragraph of content. They can also include a title.

```jsx noeditor
<mom-card title="Card title">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-card>
```

#### Use cases

- Cards under an accordion to display related content

### Editable card (Summary card)

Cards can provide a summarised display of user entered data and an action button to modify that data.

```jsx noeditor
<mom-card variant="summary" title="Card title">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>
</mom-card>
```

#### Use cases

- Form summary pages

### Action card

Cards can include primary and secondary action button.

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

#### Use cases

- Card with input components and continue button

### Requirement card

To draw attention to a requirement, a coloured background on the title can be used. The card subtitle provides more context to the title.

```jsx noeditor
<mom-card variant="requirement" title="Card title" subtitle="Card subtitle" class="wrap:s">
  <p class="mom-p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </p>
</mom-card>
```

#### Colours

- **Title background** – Primary blue 00

#### Use cases

- Transaction landing page cards.

## Spacing

### Default card

<img src="./images/components/card/spacing@2x.png" alt="Card spacing" style="width:1144px;" />

### Editable card (Summary card)

<img src="./images/components/card/spacing_summary@2x.png" alt="Summary card spacing" style="width:1144px;" />

### Action card

<img src="./images/components/card/spacing_action@2x.png" alt="Action card spacing" style="width:1144px;" />

### Requirement card

<img src="./images/components/card/spacing_requirement@2x.png" alt="Requirement card spacing" style="width:834px;" />

## When to use cards

- To display bite-sized information positioned in a hierarchical way
- To contain all related information and elements
- To display summaries

## When not to use cards

- If users need to compare information
- If information is brief and repetitive, descriptive lists are better than cards
- If the order of the elements/data inside is emphasized (use a table instead)

## Design considerations

- Content should be simple, scannable and contained.
- Use a shadow to indicate a card.
- Each card should only relate to 1 topic.
- If there are multiple cards on a page, organise them such that the most important one is most prominent.
