```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Description%20List',
      active: true
    },
    {
      name: 'MomDescriptionItem',
      link: '#/Components/Description%20List/MomDescriptionItem',
    },
    {
      name: 'MomDescriptionList',
      link: '#/Components/Description%20List/MomDescriptionList',
    },
  ]"
/>
```

> A description list allow users to quickly review information. They comprise of a set of labels and their corresponding data.

Description lists can either be in a 1 or 2-column layout. They can also have headers and sub-headers to group related fields together. Apart from text, the data can also include other components, such as tables and thumbnails. Labels use Cool Grey 90 and the data uses Cool Grey 100.

## Anatomy

### Responsive description list

<img src="./images/components/descriptionlist/anatomy_responsive@2x.png" alt="Responsive description list anatomy" style="width:720px;" />

<br/>

### Vertical description list

<img src="./images/components/descriptionlist/anatomy_vertical@2x.png" alt="Vertical description list anatomy" style="width:720px;" />

<br/>

### Table style description list

<img src="./images/components/descriptionlist/anatomy_table@2x.png" alt="Table style description liste anatomy" style="width:720px;"/>

<br/>

1. **Label**
2. **Description**
3. **Tooltip** _(optional)_ – More detailed explanation of the label.

<br/>

## Examples

### Responsive style (2-column layout)

The default description list is 2-column layout, commonly used in summary pages. Labels will flow to the next line if the text is still too long. Labels in 2-column layouts are also left-aligned.

```jsx noeditor
<mom-card>
  <mom-description-list
    :items="[
      {
        term: 'Job posting ID',
        details: 'JOB-1990-001234',
      },
      {
        term: 'Occupation',
        details: 'Dog Trainer',
      },
      {
        term: 'Company name',
        details: 'Happy Paws Forever Pte. Ltd.',
      },
      {
        term: 'Gross monthly salary range',
        details: 'SGD 3,000 - SGD 4,000',
      },
      {
        term: 'Job posting date',
        details: '25 Dec 1990',
      },
      {
        term: 'Job posting expiry date',
        details: '25 Mar 1991',
      },
    ]"
  />
</mom-card>
```

#### Typography

- **Label** – Body-2 <br/>
- **Description** – Body-2, Semibold

There are 3 types of label width sizes: 150px(S), 200px(M) and 250px(L). Use a suitable size depending on the width of most labels in a description list.

#### Small label width (150px)

```jsx noeditor
<mom-card>
  <mom-description-list
    term-width="s"
    :items="[
      {
        term: 'Job posting ID',
        details: 'JOB-1990-001234',
      },
      {
        term: 'Occupation',
        details: 'Dog Trainer',
      },
      {
        term: 'Company name',
        details: 'Happy Paws Forever Pte. Ltd.',
      },
      {
        term: 'Gross monthly salary range',
        details: 'SGD 3,000 - SGD 4,000',
      },
      {
        term: 'Job posting date',
        details: '25 Dec 1990',
      },
      {
        term: 'Job posting expiry date',
        details: '25 Mar 1991',
      },
    ]"
  />
</mom-card>
```

#### Large label width (250px)

```jsx noeditor
<mom-card>
  <mom-description-list
    term-width="l"
    :items="[
      {
        term: 'Job posting ID',
        details: 'JOB-1990-001234',
      },
      {
        term: 'Occupation',
        details: 'Dog Trainer',
      },
      {
        term: 'Company name',
        details: 'Happy Paws Forever Pte. Ltd.',
      },
      {
        term: 'Gross monthly salary range',
        details: 'SGD 3,000 - SGD 4,000',
      },
      {
        term: 'Job posting date',
        details: '25 Dec 1990',
      },
      {
        term: 'Job posting expiry date',
        details: '25 Mar 1991',
      },
    ]"
  />
</mom-card>
```

### Vertical style (1-column layout)

The 1-column layout is used for displaying **view-only data** that is nested under a parent field. For example, when a user has entered a postal code in the parent field, the exact address will be displayed as a view-only, 1-column description list below. 1-column layouts have top-left, aligned labels and are vertically stacked.

```jsx noeditor
<mom-card>
  <mom-description-list
    variant="vertical"
    :items="[
      {
        term: 'Block/house number',
        details: '18',
      },
      {
        term: 'Street name',
        details: 'Havelock Road',
      },
      {
        term: 'Building name',
        details: 'Ministry of Manpower Headquarter',
      },
      {
        term: 'Postal code',
        details: '059764',
      },
    ]"
  />
</mom-card>
```

