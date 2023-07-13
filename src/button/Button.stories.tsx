import type { Meta, StoryObj } from '@storybook/react';

import  Button  from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: 'link',
    children: 'Button',
  },
};


export const Basic:Story = {
  render:()=>
  <>
    <Button>click me</Button>
    <Button type='primary'>click me</Button>
    <Button type='link'>click me</Button>
    <Button type='text'>click me</Button>
    <Button type='dashed'>click me</Button>
  </>
}



