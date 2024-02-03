/**
 * @jest-environment happy-dom
 */
import { describe, it, expect} from "vitest";
import { mount } from "@vue/test-utils";
import BtnCount from "../components/BtnCount.vue";
describe("BtnCount", () => {
  it("test render", async () => {
    const wrapper = mount(BtnCount);
    // expect(wrapper.find("span").text()).toBe("0");
  })
});