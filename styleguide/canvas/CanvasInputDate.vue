<template>
  <div id="CanvasInputDate">
    <div class="rsg--preview-66">
      <MomInputDate
        :name="name"
        :inputState="inputState"
        :placeholder="placeholder || 'dd mmm yyyy'"
        :minDate="minDate"
        :maxDate="maxDate"
        :openDate="openDate"
        :displayFormat="displayFormat || 'DD MMM YYYY'"
        v-model="value"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasInputDate",
  data() {
    return {
      name: null,
      inputState: null,
      placeholder: null,
      minDate: null,
      maxDate: null,
      openDate: null,
      displayFormat: null,
      value: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "name",
          label: "Input name",
          type: "text",
        },
        {
          name: "inputState",
          label: "Input state",
          type: "options",
          options: [null, "error", "warning", "disabled"],
        },
        {
          name: "placeholder",
          label: "Placeholder",
          type: "text",
        },
        {
          name: "minDate",
          label: "Min date allowed",
          type: "text",
        },
        {
          name: "maxDate",
          label: "Max date allowed",
          type: "text",
        },
        {
          name: "openDate",
          label: "Default open date",
          type: "text",
        },
        {
          name: "displayFormat",
          label: "Display format",
          type: "text",
        },
        {
          name: "value",
          label: "Input value",
          type: "value",
        },
      ]
    },
    hasProp() {
      return (
        this.name ||
        this.inputState ||
        this.placeholder ||
        this.minDate ||
        this.maxDate ||
        this.openDate ||
        this.displayFormat
      )
    },
    code() {
      let html = ""
      html += "<mom-input-date"
      html += this.hasProp ? "\n" : ""
      html += this.name ? `\tname="${this.name}"\n` : ""
      html += this.inputState ? `\tinput-state="${this.inputState}"\n` : ""
      html += this.placeholder ? `\tplaceholder="${this.placeholder}"\n` : ""
      html += this.minDate ? `\tmin-date="${this.minDate}"\n` : ""
      html += this.maxDate ? `\tmax-date="${this.maxDate}"\n` : ""
      html += this.openDate ? `\topen-date="${this.openDate}"\n` : ""
      html += this.displayFormat ? `\tdisplay-format="${this.displayFormat}"\n` : ""
      html += this.hasProp ? "/>" : " />"

      return html
    },
  },
}
</script>
