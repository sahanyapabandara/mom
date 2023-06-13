import { mount } from "@vue/test-utils"
import MomUpload from "@/components/upload/MomUpload.vue"
import MomUploadDropzone from "@/components/upload/_MomUploadDropzone.vue"
import MomUploadFileList from "@/components/upload/_MomUploadFileList.vue"

let component, dropzone, filelist
const inputStateArray = ["error", "warning", "disabled"]

describe("MomUpload", () => {
  beforeEach(() => {
    document.body.innerHTML = ""
    let hidden = document.createElement("span")
    hidden.setAttribute("id", "demo")
    document.body.appendChild(hidden)
    component = mount(MomUpload, {
      propsData: {
        url: "https://httpbin.org/post",
        idForHiddenInput: "demo",
      },
    })
    dropzone = component.findComponent(MomUploadDropzone)
    filelist = component.findComponent(MomUploadFileList)
  })

  test("Default file upload", () => {
    expect(component.classes()).toContain("MomUpload")
    expect(dropzone.exists()).toBeTruthy()
    expect(filelist.exists()).toBeFalsy()
  })

  test("Dropzone main text", async () => {
    await component.setProps({ mainText: "Main text" })
    expect(dropzone.find("p.MomUploadDropzone__Maintext").text()).toEqual("Main text")
  })

  test("Dropzone main text (Html input)", async () => {
    await component.setProps({ mainText: "Main <em>text</em>" })
    expect(dropzone.find("p.MomUploadDropzone__Maintext").find("em").html()).toEqual(
      "<em>text</em>"
    )
  })

  test("Dropzone sub text", async () => {
    await component.setProps({ subText: "Sub text" })
    expect(dropzone.find("p.MomUploadDropzone__Subtext").text()).toEqual("Sub text")
  })

  test("Dropzone sub text (Html input)", async () => {
    await component.setProps({ subText: "Sub <em>text</em>" })
    expect(dropzone.find("p.MomUploadDropzone__Subtext").find("em").html()).toEqual("<em>text</em>")
  })

  describe("Upload input state", () => {
    test.each(inputStateArray)("Input state: %p", async inputState => {
      await component.setProps({ inputState: inputState })
      expect(dropzone.classes()).toContain(`MomUploadDropzone--input-state-${inputState}`)
    })
  })
})
