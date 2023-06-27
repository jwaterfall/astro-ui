import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MdShoppingCart } from "react-icons/md";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Actions/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["filled", "tonal", "outlined", "elavated", "text"],
      description: "The visual style of the button. Defaults to `filled`.",
    },
    iconLeft: {
      control: "none",
      description: "An optional icon to display on the left side of the button.",
    },
    iconRight: {
      control: "none",
      description: "An optional icon to display on the right side of the button.",
    },
    children: {
      type: "string",
      description: "The text to display inside the button.",
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <>
      <Button {...args} />
      <Button {...args} variant="tonal" />
      <Button {...args} variant="outlined" />
      <Button {...args} variant="elavated" />
      <Button {...args} variant="text" />
    </>
  ),
};

export const WithIcon: Story = {
  ...Default,
  args: {
    ...Default.args,
    iconLeft: MdShoppingCart,
  },
};

export const WithEndIcon: Story = {
  ...Default,
  args: {
    ...Default.args,
    iconRight: MdShoppingCart,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
