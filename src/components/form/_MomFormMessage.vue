<template>
  <div :class="['MomFormMessage', `MomFormMessage--input-state-${inputState}`]">
    <div v-if="messageType === 'list'" class="MomFormMessage__Item">
      <MomIcon :icon="inputState" class="MomFormMessage__Icon" size="s" />
      <div>
        <p class="mom-p-s MomFormMessage__Text" v-html="$html(messageArr[0])" />

        <ul class="mom-ul-s MomFormMessage__Text">
          <li v-for="(message, i) in messageArr.slice(1)" :key="i" v-html="$html(message)" />
        </ul>
      </div>
    </div>

    <template v-else>
      <div v-for="(message, i) in messageArr" :key="i" class="MomFormMessage__Item">
        <MomIcon :icon="inputState" class="MomFormMessage__Icon" size="s" />

        <p class="mom-p-s MomFormMessage__Text" v-html="$html(message)" />
      </div>
    </template>
  </div>
</template>

<script>
import MomIcon from "@/components/icon/MomIcon.vue"

export default {
  name: "MomFormMessage",
  components: {
    MomIcon,
  },
  props: {
    /**
     * Input state
     */
    inputState: {
      type: String,
      required: true,
      validator: val => ["error", "warning"].includes(val),
    },

    /**
     * Form group message text
     */
    messageText: {
      type: [String, Array],
      required: true,
    },

    /**
     * Form group message type
     */
    messageType: {
      type: String,
      validator: val => ["list"].includes(val),
    },
  },
  computed: {
    messageArr() {
      let messageArr = []
      if (Array.isArray(this.messageText)) {
        this.messageText.forEach(message => {
          messageArr.push(message)
        })
      } else {
        messageArr.push(this.messageText)
      }
      return messageArr
    },
  },
}
</script>

<style lang="scss" scoped>
.MomFormMessage__Item {
  display: flex;
  @include stack-margin(rem(4));
}

.MomFormMessage__Icon {
  margin-right: rem(4);

  .MomFormMessage--input-state-error & {
    color: $color-red-70;
  }

  .MomFormMessage--input-state-warning & {
    color: $color-orange-70;
  }
}

.MomFormMessage__Text {
  .MomFormMessage--input-state-error & {
    color: $color-red-80;
  }

  .MomFormMessage--input-state-warning & {
    color: $color-orange-80;
  }
}
</style>
