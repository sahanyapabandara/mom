<template>
  <div class="CanvasImageCarousel">
    <div class="rsg--preview-66">
      <MomImageCarousel
        :images="images"
        :width="width || '544'"
        :height="height || '544'"
        :imageSize="imageSize"
        :thumbnailType="thumbnailType || 'image'"
        :zoomable="zoomable"
      />
    </div>

    <DocsCode :code="code" />

    <DocsAttributeList :attrList="attrList" :data="$data" />
  </div>
</template>

<script>
export default {
  name: "CanvasImageCarousel",
  data() {
    return {
      images: [
        {
          url: "https://via.placeholder.com/200x200.png",
          description: "Image 200 x 200",
        },
        {
          url: "https://via.placeholder.com/200x400.png",
          description: "Image 200 x 400",
        },
        {
          url: "https://via.placeholder.com/400x400.png",
          description: "Image 400 x 400",
        },
        {
          url: "https://via.placeholder.com/600x400.png",
          description: "Image 600 x 400",
        },
        {
          url: "https://via.placeholder.com/600x600.png",
          description: "Image 600 x 600",
        },
        {
          url: "https://via.placeholder.com/800x900.png",
          description: "Image 800 x 900",
        },
        {
          url: "https://via.placeholder.com/700x200.png",
          description: "Image 700 x 200",
        },
      ],
      width: null,
      height: null,
      imageSize: null,
      thumbnailType: null,
      zoomable: false,
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
            { name: "url", label: "Image url", type: "text" },
            { name: "description", label: "Description", type: "text" },
          ],
        },
        {
          name: "width",
          label: "Carousel width",
          type: "text",
          size: 20,
        },
        {
          name: "height",
          label: "Carousel height",
          type: "text",
          size: 20,
        },
        {
          name: "imageSize",
          label: "Image size",
          type: "options",
          options: [null, "full"],
        },
        {
          name: "thumbnailType",
          label: "Thumbnail type",
          type: "options",
          options: [null, "image", "bullet", "none"],
        },
        {
          name: "zoomable",
          label: "Zoomable",
          type: "boolean",
        },
      ]
    },
    code() {
      let html = ""
      html += "<mom-image-carousel\n"
      html += '\t:images="[\n'
      this.images.forEach(image => {
        html += "\t\t{\n"
        html += `\t\t\turl: '${image.url}',\n`
        html += image.description ? `\t\t\tdescription: '${image.description}',\n` : ""
        html += "\t\t},\n"
      })
      html += '\t]"\n'
      html += this.width ? `\twidth="${this.width}"\n` : ""
      html += this.height ? `\theight="${this.height}"\n` : ""
      html += this.imageSize ? `\timage-size="${this.imageSize}"\n` : ""
      html += this.thumbnailType ? `\tthumbnail-type="${this.thumbnailType}"\n` : ""
      html += this.zoomable ? "\tzoomable\n" : ""
      html += "/>"

      return html
    },
  },
}
</script>
