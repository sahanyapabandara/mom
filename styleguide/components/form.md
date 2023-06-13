```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Form',
      active: true
    },
    {
      name: 'MomFormGroup',
      link: '#/Components/Form/MomFormGroup',
    },
    {
      name: 'MomFormLabel',
      link: '#/Components/Form/MomFormLabel',
    },
    {
      name: 'MomFormSubsection',
      link: '#/Components/Form/MomFormSubsection',
    },
    {
      name: 'MomFormFlexWrapper',
      link: '#/Components/Form/MomFormFlexWrapper',
    },
  ]"
/>
```

<br/>

> A form group consists of a label and input controls that allow a user to submit information.

## Anatomy

<img src="./images/components/form/anatomy@2x.png" alt="Form group anatomy" style="width:720px;" />

<br/>

1. **Label** – Indicates what the user should enter.
2. **Tooltip** _(optional)_ – Displays explanation of what is required when user hovers above the icon.
3. **Input control** – Can either be a Text field/Text area/Date picker/Select dropdown/Autosuggest dropdown/Radio button/Checkbox.
4. **Hint text/Feedback message** _(optional)_ – To provide succint, helpful information for a specific field.

## Examples

Refer to Input Component section for more input control variants.

### Default

```jsx noeditor
<mom-form-group label="Label" id-for-input="form_default">
  <mom-input-text id-for-input="form_default" />
</mom-form-group>
```

#### Colours

- **Label** – Cool grey 90

### Form group with hint text

```jsx noeditor
<mom-form-group label="Label" hint-text="Additional help text" id-for-input="form_hint">
  <mom-input-text id-for-input="form_hint" />
</mom-form-group>
```

#### Colours

- **Hint text** – Cool grey 50

### Form group with tooltip

```jsx noeditor
<mom-form-group label="Label" tooltip="Tooltip text" id-for-input="form_tooltip">
  <mom-input-text id-for-input="form_tooltip" />
</mom-form-group>
```

### Form group with modal guide

```jsx noeditor
<mom-form-group label="Label" size="l">
  <mom-upload url="https://httpbin.org/post" />

  <mom-modal
    slot="modal"
    toggle-type="link"
    toggle-text="View guide"
    toggle-icon="lightbulb"
    toggle-size="s"
  >
    <p class="mom-p">Modal content</p>
  </mom-modal>
</mom-form-group>
```

### Form group with multiple inputs

Set form group to fieldset type if contains multiple input controls.

#### Date range layout

```jsx noeditor
<mom-form-group label="Period" type="fieldset">
  <mom-form-flex-wrapper>
    <mom-form-group label="From" size="s" id-for-input="form_period1">
      <mom-input-date id-for-input="form_period1" />
    </mom-form-group>

    <mom-form-group label="To" size="s" id-for-input="form_period2">
      <mom-input-date id-for-input="form_period2" />
    </mom-form-group>
  </mom-form-flex-wrapper>

  <mom-input-checkbox-button value="1">Current</mom-input-checkbox-button>
</mom-form-group>
```

#### Date range layout with current

```jsx noeditor
<mom-form-group label="Period" type="fieldset">
  <mom-form-flex-wrapper class="ai:fe">
    <mom-form-group label="From" size="s" id-for-input="form_period3" class="m-r:8">
      <mom-input-date id-for-input="form_period3" />
    </mom-form-group>

    <p class="mom-p p-y:8 m-r:8">-</p>

    <p class="mom-p p-y:8">Present</p>
  </mom-form-flex-wrapper>

  <mom-input-checkbox-button value="1" checked>
    Current
  </mom-input-checkbox-button>
</mom-form-group>
```

#### Job posting ID

```jsx noeditor
<mom-form-group label="Job ID" type="fieldset">
  <mom-form-flex-wrapper class="ai:fe">
    <mom-input-select
      size="xs1"
      class="m-r:8"
      :options="[
        {
          label: '',
          value: ''
        },
        {
          label: 'JOB',
          value: 'JOB'
        },
        {
          label: 'MCF',
          value: 'MCF'
        }
      ]"
    />

    <p class="mom-p p-y:8 m-r:8">-</p>

    <mom-input-text size="xs" class="m-r:8" />

    <p class="mom-p p-y:8 m-r:8">-</p>

    <mom-input-text size="s" />
  </mom-form-flex-wrapper>

  <mom-input-checkbox-button value="1">No job advertisement</mom-input-checkbox-button>
</mom-form-group>
```

#### Years & months

```jsx noeditor
<mom-form-group label="Duration" type="fieldset">
  <mom-form-flex-wrapper>
    <div class="d:f ai:c">
      <mom-input-text id-for-input="form_years" pattern="digits" size="xs" class="m-r:8" />
      <mom-form-label id-for-input="form_years">years</mom-form-label>
    </div>

    <div class="d:f ai:c">
      <mom-input-text id-for-input="form_months" pattern="digits" size="xs" class="m-r:8" />
      <mom-form-label id-for-input="form_months">months</mom-form-label>
    </div>
  </mom-form-flex-wrapper>
</mom-form-group>
```

#### Floor & unit number

```jsx noeditor
<mom-form-group type="fieldset">
  <mom-form-flex-wrapper class="ai:fe">
    <mom-form-group label="Floor number" size="xs1" id-for-input="form_floor" class="m-r:8">
      <mom-input-text id-for-input="form_floor" prefix="#" size="xs1" />
    </mom-form-group>

    <p class="mom-p p-y:8 m-r:8">-</p>

    <mom-form-group label="Unit number" size="xs1" id-for-input="form_unit">
      <mom-input-text pattern="digits" id-for-input="form_unit" size="xs1" />
    </mom-form-group>
  </mom-form-flex-wrapper>
</mom-form-group>
```

