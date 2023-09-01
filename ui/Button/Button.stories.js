import { Button } from "./Button";
import "app/index.scss";

export default {
  argTypes: {
    children: "Click me",
  },
  component: Button,
  tags: ["autodocs"],
  title: "Shared/Button",
};

export const Primary = {
  args: {
    children: "Click me",
  },
};

export const Warning = {
  args: {
    children: "Click me",
    variant: "warning",
  },
};

export const Large = {
  args: {
    children: "Click me",
    size: "large",
  },
};

export const LargeWarning = {
  args: {
    children: "Click me",
    size: "large",
    variant: "warning",
  },
};
