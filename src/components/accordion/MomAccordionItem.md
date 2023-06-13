```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Accordion',
    },
    {
      name: 'MomAccordion',
      link: '#/Components/Accordion/MomAccordion',
    },
    {
      name: 'MomAccordionItem',
      link: '#/Components/Accordion/MomAccordionItem',
      active: true
    },
  ]"
/>
```

## Canvas

```jsx noeditor
<canvas-accordion />
```

## Examples

#### Default

```jsx
<mom-accordion>
  <mom-accordion-item title="Panel Title 1">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Accordion item status

```jsx
<mom-accordion>
  <mom-accordion-item title="Panel Title 1" status="complete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2" status="incomplete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3" status="none">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Accordion item with summary

```jsx
<mom-accordion>
  <mom-accordion-item title="Panel Title 1">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div slot="summary">Summary text</div>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div slot="summary">Summary text</div>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <div slot="summary">Summary text</div>
  </mom-accordion-item>
</mom-accordion>
```

#### Disabled accordion item

```jsx
<mom-accordion>
  <mom-accordion-item title="Panel Title 1">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2" disabled>
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```