### Form group with subsection

A Subsection refers to a single or a group of nested form groups that appears below the parent form group.

```jsx noeditor
<div>
  <mom-form-group label="Parent input label">
    <mom-input-text />
  </mom-form-group>
  <mom-form-subsection>
    <mom-form-group label="Nested child input label">
      <mom-input-text />
    </mom-form-group>
    <mom-form-group label="Nested child A input label 2">
      <mom-input-text />
    </mom-form-group>
  </mom-form-subsection>
</div>
```

#### Colours

- **Left border** – Cool grey 20

## Validations

### Error

```jsx noeditor
<mom-form-group
  label="Label"
  id-for-input="form_error"
  input-state="error"
  message-text="This is a error message"
>
  <mom-input-text id-for-input="form_error" input-state="error" />
</mom-form-group>
```

#### Colours

- **Message text** – Red 80
- **Status icon** – Red 70

### Warning

Warning text uses Orange 80. Border and icon uses Orange 70.

```jsx noeditor
<mom-form-group
  label="Label"
  id-for-input="form_warning"
  input-state="warning"
  message-text="This is a warning message"
>
  <mom-input-text id-for-input="form_warning" input-state="warning" />
</mom-form-group>
```

#### Colours

- **Message text** – Orange 80
- **Status icon** – Orange 70

### Type of validation messages

#### Multiple messages

```jsx noeditor
<mom-form-group
  label="Label"
  id-for-input="form_message_multiple"
  input-state="error"
  :message-text="[
    'This is first error message',
    'This is second error message'
  ]"
>
  <mom-input-text id-for-input="form_message_multiple" input-state="error" />
</mom-form-group>
```

#### List type message

```jsx noeditor
<mom-form-group
  label="Label"
  id-for-input="form_message_list"
  :message-text="[
    'This is main error message',
    'This is first error message',
    'This is second error message'
  ]"
  message-type="list"
  input-state="error"
>
  <mom-input-text id-for-input="form_message_list" input-state="error" />
</mom-form-group>
```

## Spacing

### Default form group

<img src="./images/components/form/spacing@2x.png" alt="Form group spacing" style="width:732px;" />

### Form group with multiple inputs

#### Date range

<img src="./images/components/form/spacing_date@2x.png" alt="Form group for date range" style="width:732px;" />

#### Date range with current

<img src="./images/components/form/spacing_date_current@2x.png" alt="Form group for date range with current" style="width:732px;" />

#### Job ID

<img src="./images/components/form/spacing_jobid@2x.png" alt="Form group for job id" style="width:732px;" />

#### Years & months

<img src="./images/components/form/spacing_years_months@2x.png" alt="Form group for years and months" style="width:732px;" />

#### Floor & unit number

<img src="./images/components/form/spacing_floor_unit@2x.png" alt="Form group for floors and unit number" style="width:253px;" />

### Form subsection

<img src="./images/components/form/spacing_subsection@2x.png" alt="Form subsection" style="width:720px;" />

### Form validation message

#### Single message

<img src="./images/components/form/spacing_message@2x.png" alt="Form group with error messages" style="width:732px;" />

#### Multiple messages

<img src="./images/components/form/spacing_message_multiple@2x.png" alt="Form group with multiple messages" style="width:732px;" />

#### List type message

<img src="./images/components/form/spacing_message_list@2x.png" alt="Form group with list type message" style="width:732px;" />

## When to use it

<table>
  <tbody>
    <tr>
        <th>Form group with hint text</th>
        <td>When it benefits the user for having a persistant guiding information that helps the user to fill in the form input.</td>
    </tr>
    <tr>
        <th>Form group with tooltip</th>
        <td>
            For good-to-know content. <br/>
            When the information does not apply to everyone.
        </td>
    </tr>
    <tr>
        <th>Form group with modal guide</th>
        <td>To display upload components guide.</td>
    </tr>
    <tr>
        <th>Form group with validation message</th>
        <td>To display error/warning messages.</td>
    </tr>
    <tr>
        <th>Multiple validation messages</th>
        <td>To display multiple validation messages.</td>
    </tr>
    <tr>
        <th>List type validation message</th>
        <td>To display single validation message in list styles.</td>
    </tr>
    <tr>
        <th>Subsection</th>
        <td>
          When there are other follow-up questions based on the answer or input given by the user in the parent question. <br/>
          As a form of progressive disclosure, by only showing relevant questions to the user.
        </td>
    </tr>
  </tbody>
</table>

## Design considerations

### Form label

For vertically stacked forms groups, place labels directly **above input fields**. Although visually it creates a longer form, there are many advantages:

- Users can view both the label and the input field in one glance, thus eliminating the need for additional fixations and saccades.
- Helps create a clean layout, as all labels and controls can be left-aligned.
- Caters to forms with **both long and short labels**.
- On small mobile screens, when focus is in-field, label can still be seen (despite zoom).

Group labels with their corresponding inputs. Make sure there is enough height between fields so users don't get confused.

Do not use placeholder text as labels.

Labels should be in sentence case.

### Subsection

- Use only **one indentation** even for multiple level nested form fields. Using multiple nested identation will reduce the horizontal space available, especially on smaller screens.
- If the user changes the parent form input value, the value of the subsequent child form inputs (dependent) that had been previously keyed in should be cleared.

### Hint text

- Don't hide basic helper text. Brief helper text should be displayed below the field. If there is more information, consider adding a link in the helper text for the user to learn more.

### Field length

- The length of the field affords the length of the answer. Learn more in the <a href="http://localhost:6060/#/Components/Text%20field" target="_blank"> Text field</a> section.

## Related components

[Tooltip](/#/Components/Tooltip) <br/>
[InputComponent](/#/Components/InputComponent)
