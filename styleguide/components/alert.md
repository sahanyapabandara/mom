```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Alert',
      active: true
    },
    {
      name: 'MomBanner',
      link: '#/Components/Alert/MomBanner',
    },
    {
      name: 'MomNotification',
      link: '#/Components/Alert/MomNotification',
    },
    {
      name: 'MomDraftMessage',
      link: '#/Components/Alert/MomDraftMessage',
    },
  ]"
/>
```

<br/>

> Alerts communicate important information in a prominent way.

There are three types of alerts: Banners, Page Banners and Toast Messages (also known as notifications).

Toast messages are shorter notifications that provide immediate feedback after the user performs an action. They stick to the top during scrolling.

## Anatomy

### Banner

<img src="./images/components/alert/anatomy_banner@2x.png" alt="Banner anatomy" style="width:760px;" />

<br/>

### Page banner

<img src="./images/components/alert/anatomy_page_banner@2x.png" alt="Page banner anatomy" style="width:1160px;" />

<br/>

### Toast message

<img src="./images/components/alert/anatomy_toast_message@2x.png" alt="Toast message anatomy" style="width:400px;"/>

<br/>

1. **Title** _(optional)_ – Main message that should be brief.
2. **Icon** – Indicates the type of banner.
3. **Message** – More detailed explanation of the banner.
4. **Close icon** – Allows user to close the alert.

<br/>

## Examples

### Banner

Note: Warning and error banners should appear below the item it is associated with.

```jsx noeditor
<mom-banner type="info">
  <p class="mom-p"> This is a default banner </p>
</mom-banner>
```

### Page banner

Note: Page banners should always be on top and outside of cards.

<br/>

```jsx noeditor
<mom-banner variant="page-banner" type="warning" size="full" class="wrap:l">
  <h3 class="mom-h3">
    Based on the information provided, the candidate is unlikely to qualify for an Employment Pass
  </h3>
  <ul class="mom-ul">
    <li>The reasons are indicated in the yellow banners in the summary below.</li>
    <li>
      You are strongly advised not to put in an actual application as it will most likely be
      rejected.
    </li>
  </ul>
</mom-banner>
```

## Types

There are 4 different types of colours to indicate different states:

### Info (default)

To communicate policy rules, regulations, reminders or advisory

Provides additional information to user.

```jsx noeditor
<mom-banner type="info">
  <p class="mom-p">This is a default banner.</p>
</mom-banner>
```

#### Colours

- **Border** – Primary blue 60
- **Fill** – Primary blue 00
- **Icon** – Primary blue 60

### Success

To communicate a completed transaction or successful action

Indicates a completed or successful action.

```jsx noeditor
<mom-banner type="success">
  <p class="mom-p">This is a success banner.</p>
</mom-banner>
```

#### Colours

- **Border** – Green 80
- **Fill** – Green 00
- **Icon** – Green 80

### Error

To communicate policy rules, regulations or advisory that affect the outcome of a transaction and stops the user from submitting the form

Indicates that input is not valid or action cannot be done.

```jsx noeditor
<mom-banner type="error">
  <p class="mom-p">This is an error banner.</p>
</mom-banner>
```

#### Colours

- **Border** – Red 80
- **Fill** – Red 00
- **Icon** – Red 80

### Warning

To communicate policy rules, regulations or advisory that might affect the outcome of a transaction but does not stop the user from submitting the form

Indicates potential issues that the user should attend to.

```jsx noeditor
<mom-banner type="warning">
  <p class="mom-p">This is a warning banner.</p>
</mom-banner>
```

#### Colours

- **Border** – Orange 80
- **Fill** – Orange 00
- **Icon** – Orange 80

## Sizes

### M

```jsx noeditor
<mom-banner size="m">
  <p class="mom-p">The maximum width of this banner is 320px.</p>
</mom-banner>
```

### L

```jsx noeditor
<mom-banner size="l">
  <p class="mom-p">The maximum width of this banner is 480px.</p>
</mom-banner>
```

### XL (Default)

```jsx noeditor
<mom-banner size="xl">
  <p class="mom-p">The maximum width of this banner is 720px.</p>
</mom-banner>
```

### Full

```jsx noeditor
<mom-banner variant="page-banner" size="full">
  <p class="mom-p">
    The width of this banner follows the width of its container. Use this size for page banner.
  </p>
</mom-banner>
```

## Spacing

### Banner

<img src="./images/components/alert/spacing_banner@2x.png" alt="Banner spacing" style="width:752px;" />

### Page banner

<img src="./images/components/alert/spacing_page_banner@2x.png" alt="Page banner spacing" style="width:1152px;" />

### Toast message

<img src="./images/components/alert/spacing_toast_message@2x.png" alt="Toast message spacing" style="width:357px;" />

## Behaviour and placement

<table>
  <thead>
    <tr>
      <td></td>
      <th>Banner</th>
      <th>Page banner</th>
      <th>Toast message (Notification)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <th>Behaviour</th>
        <td>Static</td>
        <td>Static</td>
        <td>Appears and stays for 5 seconds before it disappears</td>
    </tr>
    <tr>
        <th>Placement</th>
        <td>
          Above the specific section or field of the form
        </td>
        <td>
        Below the Header or Step indicator <br/>
        Can be below a form field to notify user of any additional information
        </td>
        <td>
        Float above all content <br/>
        32px from top of the screen <br/>
        Horizontally centered
        </td>
    </tr>
    <tr>
        <th>Width</th>
        <td>Depending on the width of the parent/related form field, either: 480px or 720px (default)</td>
        <td>100% of the parent container (1120px)</td>
        <td>Depending on the width of the message, either: 320px (default) or 480px</td>
    </tr>
  </tbody>
</table>

## When to use alerts

<table>
  <tbody>
    <tr>
        <th>Banner</th>
        <td>
        To communicate a message within a small section of a form
        E.g. To inform user of compliance with business rule or API connection problem
        </td>
    </tr>
    <tr>
        <th>Page banner</th>
        <td>To communicate a message at a **page level**</td>
    </tr>
    <tr>
        <th>Toast message (Notification)</th>
        <td>To display a **temporary (5 seconds) notification** after completing an action.
        E.g. Deleting a draft, successfully applying fee waiver</td>
    </tr>
  </tbody>
</table>

## Design considerations

- Width of the default banner should be the same as the width of the parent/related form field (minimum 480px and maximum 720px).
- Banners should be prominent but not overly intrusive.
- Toast messages are used for a low-priority feedback that requires minimal user action. They should contain no more than 1-2 sentences.
- Avoid action elements like buttons and links as well as lengthy text in toast messages.

## Related components

- [Form group with Hint text](/#/Components/Form)
- [Form group with Tooltip](/#/Components/Form)
