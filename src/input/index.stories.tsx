import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";

const meta: Meta<typeof Input > = {
  title: "Example/Button",
  component: Input ,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input >;

export const Primary: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};
