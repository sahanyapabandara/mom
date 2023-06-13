> Guidelines for Designers and Business Analysts.

## Overview

The MOM Design System empowers teams to create accessible and consistent digital products, with a unified set of UI components and patterns. As the tech space advances, **the government must match increasing user expectations to deliver high-quality experiences.**

This design system is an **evolving internal resource.** It’s also more than just static rules; it adapts to the changing needs of users, providing scalable solutions for yet unknown use cases.

## Design Principles

When making design decisions, these are the core principles to keep in mind.

```jsx noeditor
<mom-grid-container class="wrap:m">
  <mom-grid-column size="12" size-md="6">
    <mom-card title="Clarity" variant="requirement">
      <img class="m-x:a m-b:24" src="./images/introduction/search@2x.png" style="width:48px; height: 48px;">
      <p class="mom-p">Eliminate ambiguity by designing products that are easy to understand and navigate. </p>
    </mom-card>
  </mom-grid-column>
  <mom-grid-column size="12" size-md="6">
    <mom-card title="Efficiency" variant="requirement">
      <img class="m-x:a m-b:24" src="./images/introduction/efficiency@2x.png" style="width:48px; height: 48px;">
      <p class="mom-p">Optimise workflows to deliver high quality experiences. Anticipate the needs of end users for them work better and faster.</p>
    </mom-card>
  </mom-grid-column>
  <mom-grid-column size="12" size-md="6">
    <mom-card title="Consistency" variant="requirement">
      <img class="m-x:a m-b:24" src="./images/introduction/equal@2x.png" style="width:48px; height: 48px;">
      <p class="mom-p">Use standard elements to achieve consistent branding and strengthen users' intuition when interacting with MOM products.</p>
    </mom-card>
  </mom-grid-column>
  <mom-grid-column size="12" size-md="6">
    <mom-card title="Inclusivity" variant="requirement">
      <img class="m-x:a m-b:24" src="./images/introduction/braille@2x.png" style="width:48px; height: 48px;">
      <p class="mom-p">Designing for inclusivity means designing for the majority. We make sure no one gets left behind.</p>
    </mom-card>
  </mom-grid-column>
</mom-grid-container>
```

## Getting started with Figma

Figma is our primary design tool. It enables designers to not only design but prototype and handoff to developers seamlessly. It is highly recommended for designers and BAs to <a href="https://www.figma.com/best-practices/" target="_blank">get familiarized with Figma</a>.

What sets Figma apart from Sketch is, among others, real-time collaboration. Its powerful features also allow designers to spend less time pushing pixels and more time for UX problem-solving.

To get started, read below to find out commonly used Figma functions. Then, watch and follow along the 'Figma sharing session' video found in the Figma design folder and experiment using <a href="https://www.figma.com/file/lbjJ8wjbWCSnzZYiA7GYNW/Figma-Sharing-Session?node-id=397%3A50"  target="_blank">this file</a>.

### 1. Components and instances

A Component defines the properties of any element such as buttons or icons and can be reused across designs. They are the equivalent of Symbols in Sketch. The shortcut for a Component is **Cmd + Alt + K**.

An Instance is a copy of the Component. They are linked to the main Component and receive any updates made to that Component.

When you make changes directly to an Instance, it will only reflect on that particular Instance. This is called an **override**. You can also detach Instances from the Component. In this way, changes you make to the Component won't be shown on Instances.

<img src="./images/introduction/components_instances.gif" style="width:700px;">

### 2. Styles

Styles allow you to define the color, text and any effects (eg. shadows or border radius) applied to elements.

Whenever there is a change to a style, all other elements with that style will be updated. You can apply a style to an element from the right panel (see below). When designing new screens, use colour, typography and shadow styles from the Design Libraries. Read more on Design Libraries in 'How to use the Figma Design Library'.

<img src="./images/introduction/styles@2x.png" style="width:700px;">

### 3. Frames and autolayout

We use Autolayout to create dynamic Frames that respond to their content. It's like the 'div' element in code.

The shortcut to create a Frame without autolayout is **Opt + Cmn + G**. The shortcut to create a Frame with autolayout (vertical and horizontal padding of 10px) is **Shift + A**.

There are many ways you can use autolayout:

- Create buttons that grow or shrink as you edit the text within it
- Rapidly build lists that adapt to new items added
- Combine frames with autolayout to build complete interfaces

Frames with autolayout can have their own padding, fill, stroke and border radius, so you can create components without adding additional layers.

<img src="./images/introduction/autolayout_demo.gif" style="width:700px;">

## How to use the Figma Design Library

Always refer to this documentation and the **Figma Design Libraries**, which is a collection of reusable foundations, styles, components and patterns. Think of the design library as a master folder — a source of truth — where members can easily access and sync updates made to it.

We have separate Design Libraries for FDW, WINS 2A (intranet) and 2B (internet).

### Reuse Assets found in your corresponding Design Library

1.When creating a new file, **use components and patterns from the relevant design system as much as possible.** In your separate design file, go to Assets in the left panel > Team Library icon > Turn the toggle on for the correct Design Library.

<img src="./images/introduction/libraries@2x.png" style="width: 700px;">
<br/>

2.Search for your component in the left panel and drag it to your file. When you do this, the component will become an instance.

<img src="./images/introduction/search_component.gif" style="width:700px;">
<br/>

3.Customise the instance according to your needs.

<img src="./images/introduction/customise_instance.gif" style="width:700px;">
