import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import { MdCheck } from "react-icons/md";

const meta: Meta = {
  title: "Selection/Switch",
  tags: ["autodocs"],
};

export default meta;

export const UsingRadixUi: StoryObj = {
  render: () => {
    return (
      <>
        <RadixSwitch.Root className="switch">
          <RadixSwitch.Thumb className="switch-thumb">
            <MdCheck size={16} />
          </RadixSwitch.Thumb>
        </RadixSwitch.Root>
        <RadixSwitch.Root className="switch" disabled>
          <RadixSwitch.Thumb className="switch-thumb">
            <MdCheck size={16} />
          </RadixSwitch.Thumb>
        </RadixSwitch.Root>
        <RadixSwitch.Root className="switch" disabled checked>
          <RadixSwitch.Thumb className="switch-thumb">
            <MdCheck size={16} />
          </RadixSwitch.Thumb>
        </RadixSwitch.Root>
      </>
    );
  },
};

export const UsingHeadlessUi: StoryObj = {
  render: () => {
    return (
      <>
        <HeadlessSwitch className="switch">
          <span className="switch-thumb">
            <MdCheck size={16} />
          </span>
        </HeadlessSwitch>
        <HeadlessSwitch className="switch" disabled>
          <span className="switch-thumb">
            <MdCheck size={16} />
          </span>
        </HeadlessSwitch>
        <HeadlessSwitch className="switch" disabled checked>
          <span className="switch-thumb">
            <MdCheck size={16} />
          </span>
        </HeadlessSwitch>
      </>
    );
  },
};
