<script>
import MomInputCheckboxButton from "@/components/input/checkbox/MomInputCheckboxButton.vue"

export default {
  extends: MomInputCheckboxButton,
  name: "MomInputCheckboxCard",
  release: "2.2.8",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Checkbox type
     * @ignore
     */
    type: {
      type: String,
      default: "card",
      validator: val => ["card"].includes(val),
    },
  },
}
</script>

<style lang="scss" scoped>
.MomInputCheckboxButton__Input {
  @include visually-hidden;
}

.MomInputCheckboxButton__Label {
  display: flex;
  padding: rem(15);
  border: rem(1) solid $color-cool-grey-20;
  background-color: $color-white;
  border-radius: $border-radius-corner;

  &:hover {
    border-color: $color-blue-20;
  }

  .MomInputCheckboxButton--is-checked & {
    border-color: $color-cool-grey-50;
  }

  .MomInputCheckboxButton--input-state-error & {
    border-color: $input-border-error;
  }

  .MomInputCheckboxButton--input-state-warning & {
    border-color: $input-border-warning;
  }

  .MomInputCheckboxButton--is-disabled & {
    border-color: $input-border-disabled;
    cursor: not-allowed;
  }

  .MomInputCheckboxButton__Input:focus + & {
    outline: $focus-outline;

    .remove-outline & {
      outline: none;
    }
  }
}

.MomInputCheckboxButton__LabelIcon {
  color: $input-icon;
  margin-right: rem(8);

  .MomInputCheckboxButton--is-checked & {
    color: $input-icon-checked;
  }

  &:hover {
    color: $input-icon-hover;
  }

  .MomInputCheckboxButton--input-state-error & {
    color: $input-icon-error;
  }

  .MomInputCheckboxButton--input-state-warning & {
    color: $input-icon-warning;
  }

  .MomInputCheckboxButton--is-disabled & {
    color: $input-icon-disabled;
  }
}

.MomInputCheckboxButton__LabelContent {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.MomInputCheckboxButton__LabelText {
  @include font-size(m);
  @include line-height(m);
  @include stack-margin(rem(4));

  .MomInputCheckboxButton--is-disabled & {
    color: $input-text-disabled;
  }
}

.MomInputCheckboxButton__LabelDescription {
  @include font-size(s);
  @include line-height(s);
  color: $color-cool-grey-70;

  .MomInputCheckboxButton--is-disabled & {
    color: $color-grey-40;
  }
}

.MomInputCheckboxButton__LabelSupporting {
  @include font-size(m);
  @include line-height(m);
  width: rem(50);
  margin-left: rem(16);
  text-align: right;
  flex: none;

  @media #{$media-query-tablet} {
    width: rem(100);
  }

  .MomInputCheckboxButton--is-disabled & {
    color: $input-text-disabled;
  }
}
</style>
