```jsx noeditor
<docs-tabs
  :items="[
    {
      name: 'Docs',
      link: '#/Components/Tab',
    },
    {
      name: 'MomTabBar',
      link: '#/Components/Tab/MomTabBar',
      active: true
    },
    {
      name: 'MomTab',
      link: '#/Components/Tab/MomTab',
    },
  ]"
/>
```

## Examples

#### Default

```jsx
<mom-card>
  <mom-tab-bar>
    <mom-tab title="Tab 1">
      <p class="mom-p">Tab content 1</p>
    </mom-tab>

    <mom-tab title="Tab 2" active>
      <p class="mom-p">Tab content 2</p>
    </mom-tab>

    <mom-tab title="Tab 3">
      <p class="mom-p">Tab content 3</p>
    </mom-tab>
  </mom-tab-bar>
</mom-card>
```