#### Typography

- **Label** – Body-3 <br/>
- **Description** – Body-2

### Table style

To show accumulated pricings of different items.

```jsx noeditor
<mom-card>
  <mom-description-list
    variant="table"
    :items="[
      {
        term: 'Renewal fee',
        details: 'SGD 100',
      },
      {
        term: 'Late renewal charge',
        details: 'SGD 100',
      },
      {
        term: 'Total',
        details: 'SGD 200',
        boldText: true,
        topBorder: true
      },
    ]"
  />
</mom-card>
```

#### Typography

- **Label** – Body-2 <br/>
- **Description** – Body-2, Semibold

#### Table style with checkbox

```jsx noeditor
<mom-card>
  <mom-description-item
    variant="table"
    term="Issuance fee"
    details="SGD 50"
  />
  <mom-input-checkbox class="m-b:12"
    name="input-checkbox"
    :options="[
      {
        label: 'Apply full waiver',
        value: '1',
      },
    ]"
  />
  <mom-description-item
    variant="table"
    term="Multi Journey Visa (MJV) fee"
    details="SGD 100"
  />
  <mom-input-checkbox class="m-b:12"
    name="input-checkbox"
    :value="['1']"
    :options="[
      {
        label: 'Apply full waiver',
        value: '1',
      },
    ]"
  />
  <mom-form-subsection>
    <mom-form-group label="Waiver reason">
        <mom-input-select :options="[]" />
    </mom-form-group>
    <mom-form-group label="Decision officer">
        <mom-input-select :options="[]" />
    </mom-form-group>
  </mom-form-subsection>
  <mom-description-item
    variant="table"
    term="Overstaying fine (20 May 2019 - 30 May 2019)"
    details="SGD 100"
  />
  <mom-input-checkbox class="m-b:16"
    name="input-checkbox"
    :options="[
      {
        label: 'Apply partial waiver',
        value: '1',
      },
    ]"
  />
  <mom-description-item
    variant="table"
    term="Total"
    details="SGD 250"
    boldText
    topBorder
  />
</mom-card>
```

## Spacing

### Responsive style

<img src="./images/components/descriptionlist/spacing_responsive@2x.png" alt="Responsive description list spacing" style="width:732px;" />

### Responsive style with small label width

<img src="./images/components/descriptionlist/spacing_responsive_small@2x.png" alt="Small label width responsive description list spacing" style="width:732px;" />

### Responsive style with with large label width

<img src="./images/components/descriptionlist/spacing_responsive_large@2x.png" alt="Large label width responsive description list spacing" style="width:732px;" />

### Vertical style

<img src="./images/components/descriptionlist/spacing_vertical@2x.png" alt="Vertical style description list spacing" style="width:740px;" />

### Table style

<img src="./images/components/descriptionlist/spacing_table@2x.png" alt="Table style description list spacing" style="width:740px;" />

## When to use it

To display a glossary or metadata (a list of key-value pairs).

<table>
  <tbody>
    <tr>
        <th>Description list</th>
        <td>- When there are **more than one pair of label and description** (data set)
        - When the description is a **string** (text only without customised style other than the default style)</td>
    </tr>
    <tr>
        <th>Description item</th>
        <td>
          - To display **single pair of label and description data**
          - When the description is **not a string**
        </td>
    </tr>
    <tr>
        <th>Vertical style</th>
        <td>- This style will be applied when users are viewing on narrow browser viewport and mobile devices.
        - When the description list is a subset of a form input
        - To display view-only data sets</td>
    </tr>
    <tr>
        <th>Table style</th>
        <td>- To display total price and its breakdown. May include other components such as checkboxes that can be expanded.</td>
    </tr>
  </tbody>
</table>

## Design considerations

### What to do when using lists

- Place labels above corresponding input fields to allow users to quickly scan the page. Top-aligned labels also do not take up much horizontal space. This allows different-sized components to fit in linearly in a form.

- The term and description should be clearly differentiated, by making the description bold.

- Group related information by using headers and sub-headers. Users think in batches, and forms can feel overwhelming. By creating logical groups the user will make sense of the form much faster.

### What **not** to do when using lists

- Avoid all caps for labels, which makes forms harder to scan and read.
