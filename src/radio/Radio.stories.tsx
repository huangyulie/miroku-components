import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Example/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Basic = () => {
  return <Radio onChange={(e) => console.log(e)}>Basic radio</Radio>;
};

export const Checked = () => {
  return <Radio checked={false}>Checked radio</Radio>;
};

export const Disable = () => {
  return <Radio disabled={true}>Checked radio</Radio>;
};
