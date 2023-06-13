```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Input%20component/Date%20field',
      active: true
    },
    {
      name: 'MomInputDate',
      link: '#/Components/Input%20component/Date%20field/MomInputDate',
    },
    {
      name: 'MomInputDateMonth',
      link: '#/Components/Input%20component/Date%20field/MomInputDateMonth',
    },
  ]"
/>
```

> Date input consists of a text field with date picker that allows the user to enter date using keyboard or calendar pop up.

## Examples

### Day month year

```jsx noeditor
<mom-input-date />
```

### Month and year

```jsx noeditor
<mom-input-date-month />
```

## States

### Default

```jsx noeditor
<mom-input-date />
```

### Disabled

```jsx noeditor
<mom-input-date input-state="disabled" />
```

## Validations

#### Error

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is a error message"
  input-state="error"
  id-for-input="date_error"
>
  <mom-input-date input-state="error" id-for-input="date_error" />
</mom-form-group>
```

#### Warning

```jsx noeditor
<mom-form-group
  label="Label"
  message-text="This is a warning message"
  input-state="warning"
  id-for-input="date_warning"
>
  <mom-input-date input-state="warning" id-for-input="date_warning" />
</mom-form-group>
```

## Spacing

<img src="./images/components/input/date/spacing@2x.png" alt="Date field spacing" style="width: 208px;" />

## When to use it

When we need the user to enter a date.

## How it works

The user can enter a date either by:

- typing a date into the input field.
- select a date using the date picker.

#### Day month year

By typing, they can enter the following format below and it will automatically be formatted to **5 Dec 2019**.

<table>
    <tbody>
        <tr>
            <th>Acceptable date format</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>D MMM YYYY</td>
            <td>5 Dec 2019</td>
        </tr>
        <tr>
            <td>D MMMM YYYY</td>
            <td>5 December 2019</td>
        </tr>
        <tr>
            <td>D M YYYY</td>
            <td>5 12 2019</td>
        </tr>
        <tr>
            <td>MMM D YYYY</td>
            <td>Dec 5 2019</td>
        </tr>
        <tr>
            <td>MMMM D YYYY</td>
            <td>December 5 2019</td>
        </tr>
        <tr>
            <td>D MMM YY</td>
            <td>5 Dec 19</td>
        </tr>
        <tr>
            <td>D MMMM YY</td>
            <td>5 December 19</td>
        </tr>
        <tr>
            <td>D M YY</td>
            <td>5 12 19</td>
        </tr>
        <tr>
            <td>MMM D YY</td>
            <td>Dec 5 19</td>
        </tr>
        <tr>
            <td>MMMM D YY</td>
            <td>December 5 19</td>
        </tr>
        <tr>
            <td>DMMMYYYY</td>
            <td>5dec2019</td>
        </tr>
        <tr>
            <td>DDMMYYYY</td>
            <td>05122019</td>
        </tr>
    </tbody>
</table>

#### Month and year

<table>
    <tbody>
        <tr>
            <th>Acceptable date format</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>MMM YYYY</td>
            <td>Dec 2019</td>
        </tr>
        <tr>
            <td>MMMM YYYY</td>
            <td>December 2019</td>
        </tr>
        <tr>
            <td>M YYYY</td>
            <td>12 2019</td>
        </tr>
        <tr>
            <td>YYYY M</td>
            <td>2019 12</td>
        </tr>
        <tr>
            <td>YYYY MMM</td>
            <td>2019 Dec</td>
        </tr>
        <tr>
            <td>YYYY MMMM</td>
            <td>2019 December</td>
        </tr>
        <tr>
            <td>MMM YY</td>
            <td>Dec 19</td>
        </tr>
        <tr>
            <td>MMMM YY</td>
            <td>December 19</td>
        </tr>
        <tr>
            <td>MMMYYYY</td>
            <td>Dec2019</td>
        </tr>
        <tr>
            <td>MMMMYYYY</td>
            <td>December2019</td>
        </tr>
        <tr>
            <td>MYYYY</td>
            <td>122019</td>
        </tr>
        <tr>
            <td>MMMYY</td>
            <td>Dec19</td>
        </tr>
        <tr>
            <td>MMMMYY</td>
            <td>December19</td>
        </tr>
        <tr>
            <td>YYYYMMM</td>
            <td>2019Dec</td>
        </tr>
        <tr>
            <td>YYYYMMMM</td>
            <td>2019December</td>
        </tr>
    </tbody>
</table>

## Design considerations

- The placeholder helps to guide the user to key in the intended date format.
- The user can enter the month in digit format, but it will be displayed as text to remove ambiguity between day/month/year and month/day/year.
- Typing a known date such as date of birth or dates found in documents is much faster than scrolling or clicking through multiple years, months and days within a calendar.
