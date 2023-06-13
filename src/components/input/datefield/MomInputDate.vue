<template>
  <div
    :class="[
      'MomInputDate',
      inputState && `MomInputDate--input-state-${inputState}`,
      isPickerShow && `MomInputDate--is-picker-show`,
    ]"
  >
    <MomInputText
      ref="text"
      v-model="textValue"
      :idForInput="idForInput"
      :name="name"
      size="s"
      class="MomInputDate__TextInput"
      maxlength="20"
      :placeholder="placeholder"
      :inputState="inputState"
      @blur="onTextBlur"
      @enter="onTextInput"
    />

    <button
      ref="pickerButton"
      class="MomInputDate__Picker"
      :disabled="inputState === 'disabled'"
      tabIndex="-1"
      @click="toggleCalendar"
    >
      <MomIcon icon="calendar" />
    </button>

    <datepicker
      v-show="isPickerShow"
      ref="picker"
      v-model="pickerValue"
      :minimum-view="selectionMode"
      :open-date="defaultOpenDate"
      :disabled-dates="disabledDates"
      @input="onPickerInput"
    />
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core"
import moment from "moment"
import datepicker from "vuejs-datepicker"
import inputId from "@/utils/inputId"
import inputStates from "@/utils/inputStates"
import MomIcon from "@/components/icon/MomIcon.vue"
import MomInputText from "@/components/input/textfield/MomInputText.vue"

