import { mount } from "@vue/test-utils"
import MomImageModal from "@/components/image/MomImageModal.vue"
import MomImage from "@/components/image/MomImage.vue"

let component, modal
const images = [
  {
    url: "https://via.placeholder.com/200x200.png",
    filename: "First_image.jpg",
  },
  {
    url: "https://via.placeholder.com/200x400.png",
    filename: "Second_image.jpg",
  },
  {
    url: "https://via.placeholder.com/400x400.png",
    filename: "Third_image.jpg",
  },
]

describe.only("MomImageModal", () => {
  beforeEach(() => {
    component = mount(MomImageModal, {
      propsData: {
        images: images,
      },
      attachTo: document.body,
    })
  })

  test("Default image modal", () => {
    expect(component.classes()).toContain("MomImageModal__Wrapper")
    expect(component.find(".MomImageModal__Preview").exists()).toBeTruthy()
    expect(component.findAllComponents(MomImage).length).toEqual(images.length)
    expect(component.find(".overlay").exists()).toBeFalsy()
    expect(component.find(".MomImageModal").exists()).toBeFalsy()
  })

  test("Show image modal by default", async () => {
    await component.setProps({ showModal: true })

    expect(component.find(".overlay").exists()).toBeTruthy()
    modal = component.find(".MomImageModal")
    expect(modal.exists()).toBeTruthy()
    expect(modal.find(".MomImageModal__Image").exists()).toBeTruthy()
    expect(modal.find(".MomImageModal__Caption").exists()).toBeTruthy()
    expect(modal.find(".MomImageModal__Footer").exists()).toBeTruthy()
    expect(modal.find(".MomImageModal__CloseButton").exists()).toBeTruthy()
  })

  describe("Modal", () => {
    beforeEach(async () => {
      await component.findAllComponents(MomImage).at(0).trigger("click")
      await component.vm.$nextTick()
      modal = component.find(".MomImageModal")
    })

    test("Show modal image", () => {
      expect(modal.find(".MomImageModal__Image").exists()).toBeTruthy()
    })

    test("Show close button image", () => {
      expect(modal.find(".MomImageModal__CloseButton").exists()).toBeTruthy()
    })

    test("Image caption", () => {
      let caption = modal.find(".MomImageModal__Caption")
      expect(caption.exists()).toBeTruthy()
      expect(caption.find(".MomImageModal__Filename").text()).toEqual("First_image.jpg")
    })

    test("Thumbnails", () => {
      let thumbnailWrapper = component.find(".MomImageModal__ThumbnailWrapper")
      expect(thumbnailWrapper.exists()).toBeTruthy()
      expect(thumbnailWrapper.find(".MomImageModal__Thumbnails").exists()).toBeTruthy()
      let thumbnails = thumbnailWrapper.findAll(".MomImageModal__Thumbnail")
      expect(thumbnails.length).toBe(images.length)
      expect(thumbnails.at(0).classes()).toContain("MomImageModal__Thumbnail--selected")
    })

    describe("Preview image", () => {
      test("First image", () => {
        expect(modal.find(".MomImage").exists()).toBeTruthy()
        expect(modal.find(".MomImageModal__PrevButton").isVisible()).toBeFalsy()
        expect(modal.find(".MomImageModal__NextButton").isVisible()).toBeTruthy()
      })

      test("Other images", async () => {
        await component.setData({ currentImageIndex: 1 })
        modal = component.find(".MomImageModal")
        expect(modal.find(".MomImageModal__Image").exists()).toBeTruthy()
        expect(modal.find(".MomImageModal__PrevButton").isVisible()).toBeTruthy()
        expect(modal.find(".MomImageModal__NextButton").isVisible()).toBeTruthy()
      })

      test("Last image", async () => {
        await component.setData({ currentImageIndex: images.length - 1 })
        modal = component.find(".MomImageModal")
        expect(modal.find(".MomImageModal__Image").exists()).toBeTruthy()
        expect(modal.find(".MomImageModal__PrevButton").isVisible()).toBeTruthy()
        expect(modal.find(".MomImageModal__NextButton").isVisible()).toBeFalsy()
      })
    })

    describe("Click event", () => {
      let thumbnailWrapper, thumbnails

      beforeEach(() => {
        thumbnailWrapper = component.find(".MomImageModal__ThumbnailWrapper")
        thumbnails = thumbnailWrapper.findAll(".MomImageModal__Thumbnail")
      })

      test("Close button", async () => {
        await modal.find(".MomImageModal__CloseButton").trigger("click")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeFalsy()
        expect(component.find(".MomImageModal").exists()).toBeFalsy()
      })

      test("Close on overlay click", async () => {
        await component.find(".overlay").trigger("click")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeFalsy()
        expect(component.find(".MomImageModal").exists()).toBeFalsy()
      })

      test("Disabled close on overlay click", async () => {
        await component.setProps({ closeOnOverlayClick: false })
        await component.find(".overlay").trigger("click")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeTruthy()
        expect(component.find(".MomImageModal").exists()).toBeTruthy()
      })

      test("Close on ESC", async () => {
        await component.trigger("keydown.esc")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeFalsy()
        expect(component.find(".MomImageModal").exists()).toBeFalsy()
      })

      test("Disabled close on ESC", async () => {
        await component.setProps({ closeOnEsc: false })
        await component.trigger("keydown.esc")
        await component.vm.$nextTick()
        expect(component.find(".overlay").exists()).toBeTruthy()
        expect(component.find(".MomImageModal").exists()).toBeTruthy()
      })

      test("Prev button", async () => {
        await component.setData({ currentImageIndex: images.length - 1 })
        modal = component.find(".MomImageModal")
        await modal.find(".MomImageModal__PrevButton").trigger("click")
        modal = component.find(".MomImageModal")
        expect(modal.find(".MomImageModal__PrevButton").exists()).toBeTruthy()
        expect(modal.find(".MomImageModal__NextButton").exists()).toBeTruthy()
        expect(thumbnails.at(images.length - 2).classes()).toContain(
          "MomImageModal__Thumbnail--selected"
        )
      })

      test("Next button", async () => {
        modal = component.find(".MomImageModal")
        await modal.find(".MomImageModal__NextButton").trigger("click")
        modal = component.find(".MomImageModal")
        expect(modal.find(".MomImageModal__PrevButton").exists()).toBeTruthy()
        expect(modal.find(".MomImageModal__NextButton").exists()).toBeTruthy()
        expect(thumbnails.at(1).classes()).toContain("MomImageModal__Thumbnail--selected")
      })
    })
  })
})
