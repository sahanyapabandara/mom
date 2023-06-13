```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Form',
    },
    {
      name: 'MomFormGroup',
      link: '#/Components/Form/MomFormGroup',
      active: true
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

## Canvas

```jsx noeditor
<canvas-form-group />
```

## Examples

#### Default

```jsx
<div class="stack-y:48">
  <mom-form-group label="Label (prop)" id-for-input="form_input1">
    <mom-input-text id-for-input="form_input1" />
  </mom-form-group>

  <mom-form-group>
    <mom-form-label slot="label" id-for-input="form_input2">
      Label (slot)
    </mom-form-label>
    <mom-input-text id-for-input="form_input2" />
  </mom-form-group>
</div>
```

#### Form group size

```jsx
<div class="stack-y:48">
  <mom-form-group label="Label" id-for-input="form_size1" size="xs">
    <mom-input-text id-for-input="form_size1" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_size2" size="xs1">
    <mom-input-text id-for-input="form_size2" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_size3" size="s">
    <mom-input-text id-for-input="form_size3" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_size4" size="m">
    <mom-input-text id-for-input="form_size4" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_size5" size="l">
    <mom-input-text id-for-input="form_size5" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_size6" size="xl">
    <mom-input-text id-for-input="form_size6" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_size7" size="full">
    <mom-input-text id-for-input="form_size7" />
  </mom-form-group>
</div>
```

#### Form group with inline input

```jsx
<div class="stack-y:48">
  <mom-form-group label="Label" inline-input>
    <mom-input-checkbox-button name="inline-checkbox" label="Checkbox label" value="1" />
  </mom-form-group>

  <mom-form-group label="Label" inline-input>
    <mom-input-radio
      name="inline-radio"
      variant="horizontal"
      :options="[
        {
          label: 'Yes',
          value: 'Yes'
        },
        {
          label: 'No',
          value: 'No'
        },
      ]"
    />
  </mom-form-group>
</div>
```

#### Form group with tooltip

```jsx
<div class="stack-y:48">
  <mom-form-group label="Label (prop)" tooltip="Tooltip text (prop)" id-for-input="form_tooltip1">
    <mom-input-text id-for-input="form_tooltip1" />
  </mom-form-group>

  <mom-form-group label="Label (prop)" id-for-input="form_tooltip2">
    <mom-tooltip slot="tooltip" tooltip-text="Tooltip text (slot)" />
    <mom-input-text id-for-input="form_tooltip2" />
  </mom-form-group>

  <mom-form-group>
    <mom-form-label
      slot="label"
      text="Label (slot)"
      tooltip="Tooltip text (prop)"
      id-for-input="form_tooltip3"
    />
    <mom-input-text id-for-input="form_tooltip3" />
  </mom-form-group>

  <mom-form-group>
    <mom-form-label slot="label" id-for-input="form_tooltip4" text="Label (slot)">
      <mom-tooltip slot="tooltip" tooltip-text="Tooltip text (slot)" />
    </mom-form-label>
    <mom-input-text id-for-input="form_tooltip4" />
  </mom-form-group>
</div>
```

#### Form group with hint text

```jsx
<div class="stack-y:48">
  <mom-form-group label="Label" id-for-input="form_hint1" hint-text="Hint text (prop)">
    <mom-input-text id-for-input="form_hint1" />
  </mom-form-group>

  <mom-form-group label="Label" id-for-input="form_hint2" hint-text="Hint text (prop)">
    <mom-input-text id-for-input="form_hint2" />
    <span slot="hint">Hint text (slot)</span>
  </mom-form-group>
