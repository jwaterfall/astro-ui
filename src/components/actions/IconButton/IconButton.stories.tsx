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
      options: ["filled", "tonal", "outlined", "elavated", "text"],
      description: "The visual style of the button. Defaults to `filled`.",
    },
    icon: {
      control: "none",
      description: "The icon to display inside the button.",
    },
    onClick: {
      action: "onClick",
      description: "A callback function to be called when the button is clicked.",
    },
    disabled: {
      type: "boolean",
      description: "Whether or not the button is disabled. Defaults to `false`.",
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
