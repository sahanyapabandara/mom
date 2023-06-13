<template>
  <table class="AttributeList">
    <tbody>
      <DocsAttribute
        v-for="(attr, i) in attrList"
        :key="i"
        :label="attr.label || attr.name"
        :type="attr.type"
        :size="attr.size"
        :attr="attr.attr"
        :options="attr.options"
        :show="attr.show"
        v-model="dataObject[attr.name]"
      />
      <slot></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DocsAttributeList",
  props: {
    attrList: {
      type: Array,
    },
    data: {
      type: Object,
    },
  },
  data() {
    return {
      dataObject: this.data,
    }
  },
}
</script>
