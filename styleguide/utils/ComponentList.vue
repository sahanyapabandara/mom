<template>
  <table class="ComponentList">
    <thead>
      <tr>
        <th>Component name</th>
        <th>Release version</th>
        <th>Last updated version</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(component, index) in components" :key="index">
        <td>
          <p v-if="component.name">{{ component.name }}</p>
          <p v-else>N/A</p>
        </td>
        <td>
          <p v-if="component.release">{{ component.release }}</p>
          <p v-else>N/A</p>
        </td>
        <td>
          <p v-if="component.lastUpdated">{{ component.lastUpdated }}</p>
          <p v-else>N/A</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import orderBy from "lodash/orderBy"

export default {
  name: "ComponentList",
  data() {
    return {
      components: this.getComponents(),
    }
  },
  methods: {
    orderData(data) {
      return orderBy(data, "name", "asc")
    },

    getComponents() {
      let components = []
      let context = require.context("@/components/", true, /^\.\/[a-zA-Z0-9/]*\.vue$/)
      context.keys().forEach(key => components.push(context(key).default))
      return this.orderData(components)
    },
  },
}
</script>
