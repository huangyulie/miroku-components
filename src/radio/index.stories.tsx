import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./radio";

const meta: Meta<typeof Radio > = {
  title: "Example/Radio",
  component: Radio ,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio >;

export const Primary: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};
