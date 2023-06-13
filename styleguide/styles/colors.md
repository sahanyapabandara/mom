> Colours are used to distinguish the MOM brand, create consistent experiences and aid users in completing tasks.

## Colour palette

### Brand colours

```jsx noeditor
<div class="d:f">
  <div style="background-color: #006EAB; width: 120px; height: 120px;" class="m-r:24" />
  <div style="background-color: #E57200; width: 120px; height: 120px;" />
</div>
```

### Primary colours

Primary colours are derived from MOM's brand colours. They help to strengthen the organisation's core values, which include being Progressive, Warm, Professional and People-centred.

- **Primary blue** – Blue is used for certain components, such as accordions and neutral alert banners. Blue 80 is used for links. Blue 50 is used for active radio button states. Blue 40 is used for selected dates in date pickers as well as selected numbers under pagination.

```jsx noeditor
<colors category="primary" />
```

<br/>

- **Cool grey** – Cool grey is mostly used for font colours. Cool grey 100 is the default colors for text unless specified otherwise. Refer to the Typography section for more details.

```jsx noeditor
<colors category="secondary" />
```

### Support colours

These colors are used for feedback messages or statuses.

- **Green** – Represents a positive response to a completed action eg. success. Green 70 is used for success states.

```jsx noeditor
<colors category="support_green" />
```

<br/>

- **Red** – Alerts the user to major errors, damaging actions or potential destruction eg. failed to upload document. Red 70 and Red 80 are used for error state colours.

```jsx noeditor
<colors category="support_red" />
```

<br/>

- **Orange** – Used to call attention to important information that does not prevent further action. Orange 30 is used for primary CTA buttons. Orange 90 is used for secondary CTA buttons. Orange 70 and Orange 80 is used for warning state colours.

```jsx noeditor
<colors category="support_orange" />
```

<br/>

- **Purple** – Used to indicate visited links.

```jsx noeditor
<colors category="support_purple" />
```

### Neutrals

Neutral colours foster simplicity. White and light greys are mainly used for areas in the background, while darker grey shades are primarily used for borders and hover selections. Neutral grey 30 is also used for disabled states.

```jsx noeditor
<colors category="neutral_bw" />
```

```jsx noeditor
<colors category="neutral" />
```

## How colour is used

- **Meaning** – The meaning of a message can be summarised through color. For example, color is often used to communicate status where red is a problem, yellow is warning, and green is good.
- **State** – An object's state can be indicated through color. For example, Neutral grey 30 is used for disabled states for buttons.
- **Differentiation and association** – People assume that there is a relationship between items of the same color, so color coding is an effective way to differentiate between objects. For example, blue text indicates a link among grey text.
- **Emphasis and hierarchy** – color can be used to draw users' attention. For example, primary buttons are orange as it has the highest luminance value among other colors.

## Design considerations

- **Applying colors consistently** keeps cognitive loads low and makes for a unified and engaging user experience.
- Use color with **purpose and restraint**. Although we value an aesthetically pleasing use of color, we place a higher value on clear communication. Our use of color should be purposeful and serve to support the content's intent.
- To be legible, **foreground text and background colors must have a minimum level of contrast** between them (with exception for disabled elements). Follow the <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target="_blank">level AA of the Web Content Accessibility Guidelines (WCAG 2.0)</a> guidelines to ensure proper color contrast

  - Fail – Your text doesn't have enough contrast with the background
  - AA Large – Acceptable contrast for type sizes >= 19px bold or 24px regular and above
  - AA – Acceptable contrast for text sizes below 19px
  - AAA – Enhanced contrast

- While color is the most obvious attribute of many designs, it must always be redundant. **Don't rely on colors alone as a primary means of communication. Consider adding labels or icons to make things clear.**
