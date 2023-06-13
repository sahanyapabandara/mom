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
      active: true
    },
    {
      name: 'MomAccordionItem',
      link: '#/Components/Accordion/MomAccordionItem',
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
  <mom-accordion-item title="Panel Title 1" status="complete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2" status="incomplete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 4" status="none">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Card style accordion

```jsx
<mom-accordion variant="card">
  <mom-accordion-item title="Panel Title 1" status="complete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2" status="incomplete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 4" status="none">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Accordion with default opened item

By default, the first accordion item is opened. Set `openChildIndex` to change the default open item.

```jsx
<mom-accordion open-child-index="1">
  <mom-accordion-item title="Panel Title 1" status="complete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2" status="incomplete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 4" status="none">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```

#### Disabled accordion

```jsx
<mom-accordion disabled>
  <mom-accordion-item title="Panel Title 1" status="complete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 2" status="incomplete">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 3">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
  <mom-accordion-item title="Panel Title 4" status="none">
    <p class="mom-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </mom-accordion-item>
</mom-accordion>
```
