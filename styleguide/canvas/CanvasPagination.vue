<template>
  <div id="CanvasPagination">
    <div class="rsg--preview-66">
      <MomPagination
        :total-items="totalItems"
        :itemsPerPage="itemsPerPage ? itemsPerPage : 0"
        :page="page ? page : 1"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasPagination",
  data() {
    return {
      totalItems: "100",
      itemsPerPage: null,
      page: null,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "totalItems",
          label: "Total items",
          type: "text",
          size: 20,
          value: this.totalItems,
        },
        {
          name: "itemsPerPage",
          label: "Items per page",
          type: "text",
          size: 20,
          value: this.itemsPerPage,
        },
        {
          name: "page",
          label: "Current page",
          type: "text",
          size: 20,
          value: this.page,
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-pagination"
      html += this.totalItems ? ` total-items="${this.totalItems}"` : ' total-items="0"'
      html +=
        this.itemsPerPage && this.itemsPerPage !== ""
          ? ` items-per-page="${this.itemsPerPage}"`
          : ""
      html += this.page && this.page !== "" ? ` page="${this.page}"` : ""
      html += " />"

      return html
    },
  },
}
</script>
