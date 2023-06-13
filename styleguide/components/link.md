```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Link',
      active: true
    },
    {
      name: 'MomLink',
      link: '#/Components/Link/MomLink',
    },
  ]"
/>
```

> Links are used as a navigational element to both internal and external pages.

Links can also be used for low emphasis call to actions. They can be used on their own or inline with text. Link text should be consistent with the title of the intended destination. Default links use Blue 80 to stand out from body text.

## Examples

### Default Link

```jsx noeditor
<mom-link text="Link text" />
```

#### Colours

- **Link** – Blue 80 (default), Blue 90 (active), Purple 90 (visited)

### Button styled Link

```jsx noeditor
<mom-button text="Link text" type="link" />
```

#### Colours

- **Background** – Orange 30 (default), Orange 40 (hover)
- **Label** – Cool grey 100

## Sizes

### M (16px, default)

```jsx noeditor
<mom-link text="Link text" size="m" />
```

#### Typography

- **Link** – Body-02

### S (14px)

```jsx noeditor
<mom-link text="Link text" size="s" />
```

#### Typography

- **Link** – Body-03

### L (20px)

```jsx noeditor
<mom-link text="Link text" size="l" />
```

#### Typography

- **Link** – heading-03

### Link with icon

When pairing link text with icon, the size of icon for:

- size M link (16px) = size M icon (24px)
- size S link (14px) = size S icon (20px)
- size L link (20px) = size L icon (28px)

#### Link with left icon

```jsx noeditor
<mom-link text="Edit" icon="edit" />
```

```jsx noeditor
<mom-link text="Save draft" icon="save" />
```

#### Link with right icon

```jsx noeditor
<mom-link text="Self Assessment Tool (SAT)" icon="open-in-new" icon-position="right" />
```

```jsx noeditor
<mom-link text="Next" icon="chevron-right" icon-position="right" />
```

#### Link with icon only

```jsx noeditor
<mom-link text="Home" icon="home" hide-text />
```

## States

### Default

```jsx noeditor
<mom-link text="Link text" />
```

### Dark mode

To be used to display a link in a dark background.

```jsx noeditor
<div class="bgc:black">
  <mom-link text="Link text" dark-mode />
</div>
```

#### Colours

- **Link** – Blue 20 (default), Blue 10 (active), Purple 40 (visited)

### Disabled

Indicates the link cannot be interacted with, use Grey 50.

```jsx noeditor
<mom-link text="Link text" disabled />
```

```jsx noeditor
<div class="bgc:black">
  <mom-link text="Link text" dark-mode disabled />
</div>
```

## Spacing

### M size link

<img src="./images/components/link/spacing@2x.png" alt="M size link" style="width:270px;">

### S size link

<img src="./images/components/link/spacing_small@2x.png" alt="S size link" style="width:244px;">

### L size link

<img src="./images/components/link/spacing_large@2x.png" alt="L size link" style="width:322px;">

## When to use it

- To bring user to another page within or out of the website. Use buttons instead for high emphasis CTAs or with actions that will change data.
- Jump to an element in the same page.
- Email addresses.
- Uploaded files.

## Design considerations

- When hovering above a link, cursor changes to pointer.
- Open a link in a new tab if it is opening a document or going to an external site.
- Include the new tab icon at the end of the link if the page navigates to a non-MOM site.
- Use links sparingly as too many might clutter the page.
- If the action is a primary or secondary one, or if it commits a change to data, use a button instead.
- Avoid the term “click here,” other links to “here,” or the web address itself. Instead, use a meaningful descriptive label for the link, and match the destination site name.
- Keep link phrases short, 3-5 words.
- Visited link is indicated with a different colour `#663399` (Purple 90), to remind users of the pages that they have visited. Primary navigation links in the header and footer are excluded from this.

## Related components

[Button](#/Components/Button)
