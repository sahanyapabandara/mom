<template>
  <MomLayoutWrapper class="MomTocPage">
    <!-- @slot Precard -->
    <slot name="precard"></slot>

    <div class="MomTocPage__Wrapper">
      <MomInputSelect
        placeholder="Choose a section"
        :options="sections"
        class="MomTocPage__Select"
        @input="jumpToSection"
      />

      <div class="MomTocPage__Content" ref="content">
        <!-- @slot Main content -->
        <slot></slot>
      </div>

      <div class="MomTocPage__Titles">
        <MomLink
          v-for="section in sections"
          :key="section.value"
          class="MomTocPage__Title"
          :text="section.label"
          size="l"
          :href="'#' + section.value"
        />
      </div>
    </div>
  </MomLayoutWrapper>
</template>

<script>
import MomLayoutWrapper from "@/components/layout/MomLayoutWrapper.vue"
import MomInputSelect from "@/components/input/selectfield/MomInputSelect.vue"
import MomLink from "@/components/link/MomLink.vue"

export default {
  name: "MomTocPage",
  release: "2.3.9",
  lastUpdated: "2.3.9",
  components: {
    MomLayoutWrapper,
    MomInputSelect,
    MomLink,
  },
  data() {
    return {
      sections: [],
      activeSection: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateSections()
      window.addEventListener("DOMContentLoaded", this.addObserver)
    })
  },
  methods: {
    updateSections() {
      this.sections = []
      this.$refs.content.querySelectorAll(".MomCard[id]").forEach(section => {
        this.sections.push({
          value: section.id,
          label: section.querySelector("h2").innerText,
        })
      })
    },

    addObserver() {
      let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          let id = entry.target.getAttribute("id")
          if (entry.isIntersecting) {
            document
              .querySelector(`.MomTocPage__Title[href="#${id}"]`)
              .classList.add("MomTocPage__Title--is-active")
          } else {
            document
              .querySelector(`.MomTocPage__Title[href="#${id}"]`)
              .classList.remove("MomTocPage__Title--is-active")
          }
        })
      })
      document.querySelectorAll(".MomCard[id]").forEach(section => observer.observe(section))
    },

    jumpToSection(id) {
      window.location.href = "#" + id
    },
  },
}
</script>

<style lang="scss" scoped>
.MomTocPage__Wrapper {
  display: flex;
  flex-direction: column;

  @media #{$media-query-desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
}

.MomTocPage__Content {
  flex: 1;

  @media #{$media-query-desktop} {
    margin-right: rem(32);
  }
}

.MomTocPage__Select {
  margin: 0 auto rem(24);

  @media #{$media-query-desktop} {
    display: none;
  }
}

.MomTocPage__Titles {
  display: none;

  @media #{$media-query-desktop} {
    display: flex;
    flex-direction: column;
    width: rem(300);
    position: sticky;
    top: rem(12);
  }
}

.MomTocPage__Title {
  &--is-active {
    color: $color-cool-grey-100 !important;
  }

  @media #{$media-query-desktop} {
    @include stack-margin(rem(24));
  }
}
</style>

<docs>
### Toc page template

```jsx
  <mom-toc-page
    :sections="[
      {
        id: 'section1',
        title: 'Title 1',
      },
      {
        id: 'section2',
        title: 'Title 2',
      },
      {
        id: 'section3',
        title: 'Title 3',
      },
    ]"
  >
    <mom-card id="section1">
      <h1 class="mom-h1">Title 1</h1>
      <p class="mom-p">This is description.</p>
    </mom-card>

    <mom-card id="section2">
      <h1 class="mom-h1">Title 2</h1>
      <p class="mom-p">This is description.</p>
    </mom-card>

    <mom-card id="section3">
      <h1 class="mom-h1">Title 3</h1>
      <p class="mom-p">This is description.</p>
    </mom-card>      
  </mom-toc-page>
```
</docs>
