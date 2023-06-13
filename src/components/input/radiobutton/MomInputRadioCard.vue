<script>
import MomInputRadioButton from "@/components/input/radiobutton/MomInputRadioButton.vue"

export default {
  extends: MomInputRadioButton,
  name: "MomInputRadioCard",
  release: "2.0.0",
  lastUpdated: "2.3.6",
  props: {
    /**
     * Radio button type
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
.MomInputRadioButton__Input {
  @include visually-hidden;
}

.MomInputRadioButton__Label {
  display: flex;
  padding: rem(15);
  border: rem(1) solid $color-cool-grey-20;
  background-color: $color-white;
  border-radius: $border-radius-corner;

  &:hover {
    border-color: $color-blue-20;
  }

  .MomInputRadioButton--is-checked & {
    border-color: $color-cool-grey-50;
  }

  .MomInputRadioButton--input-state-error & {
    border-color: $input-border-error;
  }

  .MomInputRadioButton--input-state-warning & {
    border-color: $input-border-warning;
  }

  .MomInputRadioButton--is-disabled & {
    border-color: $input-border-disabled;
    cursor: not-allowed;
  }

  .MomInputRadioButton__Input:focus + & {
    outline: $focus-outline;

    .remove-outline & {
      outline: none;
    }
  }
}

.MomInputRadioButton__LabelIcon {
  color: $input-icon;
  margin-right: rem(8);

  .MomInputRadioButton--is-checked & {
    color: $input-icon-checked;
  }

  &:hover {
    color: $input-icon-hover;
  }

  .MomInputRadioButton--input-state-error & {
    color: $input-icon-error;
  }

  .MomInputRadioButton--input-state-warning & {
    color: $input-icon-warning;
  }

  .MomInputRadioButton--is-disabled & {
    color: $input-icon-disabled;
  }
}

.MomInputRadioButton__LabelContent {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.MomInputRadioButton__LabelText {
  @include font-size(m);
  @include line-height(m);
  @include stack-margin(rem(4));

  .MomInputRadioButton--is-disabled & {
    color: $input-text-disabled;
  }
}

.MomInputRadioButton__LabelDescription {
  @include font-size(s);
  @include line-height(s);
  color: $color-cool-grey-70;

  .MomInputRadioButton--is-disabled & {
    color: $color-grey-40;
  }
}

.MomInputRadioButton__LabelSupporting {
  @include font-size(m);
  @include line-height(m);
  width: rem(50);
  margin-left: rem(16);
  text-align: right;
  flex: none;

  @media #{$media-query-tablet} {
    width: rem(100);
  }

  .MomInputRadioButton--is-disabled & {
    color: $input-text-disabled;
  }
}
</style>
