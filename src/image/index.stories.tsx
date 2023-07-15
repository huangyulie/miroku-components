import type { Meta, StoryObj } from "@storybook/react";

import Image from "./image";

const meta: Meta<typeof Image > = {
  title: "Example/Image",
  component: Image ,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Image >;

export const Primary: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};
