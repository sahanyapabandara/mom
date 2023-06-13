<template>
  <div class="CanvasImageModal">
    <div class="rsg--preview-66">
      <MomImageModal
        :images="images"
        :showModal="showModal"
        :closeOnEsc="closeOnEsc"
        :closeOnOverlayClick="closeOnOverlayClick"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasImageModal",
  data() {
    return {
      images: [
        {
          url: "https://via.placeholder.com/200x200.png",
          filename: "filename 1.jpg",
        },
        {
          url: "https://via.placeholder.com/200x400.png",
          filename: "filename 2.jpg",
        },
        {
          url: "https://via.placeholder.com/400x400.png",
          filename: "filename 3.jpg",
        },
        {
          url: "https://via.placeholder.com/600x400.png",
          filename: "filename 4.jpg",
        },
        {
          url: "https://via.placeholder.com/600x600.png",
          filename: "filename 5.jpg",
        },
        {
          url: "https://via.placeholder.com/800x900.png",
          filename: "filename 6.jpg",
        },
        {
          url: "https://via.placeholder.com/700x200.png",
          filename: "filename 7.jpg",
        },
      ],
      showModal: false,
      closeOnEsc: true,
      closeOnOverlayClick: true,
    }
  },
  computed: {
    attrList() {
      return [
        {
          name: "images",
          label: "Images",
          type: "objectArray",
          attr: [
            { name: "url", label: "Image url", type: "text", size: 75 },
            { name: "filename", label: "Image filename", type: "text" },
          ],
        },
        {
          name: "showModal",
          label: "Show image modal",
          type: "boolean",
        },
        {
          name: "closeOnEsc",
          label: "Close on ESC",
          type: "boolean",
        },
        {
          name: "closeOnOverlayClick",
          label: "Close on overlay click",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-image-modal\n"
      html += '\t:images="[\n'
      this.images.forEach(image => {
        html += "\t\t{\n"
        html += `\t\t\turl: '${image.url}',\n`
        html += image.filename ? `\t\t\tfilename: '${image.filename}',\n` : ""
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += this.showModal ? "\tshow-modal\n" : ""
      html += !this.closeOnEsc ? '\t:close-on-esc="false"\n' : ""
      html += !this.closeOnOverlayClick ? '\t:close-on-overlay-click="false"\n' : ""
      html += "/>"

      return html
    },
  },
}
</script>