export default {
  name: "MomInputDate",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  mixins: [inputId, inputStates],
  components: { MomIcon, MomInputText, datepicker },
  props: {
    /**
     * Input name
     */
    name: {
      type: String,
    },

    /**
     * Placeholder
     */
    placeholder: {
      type: String,
      default: "dd mmm yyyy",
    },

    /**
     * Min date
     * @values today, date
     */
    minDate: {
      type: String,
    },

    /**
     * Max date
     * @values today, date
     */
    maxDate: {
      type: String,
    },

    /**
     * Open date
     * @values today, date
     */
    openDate: {
      type: String,
    },

    /**
     * Display format
     */
    displayFormat: {
      type: String,
      default: "DD MMM YYYY",
    },

    /**
     * Parse format
     */
    parseFormat: {
      type: [String, Array],
      default: () => {
        return [
          "D MMM YYYY",
          "D MMMM YYYY",
          "D M YYYY",
          "MMM D YYYY",
          "MMMM D YYYY",
          "D MMM YY",
          "D MMMM YY",
          "D M YY",
          "MMM D YY",
          "MMMM D YY",
          "DMMMYYYY",
          "DDMMYYYY",
        ]
      },
    },

    /**
     * Selection mode.
     * @ignore
     */
    selectionMode: {
      type: String,
      default: "day",
      validator: val => ["day", "month"].includes(val),
    },

    /**
     * Input value
     */
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      textValue: "",
      pickerValue: null,
      dateValue: null,
      isDate: null,
      isDateRange: null,
      isPickerShow: false,
    }
  },
  computed: {
    minDateValue() {
      return !this.minDate
        ? null
        : this.minDate === "today"
        ? moment(moment().format("D MMM YYYY").toString(), this.displayFormat).toDate()
        : moment(this.minDate, this.displayFormat).toDate()
    },
    maxDateValue() {
      return !this.maxDate
        ? null
        : this.maxDate === "today"
        ? moment(moment().format("D MMM YYYY").toString(), this.displayFormat)
            .add({ h: 23, m: 59, s: 59 })
            .toDate()
        : moment(this.maxDate, this.displayFormat).add({ h: 23, m: 59, s: 59 }).toDate()
    },
    disabledDates() {
      return this.minDateValue && this.maxDateValue && this.minDateValue > this.maxDateValue
        ? {
            ranges: [
              {
                from: this.maxDateValue,
                to: this.minDateValue,
              },
            ],
          }
        : {
            to: this.minDateValue,
            from: this.maxDateValue,
          }
    },
    defaultOpenDate() {
      if (this.openDate && moment(this.openDate, this.parseFormat, true).isValid()) {
        return moment(this.openDate, this.displayFormat).toDate()
      } else {
        let today = moment(moment().format("D MMM YYYY").toString(), this.displayFormat).toDate()
        if (this.minDateValue && this.maxDateValue && this.minDateValue < this.maxDateValue) {
          return this.minDateValue > today
            ? this.minDateValue
            : this.maxDateValue < today
            ? this.maxDateValue
            : today
        } else {
          return this.minDateValue && this.minDateValue > today
            ? this.minDateValue
            : this.maxDateValue && this.maxDateValue < today
            ? this.maxDateValue
            : today
        }
      }
    },
  },
  mounted() {
    if (this.value && this.value.value) {
      let date = this.value
      this.textValue = date.value
      this.updateDate()
      date.value = this.textValue
      date.isValidDate = this.isDate
      date.isValidDateRange = this.isDateRange
    }
  },
  watch: {
    value() {
      if (this.value && this.value.value) {
        let date = this.value
        this.textValue = date.value
        this.updateDate()
        date.value = this.textValue
        date.isValidDate = this.isDate
        date.isValidDateRange = this.isDateRange
      } else {
        this.textValue = ""
        this.dateValue = null
        this.pickerValue = null
        this.isDate = null
        this.isDateRange = null
      }
    },
  },
  methods: {
    eventHandler(e) {
      if (
        !this.$refs.pickerButton.contains(e.target) &&
        !this.$refs.picker.$el.contains(e.target)
      ) {
        this.$refs.picker.$children[0].$emit("closeCalendar")
        this.isPickerShow = false
        document.removeEventListener("click", this.eventHandler, true)
        document.removeEventListener("touchstart", this.eventHandler, true)
      }
    },

    toggleCalendar() {
      if (!this.isPickerShow) {
        this.$refs.picker.$children[0].$emit("showCalendar")
        this.isPickerShow = true
        this.initPopper()
        document.addEventListener("click", this.eventHandler, true)
        document.addEventListener("touchstart", this.eventHandler, true)
      }
    },

    onTextBlur(e) {
      this.onTextInput(e)
    },

    onTextInput() {
      this.updateDate()

      /**
       * When the date input receives input
       *
       * @event input
       * @param {object} dateValue
       */
      this.$emit("input", {
        value: this.textValue,
        isValidDate: this.isDate,
        isValidDateRange: this.isDateRange,
      })
    },

    onPickerInput(date) {
      this.$nextTick(() => {
        this.dateValue = date
        this.textValue = moment(this.dateValue, this.parseFormat).format(this.displayFormat)
        this.$refs.picker.$children[0].$emit("closeCalendar")
        this.isPickerShow = false

        document.removeEventListener("click", this.eventHandler, true)
        document.removeEventListener("touchstart", this.eventHandler, true)

        this.$emit("input", {
          value: this.textValue,
          isValidDate: true,
          isValidDateRange: true,
        })
      })
    },

    updateDate() {
      const dateText = this.textValue.replace(/[^a-zA-Z0-9]/g, " ")
      this.isDate = moment(dateText, this.parseFormat, true).isValid()

      if (this.isDate) {
        this.dateValue = moment(dateText, this.parseFormat, true).toDate()
        this.textValue = moment(this.dateValue, this.parseFormat, true).format(this.displayFormat)
        if (this.minDateValue && this.maxDateValue && this.minDateValue < this.maxDateValue) {
          this.isDateRange =
            this.dateValue >= this.minDateValue && this.dateValue <= this.maxDateValue
        } else if (
          this.minDateValue &&
          this.maxDateValue &&
          this.minDateValue > this.maxDateValue
        ) {
          this.isDateRange =
            this.dateValue <= this.maxDateValue || this.dateValue >= this.minDateValue
        } else if (this.minDateValue) {
          this.isDateRange = this.dateValue >= this.minDateValue
        } else if (this.maxDateValue) {
          this.isDateRange = this.dateValue <= this.maxDateValue
        } else {
          this.isDateRange = true
        }
        this.pickerValue = this.isDateRange ? this.dateValue : null
      } else {
        this.dateValue = null
        this.isDateRange = null
        this.pickerValue = null
      }
    },

    initPopper() {
      this.$nextTick(() => {
        createPopper(this.$refs.text.$el, this.$refs.picker.$el, {
          placement: "bottom-start",
          strategy: "fixed",
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                padding: 24,
              },
            },
            {
              name: "flip",
              options: {
                padding: 24,
              },
            },
          ],
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.MomInputDate {
  width: $component-width-s;
  min-width: rem(64);
  position: relative;
}

.MomInputDate__Picker {
  position: absolute;
  top: rem(1);
  bottom: rem(1);
  right: rem(1);
  padding: rem(7) rem(7) rem(7) rem(8);
  outline: none;
  color: $placeholder-text;

  .MomInputDate--input-state-disabled & {
    color: $placeholder-disabled;
  }
}
</style>

<style lang="scss">
$pickercell-hover: $color-cool-grey-05;
$pickercell-selected: $color-blue-40;
$pickercell-border: $color-cool-grey-10;

.vdp-datepicker {
  height: auto;
  z-index: $z-index-dropdown;

  input {
    display: none;
  }
}

.vdp-datepicker__calendar {
  position: relative !important;
  width: rem(224) !important;
  border: none !important;
  box-shadow: $box-shadow-m;
  border-radius: 0 $border-radius-corner $border-radius-corner $border-radius-corner;

  header {
    line-height: rem(40) !important;

    span {
      width: rem(144) !important;

      &.prev,
      &.next {
        width: rem(40) !important;
      }
    }

    .up:not(.disabled) {
      color: $color-blue-80;
    }

    .prev:hover,
    .next:hover,
    .up:hover {
      background: none !important;
    }
  }

  .cell {
    transition: all 0.1s ease-in-out;
    padding: 0 !important;

    &.day-header {
      font-size: $font-size-xs !important;
      line-height: $line-height-l !important;
      width: rem(32) !important;
      height: rem(32) !important;
      cursor: default !important;
    }

    &.day {
      font-size: $font-size-s !important;
      line-height: $line-height-m !important;
      width: rem(24) !important;
      height: rem(24) !important;
      border-radius: $border-radius-corner;
      border: none !important;
      margin: rem(4) !important;

      &:not(.blank):not(.disabled):hover {
        background-color: $pickercell-hover !important;
      }

      &:not(.blank):not(.disabled).selected {
        background-color: $pickercell-selected !important;
        color: $color-white !important;
        font-weight: $font-weight-semibold;
      }
    }

    &.month,
    &.year {
      font-size: $font-size-s !important;
      line-height: $line-height-l !important;
      width: 33.333% !important;
      height: rem(32) !important;
      border: none !important;

      &:not(.blank):not(.disabled):hover {
        background-color: $pickercell-hover !important;
      }

      &:nth-child(3n - 1) {
        border-right: rem(1) solid $pickercell-border !important;
      }

      &:nth-child(3n + 1) {
        border-left: rem(1) solid $pickercell-border !important;
      }

      &:nth-child(n + 2):nth-child(-n + 10) {
        border-bottom: rem(1) solid $pickercell-border !important;
      }

      &:nth-child(n + 2):nth-child(-n + 4) {
        border-top: rem(1) solid $pickercell-border !important;
      }

      &:not(.blank):not(.disabled).selected,
      &:not(.blank):not(.disabled).selected {
        background-color: $pickercell-selected !important;
        color: $color-white !important;
        font-weight: $font-weight-semibold;
      }
    }
  }

  .vdp-datepicker[data-popper-placement="top-start"] & {
    border-radius: $border-radius-corner $border-radius-corner $border-radius-corner 0;
  }
}
</style>
