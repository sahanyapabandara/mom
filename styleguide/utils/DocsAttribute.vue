<template>
  <tr v-show="show">
    <th width="200">{{ label }}</th>
    <td>
      <div style="overflow: scroll">
        <input
          v-if="type === 'text'"
          type="text"
          :size="size"
          v-model="dataValue"
          @input="update"
        />
        <div v-else-if="type === 'textArray'">
          <div v-for="(val, i) in arrayValue" :key="i" class="m-b:8">
            <input type="text" :size="size" v-model="arrayValue[i]" @input="updateArray" />
            <button class="rsg--button-31 m-t:0" @click="removeItem(i)">Remove</button>
          </div>
          <button class="rsg--button-31 m-t:0" @click="addArrayItem">Add item</button>
        </div>
        <select v-else-if="type === 'options'" v-model="dataValue" @change="update">
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
        <input
          v-else-if="type === 'boolean'"
          type="checkbox"
          v-model="dataValue"
          @change="update"
        />
        <div v-else-if="type === 'object'">
          <DocsAttributeList :attrList="attr" :data="dataValue" />
        </div>
        <div v-else-if="type === 'objectArray'">
          <DocsAttributeList v-for="(val, i) in dataValue" :key="i" :attrList="attr" :data="val">
            <tr>
              <th></th>
              <td><button class="rsg--button-31 m-t:0" @click="removeItem(i)">Remove</button></td>
            </tr>
          </DocsAttributeList>

          <button class="rsg--button-31 m-t:0" @click="addItem">Add item</button>
        </div>
        <div v-else-if="type === 'value'">
          <p>{{ dataValue }}</p>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "DocsAttribute",
  props: {
    type: {
      type: String,
    },
    label: {
      type: String,
    },
    size: {
      type: [String, Number],
      default: 50,
    },
    options: {
      type: Array,
    },
    attr: {
      type: Array,
    },
    show: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Number, Boolean, Array, Object],
    },
  },
  data() {
    return {
      dataValue: this.value,
      arrayValue: Array.isArray(this.value) ? this.value : [this.value],
    }
  },
  watch: {
    value() {
      this.dataValue = this.value
    },
  },
  methods: {
    update() {
      this.$emit("input", this.dataValue)
    },
    updateArray() {
      this.$emit("input", this.arrayValue)
    },
    addItem() {
      if (!this.dataValue) {
        this.dataValue = []
      }
      this.dataValue.push({})
      this.update()
    },
    addArrayItem() {
      if (!this.arrayValue) {
        this.arrayValue = []
      }
      this.arrayValue.push("")
      this.updateArray()
    },
    removeItem(index) {
      this.arrayValue.splice(index, 1)
    },
  },
}
</script>
