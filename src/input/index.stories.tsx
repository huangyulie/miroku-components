import type { Meta, StoryObj } from "@storybook/react";

import input from "./component";

const meta: Meta<typeof input > = {
  title: "Example/Button",
  component: input ,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof input >;

export const Primary: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};
