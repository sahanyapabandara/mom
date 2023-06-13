```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Accordion',
      active: true
    },
    {
      name: 'MomAccordion',
      link: '#/Components/Accordion/MomAccordion',
    },
    {
      name: 'MomAccordionItem',
      link: '#/Components/Accordion/MomAccordionItem',
    },
  ]"
/>
```

> Accordion are vertically stacked sections that can be opened or closed.

They comprise of a section of content, with a header that users can toggle to expand or collapse sections. Only one section can be opened at one time. By default, the first section is always opened.

## Anatomy

<img src="./images/components/accordion/anatomy@2x.png" alt="Accordion anatomy" style="width:1159px;" />

<br/>

1. **Header** – Contains section title, which should be brief to summarise the section content.
2. **Status icon** – Indicates whether a section has been completed or not. There are 3 types of status icons, incomplete, complete and none.
3. **Content** – Content that corresponds to header. Subheadings may be used to break down sections further.
4. **Button** – Primary CTA button.

## Examples

### Default accordion

```jsx noeditor
<mom-accordion>
  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Colours

- **Header background** – Blue 05 (opened), Blue 00 (closed)
- **Title** – Blue 80 (opened), Blue 70 (closed)

#### Typography

- **Title** – Heading-03 <br/>
  **Font size** – 20px (L) <br/>
  **Line height** – 28px (L) <br/>
  **Font weight** – 600 SemiBold

#### Use cases

- To section off a form.

### Card style accordion

```jsx noeditor
<mom-accordion variant="card">
  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

### Accordion with summary

Allows user to edit summary contents.

```jsx noeditor
<mom-accordion>
  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
    <p slot="summary" class="mom-p">
      Summary
    </p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
    <p slot="summary" class="mom-p">
      Summary
    </p>
  </mom-accordion-item>
</mom-accordion>
```

## Status

### Incomplete

```jsx noeditor
<mom-accordion>
  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Colours

- **Status icon** – Blue 50 (opened), Cool grey 20 (closed)

### Complete

```jsx noeditor
<mom-accordion>
  <mom-accordion-item title="Accordion heading" status="complete">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading" status="complete">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Colours

- **Status icon** – Green 70

### No status

```jsx noeditor
<mom-accordion>
  <mom-accordion-item title="Accordion heading" status="none">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading" status="none">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

## States

### Default

```jsx noeditor
<mom-accordion>
  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

### Disabled

```jsx noeditor
<mom-accordion disabled>
  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>

  <mom-accordion-item title="Accordion heading">
    <p class="mom-p">Content</p>
  </mom-accordion-item>
</mom-accordion>
```

## Spacing

<img src="./images/components/accordion//spacing@2x.png" alt="Accordion spacing" style="width:1170px;" />

## When to use accordions

- To break up long or complex, non-sequential forms into sections. The user benefits from having the full context of the form, instead of a multi-page form like a wizard.
- To allow the user to fill in information throughout the form in any order, instead of linearly, affording greater flexibility.
  Users require an overview of specific content that’s related to one another.

## When **not** to use them

- When there is essential or urgent information. Accordions hide content, and there may be users who may miss them or not understand how accordions work.

- Accordions increases the cognitive load for users, as decisions have to be made when clicking on the headers. Users may also ignore important information if it is hidden in an accordion.

## Design considerations

- When one accordion is open, all other remaining accordion should be closed.
- If users need to see all information in a single page, you can consider reducing your content, splitting them into smaller sections, or use well-formatted text (e.g. headers, summary, contents, section).
