> Typography sets the tone for MOM products and services. It creates visual hierarchy, important in guiding users through information and creating interactivity.

## Typeface

We use Open Sans as our main typeface. It is versatile, with a diverse range of styles and weights. It also enhances code readability. Open Sans brings out the professional tone of MOM and builds trust with users.

We use the following styles:

- Open Sans Light
- Open Sans Light Italic
- Open Sans Regular
- Open Sans Regular Italic
- Open Sans Semi-bold
- Open Sans Semi-bold Italic
- Open Sans Bold
- Open Sans Bold Italic

<a href="https://fonts.google.com/specimen/Open+Sans" target="_blank">Download "Open Sans"</a>

## Font size

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Font size</th>
      <th>CSS class name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2XL</td>
      <td>
        Mobile: 28px<br/>
        Tablet & desktop: 36px
      </td>
      <td>
        <code>.fz:2xl</code><br/>
        <code>.fz:2xl-tablet</code>
      </td>
    </tr>
    <tr>
      <td>XL</td>
      <td>
        Mobile: 24px<br/>
        Tablet & desktop: 28px
      </td>
      <td>
        <code>.fz:xl</code><br/>
        <code>.fz:xl-tablet</code>
      </td>
    </tr>
    <tr>
      <td>L</td>
      <td>20px</td>
      <td><code>.fz:l</code></td>
    </tr>
    <tr>
      <td>M</td>
      <td>16px</td>
      <td><code>.fz:m</code></td>
    </tr>
    <tr>
      <td>S</td>
      <td>14px</td>
      <td><code>.fz:s</code></td>
    </tr>
    <tr>
      <td>XS</td>
      <td>12px</td>
      <td><code>.fz:xs</code></td>
    </tr>
  </tbody>
</table>

## Line height

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Line height</th>
      <th>CSS class name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2XL</td>
      <td>
        Mobile: 36px<br/>
        Tablet & desktop: 40px
      </td>
      <td>
        <code>.lh:2xl</code><br/>
        <code>.lh:2xl-tablet</code>
      </td>
    </tr>
    <tr>
      <td>XL</td>
      <td>
        Mobile: 32px<br/>
        Tablet & desktop: 36px
      </td>
      <td>
        <code>.lh:xl</code><br/>
        <code>.lh:xl-tablet</code>
      </td>
    </tr>
    <tr>
      <td>L</td>
      <td>28px</td>
      <td><code>.lh:l</code></td>
    </tr>
    <tr>
      <td>M</td>
      <td>24px</td>
      <td><code>.lh:m</code></td>
    </tr>
    <tr>
      <td>S</td>
      <td>20px</td>
      <td><code>.lh:s</code></td>
    </tr>
    <tr>
      <td>XS</td>
      <td>16px</td>
      <td><code>.lh:xs</code></td>
    </tr>
  </tbody>
</table>

## Font weight

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Font weight</th>
      <th>CSS class name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Light</td>
      <td>300</td>
      <td><code>.fw:light</code></td>
    </tr>
    <tr>
      <td>Regular</td>
      <td>400</td>
      <td><code>.fw:regular</code></td>
    </tr>
    <tr>
      <td>Semi bold</td>
      <td>600</td>
      <td><code>.fw:semibold</code></td>
    </tr>
    <tr>
      <td>Bold</td>
      <td>700</td>
      <td><code>.fw:bold</code></td>
    </tr>
  </tbody>
</table>

## Text styles

### Headings

Headings are used as titles of each major section of a page. Headings should **clearly describe the section of interface** they refer to, to help users quickly know what content or information they will see.

There are 4 heading styles to cater to various use cases, from page headings to section titles. Use styles that are logical and clearly show hierarchy.

<table>
  <thead>
    <tr>
      <th>Heading style</th>
      <th>Styles</th>
      <th>CSS class name</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Heading-01</td>
      <td>
        Font size: 2XL<br/>
        Line height: 2XL<br/>
        Font weight: 600 Semibold<br/>
        Letter spacing: -0.5px<br/>
        Colour: Cool Grey 80<br/>
        Margin bottom: 16px
      </td>
      <td><code>.mom-h1</code></td>
      <td><span class="mom-h1">The quick brown fox jumps<br/> over the lazy dog</span></td>
    </tr>
    <tr>
      <td>Heading-02</td>
      <td>
        Font size: XL<br/>
        Line height: XL<br/>
        Font weight: 600 Semibold<br/>
        Letter spacing: -0.5px<br/>
        Margin bottom: 16px
      </td>
      <td><code>.mom-h2</code></td>
      <td><span class="mom-h2">The quick brown fox jumps<br/>over the lazy dog</span></td>
    </tr>
    <tr>
      <td>Heading-03</td>
      <td>
        Font size: L<br/>
        Line height: L<br/>
        Font weight: 600 Semibold<br/>
        Margin bottom: 16px
      </td>
      <td><code>.mom-h3</code></td>
      <td><span class="mom-h3">The quick brown fox jumps<br/> over the lazy dog</span></td>
    </tr>
    <tr>
      <td>Heading-04</td>
      <td>
        Font size: M<br/>
        Line height: M<br/>
        Font weight: 600 Semibold<br/>
        Margin bottom: 16px
      </td>
      <td><code>.mom-h4</code></td>
      <td><span class="mom-h4">The quick brown fox jumps<br/> over the lazy dog</span></td>
    </tr>
  </tbody>
