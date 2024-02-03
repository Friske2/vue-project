/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect} from "vitest";
import { mount } from "@vue/test-utils";
import Helloworld from "../components/Helloworld.vue";
// import { expect, test } from "vitest";


describe("Helloworld", () => {
  it("test render", async () => {
    const wrapper = mount(Helloworld);
    expect(wrapper.text()).toBe("Hello World");
  });
});