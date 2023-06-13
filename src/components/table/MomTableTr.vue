<template>
  <tr
    :class="[
      'MomTableTr',
      isSelectable &&
        !isSelected &&
        !locked &&
        !isDisabled &&
        !isPlaceholder &&
        'MomTableTr--is-selectable',
      isSelectable &&
        isSelected &&
        !locked &&
        !isDisabled &&
        !isPlaceholder &&
        'MomTableTr--is-selected',
      isExpandable &&
        isExpanded &&
        !locked &&
        !isDisabled &&
        !isPlaceholder &&
        'MomTableTr--is-expanded',
      clickable && !locked && !isDisabled && !isPlaceholder && 'MomTableTr--is-clickable',
      locked && !isDisabled && !isPlaceholder && 'MomTableTr--is-locked',
      isDisabled && !isPlaceholder && 'MomTableTr--is-disabled',
      isPlaceholder && 'MomTableTr--is-placeholder',
    ]"
    @click="onRowClick"
  >
    <template v-if="selectMode && !isSingleColumn && !isPlaceholder">
      <MomTableTh v-if="rowType === 'header'" class="MomTableTh--selectable-column">
        <MomInputCheckboxButton
          v-if="selectMode === 'multiple'"
          :name="inputName + '_all'"
          value="all"
          :label="$lang('momtable.checkall')"
          :checked="!isDisabled && isCheckedAll"
          :disabled="isDisabled"
          :inputState="inputState"
          hideText
          @change="onCheckAll"
        />
      </MomTableTh>

      <MomTableTd
        v-else-if="rowType === 'body'"
        class="MomTableTd--selectable-column"
        v-on="{ click: clickable ? onSelectableColumnClick : () => {} }"
      >
        <MomInputRadioButton
          v-if="selectMode === 'single'"
          :name="inputName"
          :value="value || ''"
          :label="$lang('momtable.select') + value"
          :checked="!locked && !isDisabled && isSelected"
          :disabled="locked || isDisabled"
          :inputState="inputState"
          hideText
          @change="onRadioChange"
        />

        <MomInputCheckboxButton
          v-else-if="selectMode === 'multiple'"
          :name="inputName"
          :value="value || ''"
          :label="$lang('momtable.check') + value"
          :checked="!locked && !isDisabled && isSelected"
          :disabled="locked || isDisabled"
          :inputState="inputState"
          hideText
          @change="onCheckboxChange"
        />

        <button
          v-else-if="selectMode === 'expandable'"
          :disabled="locked || isDisabled"
          @click="onToggle"
        >
          <MomIcon :icon="!isExpanded ? 'chevron-down' : 'chevron-up'" />
        </button>
      </MomTableTd>

      <MomTableTd v-else-if="rowType === 'footer'" class="MomTableTd--selectable-column" />
    </template>

    <!-- @slot Row cell -->
    <slot></slot>
  </tr>
</template>

<script>
import { eventBus } from "../../utils/eventBus"
import MomTableTh from "@/components/table/MomTableTh.vue"
import MomTableTd from "@/components/table/MomTableTd.vue"
import MomInputRadioButton from "@/components/input/radiobutton/MomInputRadioButton.vue"
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomTableTr",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  components: {
    MomTableTh,
    MomTableTd,
    MomInputRadioButton,
    MomInputCheckboxButton,
    MomIcon,
  },
  inject: [
    "$tableDisabled",
    "$clickable",
    "$selectMode",
    "$inputName",
    "$inputState",
    "$selectedValue",
    "$isCheckedAll",
  ],
  props: {
    /**
     * Type
     */
    rowType: {
      type: String,
      default: "body",
      validator: val => ["header", "body", "footer"].includes(val),
    },

    /**
     * Id
     */
    rowId: {
      type: String,
    },

    /**
     * Locked state
     */
    locked: {
      type: Boolean,
      default: false,
    },

    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Display single column
     */
    isSingleColumn: {
      type: Boolean,
      default: false,
    },

    /**
     * Display placeholder
     */
    isPlaceholder: {
      type: Boolean,
      default: false,
    },

    /**
     * value
     */
    value: {
      type: String,
    },
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
    isDisabled() {
      return this.disabled || this.$tableDisabled()
    },
    clickable() {
      return this.$clickable()
    },
    selectMode() {
      return this.$selectMode()
    },
    inputName() {
      return this.$inputName()
    },
    inputState() {
      return this.$inputState()
    },
    isSelectable() {
      return this.$selectMode() === "single" || this.$selectMode() === "multiple"
    },
    isExpandable() {
      return this.$selectMode() === "expandable"
    },
    isSelected() {
      if (this.selectMode === "single") {
        return this.$selectedValue() === this.value
      } else if (this.selectMode === "multiple") {
        return this.$selectedValue() ? this.$selectedValue().includes(this.value) : false
      } else {
        return false
      }
    },
    isCheckedAll() {
      return this.$isCheckedAll()
    },
  },
  methods: {
    onSelectableColumnClick(e) {
      e.stopImmediatePropagation()
    },

    onRowClick() {
      if (
        this.rowType === "body" &&
        this.clickable &&
        !this.locked &&
        !this.isDisabled &&
        !this.isPlaceholder
      ) {
        eventBus.$emit("rowClick", {
          table: this.$parent.$parent,
          rowId: this.rowId,
        })
      }
    },

    onToggle(e) {
      this.isExpanded = !this.isExpanded
      this.$emit("toggle", e)
    },

    onRadioChange() {
      eventBus.$emit("radioChange", {
        table: this.$parent.$parent,
        value: this.value,
      })
    },

    onCheckboxChange(e) {
      eventBus.$emit("checkboxChange", {
        table: this.$parent.$parent,
        value: this.value,
        checked: e.target.checked,
      })
    },

    onCheckAll(e) {
      eventBus.$emit("checkAll", {
        table: this.$parent.$parent,
        checkAll: e.target.checked,
      })
    },
  },
}
</script>
