<template>
  <div id="CanvasStepIndicator">
    <div class="rsg--preview-66">
      <MomStepIndicator :steps="steps" :currentStep="currentStep" />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasStepIndicator",
  data() {
    return {
      steps: [
        {
          label: "Step 1",
        },
        {
          label: "Step 2",
        },
        {
          label: "Step 3",
        },
        {
          label: "Step 4",
        },
      ],
      currentStep: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "steps",
          label: "Steps",
          type: "objectArray",
          attr: [{ name: "label", label: "Label", type: "text" }],
        },
        {
          name: "currentStep",
          label: "Current step number",
          type: "text",
          size: 20,
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-step-indicator\n"
      html += this.currentStep !== null ? `\tcurrent-step-index="${this.currentStep}"\n` : ""
      html += '\t:steps="[\n'
      this.steps.forEach(step => {
        html += "\t\t{\n"
        html += `\t\t\tlabel: '${step.label || ""}',\n`
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += "/>"

      return html
    },
  },
}
</script>
