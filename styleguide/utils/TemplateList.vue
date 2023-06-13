<template>
  <table class="TemplateList">
    <thead>
      <tr>
        <th>Template name</th>
        <th>Release version</th>
        <th>Last updated version</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(template, index) in templates" :key="index">
        <td>
          <p v-if="template.name">{{ template.name }}</p>
          <p v-else>N/A</p>
        </td>
        <td>
          <p v-if="template.release">{{ template.release }}</p>
          <p v-else>N/A</p>
        </td>
        <td>
          <p v-if="template.lastUpdated">{{ template.lastUpdated }}</p>
          <p v-else>N/A</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import orderBy from "lodash/orderBy"

export default {
  name: "TemplateList",
  data() {
    return {
      templates: this.getTemplates(),
    }
  },
  methods: {
    orderData(data) {
      return orderBy(data, "name", "asc")
    },

    getTemplates() {
      let templates = []
      let context = require.context("@/templates/", true, /^\.\/[a-zA-Z0-9/]*\.vue$/)
      context.keys().forEach(key => templates.push(context(key).default))
      return this.orderData(templates)
    },
  },
}
</script>
