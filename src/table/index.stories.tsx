import type { Meta, StoryObj } from "@storybook/react";

import Table from "./table";

const meta: Meta<typeof Table > = {
  title: "Example/Button",
  component: Table ,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table >;

export const Primary: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};
