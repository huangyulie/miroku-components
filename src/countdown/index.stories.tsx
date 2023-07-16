import type { Meta, StoryObj } from "@storybook/react";

import Countdown from "./countdown";

const meta: Meta<typeof Countdown > = {
  title: "Example/Countdown",
  component: Countdown ,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Countdown >;

export const Primary: Story = {
  args: {
    type: "link",
    children: "Button",
    size: "small",
  },
};