</div>
```

#### Form group with message text

```jsx
<div class="stack-y:48">
  <mom-form-group
    label="Label"
    message-text="Error message"
    input-state="error"
    id-for-input="form_error1"
  >
    <mom-input-text input-state="error" id-for-input="form_error1" />
  </mom-form-group>

  <mom-form-group
    label="Label"
    :message-text='[
      "Error message 1",
      "Error message 2"
    ]'
    input-state="error"
    id-for-input="form_error2"
  >
    <mom-input-text input-state="error" id-for-input="form_error2" />
  </mom-form-group>

  <mom-form-group
    label="Label"
    :message-text='[
      "Error message 1",
      "Error message 2",
      "Error message 3"
    ]'
    message-type="list"
    input-state="error"
    id-for-input="form_error3"
  >
    <mom-input-text input-state="error" id-for-input="form_error3" />
  </mom-form-group>

  <mom-form-group
    label="Label"
    message-text="Warning message"
    input-state="warning"
    id-for-input="form_warning1"
  >
    <mom-input-text input-state="warning" id-for-input="form_warning1" />
  </mom-form-group>

  <mom-form-group
    label="Label"
    :message-text='[
      "Warning message 1",
      "Warning message 2"
    ]'
    input-state="warning"
    id-for-input="form_warning2"
  >
    <mom-input-text input-state="warning" id-for-input="form_warning2" />
  </mom-form-group>

  <mom-form-group
    label="Label"
    :message-text='[
      "Warning message 1",
      "Warning message 2",
      "Warning message 3"
    ]'
    message-type="list"
    input-state="warning"
    id-for-input="form_warning3"
  >
    <mom-input-text input-state="warning" id-for-input="form_warning3" />
  </mom-form-group>
</div>
```

#### Form group with multiple items

```jsx
<div class="stack-y:48">
  <mom-form-group label="Period" type="fieldset">
    <mom-form-flex-wrapper>
      <mom-form-group label="From" size="s" id-for-input="form_period1">
        <mom-input-date id-for-input="form_period1" />
      </mom-form-group>

      <mom-form-group label="To" size="s" id-for-input="form_period2">
        <mom-input-date id-for-input="form_period2" />
      </mom-form-group>
    </mom-form-flex-wrapper>
    <mom-input-checkbox-button value="1">Checkbox label</mom-input-checkbox-button>
  </mom-form-group>

  <mom-form-group label="Period" type="fieldset">
    <mom-form-flex-wrapper class="ai:fe">
      <mom-form-group label="From" size="s" id-for-input="form_period3" class="m-r:8">
        <mom-input-date id-for-input="form_period3" />
      </mom-form-group>

      <p class="mom-p p-y:8 m-r:8">-</p>

      <p class="mom-p p-y:8">Present</p>
    </mom-form-flex-wrapper>

    <mom-input-checkbox-button value="1" checked>Current</mom-input-checkbox-button>
  </mom-form-group>

  <mom-form-group label="Job posting ID" type="fieldset">
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

  <mom-form-group type="fieldset">
    <mom-form-flex-wrapper class="ai:fe">
      <mom-form-group label="Floor number" size="xs1" id-for-input="form_floor" class="m-r:8">
        <mom-input-text prefix="#" id-for-input="form_floor" />
      </mom-form-group>

      <p class="mom-p p-y:8 m-r:8">-</p>

      <mom-form-group label="Unit number" size="xs1" id-for-input="form_unit">
        <mom-input-text id-for-input="form_unit" />
      </mom-form-group>
    </mom-form-flex-wrapper>
  </mom-form-group>
</div>
```

#### Form group with modal

```jsx
<mom-form-group label="Label" id-for-input="form_modal" size="l">
  <mom-input-text id-for-input="form_modal" />

  <mom-modal
    slot="modal"
    toggle-type="link"
    toggle-text="View guide"
    toggle-icon="lightbulb"
    toggle-size="s"
  >
    <p class="mom-p">Form group modal</p>
  </mom-modal>
</mom-form-group>
```

#### Form group with bullet

```jsx
<div class="stack-y:48 alphareset">
  <mom-form-group label="Label" id-for-input="form_bullet1" show-bullet>
    <mom-input-text id-for-input="form_bullet1" />
  </mom-form-group>

  <mom-form-group show-bullet>
    <mom-form-label slot="label" id-for-input="form_bullet2">
      Label
    </mom-form-label>
    <mom-input-text id-for-input="form_bullet2" />
  </mom-form-group>
</div>
```
