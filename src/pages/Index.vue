<template>
  <mom-page>
    <mom-page-header
      slot="header"
      title="Page title"
      subtitle="Page subtitle"
      allow-logout
      user-name="User Name"
      company-name="Company name"
      branch-name="Branch name"
      company-uen="195900186R-02-001"
      has-save-button
      last-saved-time="15 Jun 2021, 12:00pm"
      sticky-subheader
    />

    <mom-layout-wrapper>
      <mom-card>
        <p class="mom-p">Page content</p>
      </mom-card>
    </mom-layout-wrapper>

    <mom-page-footer slot="footer" last-updated-date="01 Jul 2021" />
  </mom-page>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {}
  },
  methods: {},
}
</script>