</table>

### Body texts

Body texts are used for descriptions and forms the main text in the interface. In content-heavy sections, break up information into paragraphs or use bullet points for easy reading. There are 2 body text styles:

- **Body-2** – For standard body text and input fields
- **Body-3** – For label, timestamps and copyright disclaimers.

<table>
  <thead>
    <tr>
      <th>Body text</th>
      <th>Styles</th>
      <th>CSS class name</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body-02</td>
      <td>
        Font size: M<br/>
        Line height: M<br/>
        Font weight: 400 Regular<br/>
        Margin bottom: 24px
      </td>
      <td><code>.mom-p</code></td>
      <td><span class="mom-p">The quick brown fox jumps<br/> over the lazy dog</span></td>
    </tr>
    <tr>
      <td>Body-03</td>
      <td>
        Font size: S<br/>
        Line height: S<br/>
        Font weight: 400 Regular<br/>
        Margin bottom: 24px
      </td>
      <td><code>.mom-p-s</code></td>
      <td><span class="mom-p-s">The quick brown fox jumps<br/> over the lazy dog</span></td>
    </tr>
  </tbody>
</table>

### Button texts

Button texts describe the action that can be performed. Labels should be as brief as possible and be used in sentence case. There are 2 types of button text styles:

- **Button-02** – For main call-to-actions on a page, such as Continue and Submit buttons
- **Button-03** – For Save draft buttons

<table>
  <thead>
    <tr>
      <th>Button text</th>
      <th>Styles</th>
      <th>CSS class name</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Button-02</td>
      <td>
        Font size: M<br/>
        Line height: M<br/>
        Font weight: 600 Semibold<br/>
      </td>
      <td><code>.mom-button</code></td>
      <td><span class="mom-button">Button text</span></td>
    </tr>
    <tr>
      <td>Button-03</td>
      <td>
        Font size: S<br/>
        Line height: S<br/>
        Font weight: 600 Semibold<br/>
      </td>
      <td><code>.mom-button-s</code></td>
      <td><span class="mom-button-s">Button text</span></td>
    </tr>
  </tbody>
</table>

## List styles

Lists are used for vertical groupings of text. They start with either a number or a bullet. Lists are used to categorise simpler pieces of information. Use a table for more complex data.

Information should be organised sequentially, through the **ordered list styles**. Information which does not need to be organised in this way should fall under the **unordered list styles**.

Similar to body text, lists have a default margin bottom of 24px. Body texts that are directly before a list will have a margin bottom of 4px instead.

### Unordered lists

The default for unordered list is the dot/disc style.

#### Dot/disc

Class: <code>.mom-ul</code>, <code>.mom-ul-disc</code>

```jsx noeditor
<ul class="mom-ul">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ul>
```

Class: <code>.mom-ul-s</code>, <code>.mom-ul-s-disc</code>

```jsx noeditor
<ul class="mom-ul-s">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ul>
```

#### Circle

Class: <code>.mom-ul-circle</code>

```jsx noeditor
<ul class="mom-ul-circle">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ul>
```

Class: <code>.mom-ul-s-circle</code>

```jsx noeditor
<ul class="mom-ul-s-circle">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ul>
```

#### Square

Class: <code>.mom-ul-square</code>

```jsx noeditor
<ul class="mom-ul-square">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ul>
```

Class: <code>.mom-ul-s-square</code>

```jsx noeditor
<ul class="mom-ul-s-square">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ul>
```

### Ordered lists

The alpha style is the default for ordered lists.

#### Alphabet

Class: <code>.mom-ol</code>, <code>.mom-ol-alpha</code>

```jsx noeditor
<ol class="mom-ol">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ol>
```

Class: <code>.mom-ol-s</code>, <code>.mom-ol-s-alpha</code>

```jsx noeditor
<ol class="mom-ol-s">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ol>
```

#### Decimal

Class: <code>.mom-ol-decimal</code>

```jsx noeditor
<ol class="mom-ol-decimal">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ol>
```

Class: <code>.mom-ol-s-decimal</code>

```jsx noeditor
<ol class="mom-ol-s-decimal">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ol>
```

#### Roman numeral

Class: <code>.mom-ol-roman</code>

```jsx noeditor
<ol class="mom-ol-roman">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ol>
```

Class: <code>.mom-ol-s-roman</code>

```jsx noeditor
<ol class="mom-ol-s-roman">
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
  <li>The quick brown fox jumps over the lazy dog</li>
</ol>
```

## Design considerations

- **Line length:**
  Wide lines of text are difficult to read, and make it harder for people to focus. We implement 4 recommended line lengths (see below).

  <img src="./images/styles/line_length@2x.jpg" style="width:700px;">
  <br/>

  While there is no right way to measure the perfect width for text, a good goal is to aim for between 60 and 100 characters per line, including spacing. Setting an optimal line length will break up content into easily digestible chunks.

  All text styles (headings, body texts, lists) are limited to a maximum width of 720px, and the remaining texts will be overflow into next line.

- **Letter spacing:**
  Letter spacings are all set to 0px, except for Heading 1 and Heading 2 which are both set to -0.5px.

- **Hierarchy through typography:**
  It is important to communicate visual hierarchy. Essential information should be placed prominently followed by less important information.

- **Ensure consistency:**
  Use typography from the Design System Library as much as possible. This allows for quick scanning of pages and creates a smoother reading experience.
