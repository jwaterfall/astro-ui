import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MdShoppingCart } from "react-icons/md";

import { IconButton } from ".";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Actions/IconButton",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "A default button will fill the background with the color, while an outlined button will only have a border.",
      options: ["filled", "tonal", "outlined", "elavated", "text"],
    },
    onClick: {
      description: "The function to call when the button is clicked.",
      action: "onClick",
    },
    icon: {
      description: "An icon to display to the left of the text.",
      control: "none",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: MdShoppingCart,
  },
  render: (args) => (
    <>
      <IconButton {...args} />
      <IconButton {...args} variant="tonal" />
      <IconButton {...args} variant="outlined" />
      <IconButton {...args} variant="elavated" />
      <IconButton {...args} variant="text" />
    </>
  ),
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
