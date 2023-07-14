import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Icon> = {
  title: "Example/Icon",
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: "fixed",
  },
};

export const Fixed: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: "hello",
  },
};
