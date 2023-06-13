import { mount } from "@vue/test-utils"
import MomImageCarousel from "@/components/image/MomImageCarousel.vue"
import MomImage from "@/components/image/MomImage.vue"

let component, preview
const images = [
  {
    url: "https://via.placeholder.com/200x200.png",
    description: "First image",
  },
  {
    url: "https://via.placeholder.com/200x400.png",
    description: "Second image",
  },
  {
    url: "https://via.placeholder.com/400x400.png",
    description: "Third image",
  },
]
const thumbnailTypeArray = ["image", "bullet", "none"]

describe("MomImageCarousel", () => {
  beforeEach(() => {
    component = mount(MomImageCarousel, {
      propsData: {
        images: images,
      },
    })
    preview = component.find(".MomImageCarousel__Preview")
  })

  test("Default image carousel", () => {
    expect(component.classes()).toContain("MomImageCarousel")
    expect(preview.exists()).toBeTruthy()
  })

  describe("Preview image", () => {
    test("First image", () => {
      expect(preview.exists()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__Image").exists()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__PrevButton").isVisible()).toBeFalsy()
      expect(preview.find(".MomImageCarousel__NextButton").isVisible()).toBeTruthy()
    })

    test("Other images", async () => {
      await component.setData({ currentImageIndex: 1 })
      preview = component.find(".MomImageCarousel__Preview")
      expect(preview.exists()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__Image").exists()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__PrevButton").isVisible()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__NextButton").isVisible()).toBeTruthy()
    })

    test("Last image", async () => {
      await component.setData({ currentImageIndex: images.length - 1 })
      preview = component.find(".MomImageCarousel__Preview")
      expect(preview.exists()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__Image").exists()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__PrevButton").isVisible()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__NextButton").isVisible()).toBeFalsy()
    })
  })

  test("Image description", () => {
    let description = component.find(".MomImageCarousel__Description")
    expect(description.exists()).toBeTruthy()
    expect(description.find("p.mom-p").text()).toEqual("First image")
  })

  test("Full size image", async () => {
    await component.setProps({ imageSize: "full" })
    expect(component.classes()).toContain("MomImageCarousel--image-full")
  })

  test("Zoomable image carousel", async () => {
    await component.setProps({ zoomable: true })
    expect(preview.find(".MomImageCarousel__Image").classes()).toContain(
      "MomImageCarousel__Image--zoomable"
    )
  })

  describe("Thumbnails", () => {
    let thumbnailWrapper, bullets
    test.each(thumbnailTypeArray)("Thumbnail type: %p", async type => {
      await component.setProps({ thumbnailType: type })
      thumbnailWrapper = component.find(".MomImageCarousel__ThumbnailWrapper")
      bullets = component.find(".MomImageCarousel__Bullets")
      if (type === "image") {
        expect(thumbnailWrapper.exists()).toBeTruthy()
        expect(bullets.exists()).toBeFalsy()
        expect(component.findAllComponents(MomImage).length).toEqual(images.length + 1)
        let thumbnails = thumbnailWrapper.findAll(".MomImageCarousel__Thumbnail")
        expect(thumbnails.length).toBe(images.length)
        expect(thumbnails.at(0).classes()).toContain("MomImageCarousel__Thumbnail--selected")
      } else if (type === "bullet") {
        expect(thumbnailWrapper.exists()).toBeFalsy()
        expect(bullets.exists()).toBeTruthy()
        expect(component.findAllComponents(MomImage).length).toEqual(1)
        let bullet = bullets.findAll(".MomImageCarousel__Bullet")
        expect(bullet.length).toBe(images.length)
        expect(bullet.at(0).classes()).toContain("MomImageCarousel__Bullet--selected")
      } else if (type === "none") {
        expect(thumbnailWrapper.exists()).toBeFalsy()
        expect(bullets.exists()).toBeFalsy()
        expect(component.findAllComponents(MomImage).length).toEqual(1)
      }
    })
  })

  describe("Click event", () => {
    let thumbnailWrapper, thumbnails

    beforeEach(() => {
      thumbnailWrapper = component.find(".MomImageCarousel__ThumbnailWrapper")
      thumbnails = thumbnailWrapper.findAll(".MomImageCarousel__Thumbnail")
    })

    test("Prev button", async () => {
      await component.setData({ currentImageIndex: images.length - 1 })
      await preview.find(".MomImageCarousel__PrevButton").trigger("click")
      preview = component.find(".MomImageCarousel__Preview")
      expect(preview.find(".MomImageCarousel__PrevButton").isVisible()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__NextButton").isVisible()).toBeTruthy()
      expect(thumbnails.at(images.length - 2).classes()).toContain(
        "MomImageCarousel__Thumbnail--selected"
      )
    })

    test("Next button", async () => {
      await preview.find(".MomImageCarousel__NextButton").trigger("click")
      preview = component.find(".MomImageCarousel__Preview")
      expect(preview.find(".MomImageCarousel__PrevButton").isVisible()).toBeTruthy()
      expect(preview.find(".MomImageCarousel__NextButton").isVisible()).toBeTruthy()
      expect(thumbnails.at(1).classes()).toContain("MomImageCarousel__Thumbnail--selected")
    })
  })
})
